import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

export const metadata: Metadata = {
  title: "About — Congruent",
  description:
    "Learn about Congruent's mission, values, and the team behind our consulting practice.",
};

const values = [
  {
    title: "Clarity",
    description:
      "We cut through noise to find the signal. Every recommendation is evidence-based and plainly communicated.",
  },
  {
    title: "Alignment",
    description:
      "Strategy means nothing without execution. We ensure teams, processes, and tools move together.",
  },
  {
    title: "Impact",
    description:
      "We measure success by outcomes, not outputs. If it doesn't move the needle, we don't recommend it.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside your team — not above it. Lasting change comes from capability built within.",
  },
];

const milestones = [
  { year: "2014", event: "Founded with a focus on organisational design" },
  { year: "2017", event: "Expanded into digital transformation consulting" },
  { year: "2020", event: "Grew to 25+ consultants across three offices" },
  { year: "2023", event: "Launched the Congruent Leadership Programme" },
  { year: "2024", event: "Named a top-50 management consultancy" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* ── Page header ── */}
      <Box component="section" className="py-16 md:py-24 text-center">
        <Box
          className="mx-auto mb-4 h-1 w-12 rounded-full"
          sx={{ bgcolor: "secondary.main" }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{ letterSpacing: "-0.03em", lineHeight: 1.1, mb: 3 }}
        >
          Built on the belief that
          <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            alignment&nbsp;accelerates&nbsp;everything
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="max-w-2xl mx-auto"
          sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
        >
          Congruent was founded to solve a simple problem: brilliant strategies
          fail when organisations aren&apos;t set up to execute them. We bridge
          the gap between ambition and action.
        </Typography>
      </Box>

      {/* ── Story split ── */}
      <Box
        component="section"
        className="grid md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-16 items-start"
        sx={{ borderTop: 1, borderColor: "divider" }}
      >
        <div>
          <Typography
            variant="h3"
            component="h2"
            sx={{ letterSpacing: "-0.02em", mb: 3 }}
          >
            Our story
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.8, mb: 2 }}
          >
            What started as a two-person consultancy in 2014 has grown into a
            team of 40+ specialists spanning strategy, technology, and people.
            We&apos;ve worked with start-ups finding product-market fit and
            enterprises navigating digital transformation — always with the same
            principle: clarity first.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Today, Congruent partners with organisations across sectors to design
            strategies that stick, build teams that deliver, and implement
            systems that scale.
          </Typography>
        </div>

        {/* Timeline */}
        <Box
          className="flex flex-col gap-4"
          sx={{ borderLeft: 2, borderColor: "primary.main", pl: 3 }}
        >
          {milestones.map((m) => (
            <Box key={m.year}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                {m.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {m.event}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Values ── */}
      <Box component="section" className="py-16 md:py-20">
        <Typography
          variant="h2"
          component="h2"
          className="text-center mb-3"
          sx={{ letterSpacing: "-0.02em" }}
        >
          Our values
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center max-w-lg mx-auto mb-10"
        >
          Four principles that guide every engagement.
        </Typography>
        <Box className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <BrandCard key={v.title}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                {v.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {v.description}
              </Typography>
            </BrandCard>
          ))}
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box
        component="section"
        className="rounded-2xl px-6 py-14 text-center mb-8"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 800, mb: 2 }}
        >
          Want to work with us?
        </Typography>
        <Typography sx={{ opacity: 0.85, maxWidth: 480, mx: "auto", mb: 4 }}>
          We&apos;re always looking for the next meaningful partnership.
        </Typography>
        <BrandButton
          variant="contained"
          size="large"
          href="/contact"
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            "&:hover": { bgcolor: "secondary.dark" },
          }}
        >
          Start a Conversation
        </BrandButton>
      </Box>
    </Layout>
  );
}
