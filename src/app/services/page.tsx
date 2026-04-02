import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

export const metadata: Metadata = {
  title: "Services — Congruent",
  description:
    "Explore Congruent's consulting services: strategy, digital transformation, organisational design, and leadership development.",
};

const services = [
  {
    title: "Strategic Consulting",
    summary: "From vision to roadmap",
    description:
      "We help leadership teams define where they're going and how they'll get there. Our strategy engagements produce actionable plans — not shelf-ware.",
    deliverables: [
      "Market & competitive analysis",
      "Strategic roadmap with OKRs",
      "Board-ready business cases",
      "Quarterly review cadence",
    ],
  },
  {
    title: "Digital Transformation",
    summary: "Modernise without the chaos",
    description:
      "Technology change fails when it outpaces the organisation. We manage the full lifecycle — from architecture decisions to change management.",
    deliverables: [
      "Technology assessment & selection",
      "Migration planning & execution",
      "Process re-engineering",
      "Adoption & training programmes",
    ],
  },
  {
    title: "Organisational Design",
    summary: "Structure that scales",
    description:
      "The right structure unlocks speed. We redesign teams, roles, and reporting lines to match your strategy — not the other way around.",
    deliverables: [
      "Operating model design",
      "Role architecture & career paths",
      "Team topology mapping",
      "Governance frameworks",
    ],
  },
  {
    title: "Leadership Development",
    summary: "Build the leaders you need",
    description:
      "High-performing organisations start at the top. Our programmes develop leaders who can navigate ambiguity and drive alignment across teams.",
    deliverables: [
      "Executive coaching",
      "Leadership assessment (360°)",
      "Cohort-based programmes",
      "Succession planning",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We listen, diagnose, and map the landscape before recommending anything.",
  },
  {
    step: "02",
    title: "Design",
    description: "Solutions are co-created with your team — practical, phased, and measurable.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "We embed alongside your people to ensure execution matches intent.",
  },
  {
    step: "04",
    title: "Sustain",
    description: "Capability transfer and review cycles keep momentum long after we leave.",
  },
];

export default function ServicesPage() {
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
          Services built for
          <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            real-world&nbsp;complexity
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="max-w-2xl mx-auto"
          sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
        >
          Whether you&apos;re scaling fast, restructuring, or navigating a
          technology shift — we have the expertise to help you move with
          confidence.
        </Typography>
      </Box>

      {/* ── Service cards ── */}
      <Box component="section" className="grid gap-8 md:grid-cols-2 pb-16">
        {services.map((svc) => (
          <BrandCard key={svc.title} sx={{ height: "100%" }}>
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", fontWeight: 700 }}
            >
              {svc.summary}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1, mb: 1.5 }}>
              {svc.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.7 }}
            >
              {svc.description}
            </Typography>
            <Box
              component="ul"
              sx={{
                pl: 2,
                listStyleType: "disc",
                "& li": { mb: 0.5 },
              }}
            >
              {svc.deliverables.map((d) => (
                <Typography
                  key={d}
                  component="li"
                  variant="body2"
                  color="text.secondary"
                >
                  {d}
                </Typography>
              ))}
            </Box>
          </BrandCard>
        ))}
      </Box>

      {/* ── Process ── */}
      <Box
        component="section"
        className="py-16 md:py-20"
        sx={{ borderTop: 1, borderColor: "divider" }}
      >
        <Typography
          variant="h2"
          component="h2"
          className="text-center mb-3"
          sx={{ letterSpacing: "-0.02em" }}
        >
          How we work
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center max-w-lg mx-auto mb-12"
        >
          A proven four-phase approach that balances rigour with pragmatism.
        </Typography>

        <Box className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <Box key={p.step} className="text-center md:text-left">
              <Typography
                variant="h3"
                sx={{ color: "primary.main", fontWeight: 800, mb: 1 }}
              >
                {p.step}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {p.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box
        component="section"
        className="rounded-2xl px-6 py-14 text-center mb-8"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
          Let&apos;s scope your next engagement
        </Typography>
        <Typography sx={{ opacity: 0.85, maxWidth: 480, mx: "auto", mb: 4 }}>
          Every engagement starts with a conversation. Tell us what you&apos;re
          working on and we&apos;ll share how we can help.
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
          Get in Touch
        </BrandButton>
      </Box>
    </Layout>
  );
}
