#!/usr/bin/env node

/**
 * Web scraper for liatleshem.com (Wix site)
 *
 * Uses Playwright to render the JS-heavy Wix pages and extract:
 * - Text content from each page
 * - Image URLs (wixstatic.com hosted)
 * - Audio/video embeds (SoundCloud, YouTube)
 * - Navigation structure
 * - Contact details
 *
 * Output: scraped-content.json in project root
 *
 * Usage: node scripts/scrape-site.mjs
 */

import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "scraped-content");
const BASE_URL = "https://www.liatleshem.com";

const PAGES = [
  { path: "/", name: "home" },
  { path: "/web", name: "web" },
  { path: "/voice-over", name: "voice-over" },
  { path: "/tv", name: "tv" },
  { path: "/radio", name: "radio" },
  { path: "/movies", name: "movies" },
  { path: "/dubbing", name: "dubbing" },
  { path: "/on-camera", name: "on-camera" },
  { path: "/acting", name: "acting" },
  { path: "/presenting", name: "presenting" },
  { path: "/pix", name: "photos" },
  { path: "/english", name: "english" },
  { path: "/contact", name: "contact" },
  { path: "/extras", name: "extras" },
];

async function scrapePage(page, url, name) {
  console.log(`  Scraping: ${url}`);

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  } catch {
    console.log(`  Warning: timeout on ${url}, continuing with partial content`);
  }

  // Wait for Wix content to render
  await page.waitForTimeout(3000);

  const data = await page.evaluate(() => {
    // Extract all visible text blocks
    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span, li, a, label, [data-testid]"
    );
    const texts = [];
    const seen = new Set();
    for (const el of textElements) {
      const text = el.textContent?.trim();
      if (text && text.length > 1 && !seen.has(text)) {
        seen.add(text);
        texts.push({
          tag: el.tagName.toLowerCase(),
          text,
          className: el.className?.toString()?.slice(0, 100) || "",
        });
      }
    }

    // Extract all images
    const images = [];
    const imgElements = document.querySelectorAll("img, [style*='background-image']");
    for (const el of imgElements) {
      if (el.tagName === "IMG") {
        const src = el.src || el.dataset?.src || "";
        if (src && !src.includes("data:image/gif")) {
          images.push({
            src,
            alt: el.alt || "",
            width: el.naturalWidth || el.width || 0,
            height: el.naturalHeight || el.height || 0,
          });
        }
      } else {
        const style = el.style?.backgroundImage || "";
        const match = style.match(/url\(["']?(.+?)["']?\)/);
        if (match) {
          images.push({ src: match[1], alt: "", width: 0, height: 0 });
        }
      }
    }

    // Extract iframes (YouTube, SoundCloud, etc.)
    const iframes = [];
    const iframeElements = document.querySelectorAll("iframe");
    for (const el of iframeElements) {
      const src = el.src || "";
      if (src) {
        iframes.push({
          src,
          title: el.title || "",
          width: el.width || "",
          height: el.height || "",
        });
      }
    }

    // Extract links
    const links = [];
    const linkElements = document.querySelectorAll("a[href]");
    for (const el of linkElements) {
      const href = el.href || "";
      const text = el.textContent?.trim() || "";
      if (href && text) {
        links.push({ href, text });
      }
    }

    // Extract audio elements
    const audioElements = [];
    const audios = document.querySelectorAll("audio, [data-audio-src]");
    for (const el of audios) {
      audioElements.push({
        src: el.src || el.dataset?.audioSrc || "",
        type: el.type || "",
      });
    }

    // Extract video elements
    const videoElements = [];
    const videos = document.querySelectorAll("video");
    for (const el of videos) {
      videoElements.push({
        src: el.src || "",
        poster: el.poster || "",
      });
    }

    // Get page title
    const title = document.title || "";

    // Get meta description
    const metaDesc =
      document.querySelector('meta[name="description"]')?.content || "";

    return {
      title,
      metaDescription: metaDesc,
      texts,
      images,
      iframes,
      links,
      audioElements,
      videoElements,
    };
  });

  // Take a screenshot
  const screenshotPath = join(OUTPUT_DIR, "screenshots", `${name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Take a screenshot of just the viewport for reference
  const thumbPath = join(OUTPUT_DIR, "screenshots", `${name}-thumb.png`);
  await page.screenshot({ path: thumbPath, fullPage: false });

  return {
    url,
    name,
    ...data,
    screenshotPath: `screenshots/${name}.png`,
  };
}

async function scrapeNavigation(page) {
  console.log("  Extracting navigation structure...");

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 30000 });
  } catch {
    console.log("  Warning: timeout on homepage, continuing");
  }
  await page.waitForTimeout(3000);

  const nav = await page.evaluate(() => {
    const navItems = [];
    // Wix menus typically use specific data attributes or aria roles
    const menuItems = document.querySelectorAll(
      '[role="navigation"] a, [data-testid*="menu"] a, nav a, [class*="menu"] a'
    );
    for (const item of menuItems) {
      navItems.push({
        text: item.textContent?.trim() || "",
        href: item.href || "",
        ariaLabel: item.ariaLabel || "",
      });
    }
    return navItems;
  });

  return nav;
}

async function main() {
  console.log("=== Liat Leshem Site Scraper ===\n");
  console.log("Creating output directories...");

  mkdirSync(join(OUTPUT_DIR, "screenshots"), { recursive: true });

  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    locale: "he-IL",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();

  // Scrape navigation
  const navigation = await scrapeNavigation(page);
  console.log(`  Found ${navigation.length} navigation items\n`);

  // Scrape each page
  const results = {};
  for (const pageInfo of PAGES) {
    const url = `${BASE_URL}${pageInfo.path}`;
    try {
      const data = await scrapePage(page, url, pageInfo.name);
      results[pageInfo.name] = data;
      console.log(
        `    → ${data.texts.length} text blocks, ${data.images.length} images, ${data.iframes.length} iframes`
      );
    } catch (err) {
      console.error(`  Error scraping ${url}: ${err.message}`);
      results[pageInfo.name] = { url, name: pageInfo.name, error: err.message };
    }
  }

  await browser.close();

  // Build summary
  const summary = {
    scrapedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    navigation,
    pages: results,
    stats: {
      totalPages: Object.keys(results).length,
      totalTexts: Object.values(results).reduce(
        (sum, p) => sum + (p.texts?.length || 0),
        0
      ),
      totalImages: Object.values(results).reduce(
        (sum, p) => sum + (p.images?.length || 0),
        0
      ),
      totalIframes: Object.values(results).reduce(
        (sum, p) => sum + (p.iframes?.length || 0),
        0
      ),
    },
  };

  // Write results
  const outputPath = join(OUTPUT_DIR, "scraped-content.json");
  writeFileSync(outputPath, JSON.stringify(summary, null, 2), "utf-8");
  console.log(`\n=== Scraping complete ===`);
  console.log(`Output: ${outputPath}`);
  console.log(
    `Stats: ${summary.stats.totalPages} pages, ${summary.stats.totalTexts} text blocks, ${summary.stats.totalImages} images, ${summary.stats.totalIframes} iframes`
  );

  // Also write a human-readable content summary
  let readmeContent = `# Scraped Content from liatleshem.com\n\n`;
  readmeContent += `Scraped at: ${summary.scrapedAt}\n\n`;
  readmeContent += `## Navigation\n\n`;
  for (const item of navigation) {
    readmeContent += `- [${item.text}](${item.href})\n`;
  }
  readmeContent += `\n## Pages\n\n`;
  for (const [name, data] of Object.entries(results)) {
    if (data.error) {
      readmeContent += `### ${name}\n\nError: ${data.error}\n\n`;
      continue;
    }
    readmeContent += `### ${name}\n\n`;
    readmeContent += `**URL:** ${data.url}\n`;
    readmeContent += `**Title:** ${data.title}\n\n`;

    if (data.texts?.length > 0) {
      readmeContent += `**Text content:**\n\n`;
      for (const t of data.texts) {
        if (t.tag.startsWith("h")) {
          readmeContent += `**${t.text}**\n\n`;
        } else {
          readmeContent += `${t.text}\n\n`;
        }
      }
    }

    if (data.images?.length > 0) {
      readmeContent += `**Images (${data.images.length}):**\n\n`;
      for (const img of data.images) {
        readmeContent += `- ${img.alt || "(no alt)"}: ${img.src}\n`;
      }
      readmeContent += `\n`;
    }

    if (data.iframes?.length > 0) {
      readmeContent += `**Embeds (${data.iframes.length}):**\n\n`;
      for (const iframe of data.iframes) {
        readmeContent += `- ${iframe.title || "(untitled)"}: ${iframe.src}\n`;
      }
      readmeContent += `\n`;
    }
    readmeContent += `---\n\n`;
  }

  writeFileSync(join(OUTPUT_DIR, "CONTENT.md"), readmeContent, "utf-8");
  console.log(`Content summary: ${join(OUTPUT_DIR, "CONTENT.md")}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
