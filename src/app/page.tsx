"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

const services = [
  {
    title: "קריינות",
    description: "פרסומות, פרומואים, תוכניות, מענים קוליים, סרטי תדמית ועוד.",
    href: "/voice-over",
    icon: "🎙️",
  },
  {
    title: "מול מצלמה",
    description: "טלוויזיה, רשת, סרטי תדמית / הדרכה / הסברה / הדגמה ועוד.",
    href: "/on-camera",
    icon: "🎬",
  },
  {
    title: "English",
    description: "Voice over and on-camera work in English — native-level fluency.",
    href: "/english",
    icon: "🌍",
  },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/user/liatleshem" },
  { label: "SoundCloud", href: "https://soundcloud.com/liatleshem" },
  { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/" },
  { label: "Instagram", href: "https://www.instagram.com/leshem.liat/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/liatlesh/" },
  { label: "TikTok", href: "https://www.tiktok.com/@liatleshem" },
];

export default function Home() {
  return (
    <Layout>
      {/* ── Hero: Split layout ── */}
      <Box
        component="section"
        className="relative grid md:grid-cols-[45%_55%] items-center gap-8 py-16 md:py-24 -mx-4 px-4 overflow-hidden"
        sx={{ minHeight: { md: "85vh" } }}
      >
        {/* Gradient overlay */}
        <Box
          className="absolute inset-0 pointer-events-none"
          sx={{
            background:
              "linear-gradient(to left, transparent 40%, rgba(26,26,46,0.95) 100%)",
            zIndex: 1,
          }}
        />

        {/* Text side */}
        <Box className="relative z-10 flex flex-col gap-5">
          {/* Decorative gold line */}
          <Box
            className="hidden md:block absolute -right-8 top-0 bottom-0 w-px"
            sx={{
              background:
                "linear-gradient(to bottom, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
            }}
          />

          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              animation: "fade-up 0.6s ease-out both",
            }}
          >
            קריינית &bull; שחקנית &bull; מגישה
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              animation: "fade-up 0.6s ease-out 0.15s both",
            }}
          >
            נעים מאוד,
            <br />
            אני ליאת לשם
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: 420,
              animation: "fade-up 0.6s ease-out 0.3s both",
            }}
          >
            קריינית ומדבבת רב-גונית ומנוסה. משחקת ומגישה מול מצלמה.
            עברית ואנגלית.
          </Typography>

          <Box
            className="flex flex-wrap gap-3 mt-2"
            sx={{ animation: "fade-up 0.6s ease-out 0.45s both" }}
          >
            <BrandButton
              href="/voice-over"
              variant="contained"
              size="large"
            >
              הדוגמאות שלי
            </BrandButton>
            <BrandButton
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(201,168,76,0.5)",
                color: "primary.main",
                "&:hover": {
                  borderColor: "#C9A84C",
                  bgcolor: "rgba(201,168,76,0.08)",
                },
              }}
            >
              צרו קשר
            </BrandButton>
          </Box>
        </Box>

        {/* Portrait side */}
        <Box
          className="relative z-10 flex justify-center md:justify-end"
          sx={{ animation: "fade-up 0.8s ease-out 0.2s both" }}
        >
          <Box
            className="relative rounded-2xl overflow-hidden"
            sx={{
              width: { xs: 280, md: 420 },
              height: { xs: 340, md: 520 },
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <Image
              src="/images/liat-avatar.webp"
              alt="ליאת לשם — קריינית ומשחקת מול מצלמה"
              fill
              priority
              className="object-cover"
            />
            {/* Bottom gradient fade */}
            <Box
              className="absolute inset-x-0 bottom-0 h-24"
              sx={{
                background:
                  "linear-gradient(to top, rgba(26,26,46,0.6), transparent)",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── Two-column intro ── */}
      <Box
        component="section"
        className="grid md:grid-cols-2 gap-8 py-14"
        sx={{
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <Box className="animate-fade-up">
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
          >
            🎙️ קריינות
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            קריינית ומדבבת רב-גונית ומנוסה. עברית ואנגלית. מקליטה גם מהבית.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            פרסומות, פרומואים, תוכניות, מענים קוליים, סרטי תדמית ועוד.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            מיוצגת ע&quot;י{" "}
            <Box component="span" sx={{ fontWeight: 600 }}>
              תאריקה זוהר
            </Box>
            :{" "}
            <Box
              component="a"
              href="tel:0546883886"
              sx={{ color: "primary.main" }}
              dir="ltr"
            >
              054-6883886
            </Box>
          </Typography>
        </Box>

        <Box className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
          >
            🎬 מול מצלמה
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            מגישה ומשחקת מול מצלמה. עברית ואנגלית. מנוסה בכל סוגי ההפקות.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            טלוויזיה, רשת, סרטי תדמית / הדרכה / הסברה / הדגמה ועוד.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            מיוצגת ע&quot;י{" "}
            <Box component="span" sx={{ fontWeight: 600 }}>
              חני שלום
            </Box>
            :{" "}
            <Box
              component="a"
              href="tel:0523854411"
              sx={{ color: "primary.main" }}
              dir="ltr"
            >
              052-3854411
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* ── Summary ── */}
      <Box component="section" className="py-14 text-center animate-fade-up">
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ lineHeight: 1.8, maxWidth: 600, mx: "auto" }}
        >
          בקיצור, גם קריינות וגם מול מצלמה. כזו אני. גם וגם. ועוד.
          <br />
          נווטו כאן למעלה לכל הדוגמיות שתוכלו לאכול ועוד ועוד,{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            בתאבון
          </Box>{" "}
          :)
        </Typography>
      </Box>

      {/* ── Services cards ── */}
      <Box component="section" className="py-10">
        <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <BrandCard
              key={service.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Typography
                variant="h3"
                component="span"
                sx={{ display: "block", mb: 1 }}
              >
                {service.icon}
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {service.description}
              </Typography>
              <BrandButton variant="text" size="small" href={service.href}>
                לדוגמאות ←
              </BrandButton>
            </BrandCard>
          ))}
        </Box>
      </Box>

      {/* ── Social bar ── */}
      <Box component="section" className="text-center py-8 mb-4 animate-fade-up">
        <Box className="flex flex-wrap justify-center gap-3">
          {socials.map((social) => (
            <Box
              key={social.label}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 6,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                color: "text.primary",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
                transition: "all 0.2s",
              }}
            >
              {social.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
