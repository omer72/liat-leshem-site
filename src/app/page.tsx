import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

const features = [
  {
    title: "Strategic Consulting",
    description:
      "We partner with organisations to align strategy, structure, and culture — driving measurable outcomes.",
  },
  {
    title: "Digital Transformation",
    description:
      "From legacy systems to modern platforms, we guide every stage of your technology evolution.",
  },
  {
    title: "Organisational Design",
    description:
      "Build high-performing teams with structures that flex, scale, and deliver.",
  },
];

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "12", label: "Years of expertise" },
  { value: "98%", label: "Client satisfaction" },
  { value: "40+", label: "Team members" },
];

export default function Home() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <Box
        component="section"
        className="relative flex flex-col items-center gap-6 py-20 md:py-28 text-center"
      >
        <Box
          className="mx-auto mb-2 h-1 w-16 rounded-full"
          sx={{ bgcolor: "secondary.main" }}
        />
        <Typography
          variant="h1"
          component="h1"
          className="max-w-3xl"
          sx={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Clarity drives
          <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            congruent&nbsp;growth
          </Box>
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl"
          sx={{ fontWeight: 400, lineHeight: 1.6 }}
        >
          We help ambitious organisations align strategy with execution —
          so every decision, team, and system moves in the same direction.
        </Typography>
        <Box className="flex flex-wrap justify-center gap-3 pt-2">
          <BrandButton size="large" href="/services">
            Our Services
          </BrandButton>
          <BrandButton variant="outlined" size="large" href="/about">
            Learn More
          </BrandButton>
        </Box>
      </Box>

      {/* ── Stats ribbon ── */}
      <Box
        component="section"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 md:py-16"
        sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}
      >
        {stats.map((stat) => (
          <Box key={stat.label} className="text-center">
            <Typography
              variant="h3"
              component="p"
              sx={{ color: "primary.main", fontWeight: 800 }}
            >
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ── Features ── */}
      <Box component="section" className="py-16 md:py-20">
        <Typography
          variant="h2"
          component="h2"
          className="text-center mb-4"
          sx={{ letterSpacing: "-0.02em" }}
        >
          What we do
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center max-w-xl mx-auto mb-10"
        >
          Focused expertise across the disciplines that matter most to
          growing organisations.
        </Typography>
        <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <BrandCard key={feature.title}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </BrandCard>
          ))}
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box
        component="section"
        className="rounded-2xl px-6 py-14 md:py-18 text-center mb-8"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em", mb: 2 }}
        >
          Ready to align your organisation?
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.85, maxWidth: 520, mx: "auto", mb: 4 }}
        >
          Let&apos;s start a conversation about where you are today and where you
          want to be.
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
