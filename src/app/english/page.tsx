import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

export const metadata: Metadata = {
  title: "I Also Do English",
  description: "Voice over and on-camera work in English — native-level fluency from attending American school.",
};

const services = [
  {
    title: "Voice Over",
    description: "Commercials, corporate films, e-learning, narration, and character voices in English.",
    emoji: "🎙️",
  },
  {
    title: "On Camera",
    description: "Acting and presenting in English for commercials, films, and digital content.",
    emoji: "🎬",
  },
  {
    title: "Translation",
    description: "Hebrew to English translation for scripts and creative content.",
    emoji: "📝",
  },
];

export default function EnglishPage() {
  return (
    <Layout>
      <Box component="section" className="text-center py-14 md:py-20" dir="ltr">
        <Box
          className="mx-auto mb-4 h-1 w-16 rounded-full"
          sx={{ bgcolor: "primary.main" }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{ mb: 2, letterSpacing: "-0.02em" }}
        >
          I Also Do English
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl mx-auto"
          sx={{ fontWeight: 400, lineHeight: 1.6 }}
        >
          Native-level English voice over and on-camera work.
          Attended American school as a child — fluent, natural, and versatile.
        </Typography>
      </Box>

      <Box className="grid gap-6 sm:grid-cols-3 mb-16" dir="ltr">
        {services.map((service) => (
          <BrandCard key={service.title}>
            <Typography variant="h3" component="span" sx={{ display: "block", mb: 1 }}>
              {service.emoji}
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </BrandCard>
        ))}
      </Box>

      <Box
        dir="ltr"
        className="rounded-2xl px-6 py-10 text-center mb-8"
        sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Voice Styles
        </Typography>
        <Box className="flex flex-wrap justify-center gap-2 mb-4">
          {["Warm", "Deep", "Smooth", "Fun", "Professional", "Conversational", "Hard Sell", "Soft Sell"].map((style) => (
            <Box
              key={style}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 6,
                bgcolor: "primary.50",
                color: "primary.main",
                fontSize: "0.9rem",
                fontWeight: 500,
                border: 1,
                borderColor: "primary.200",
              }}
            >
              {style}
            </Box>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          American and British accent variants available.
        </Typography>
      </Box>

      <Box
        dir="ltr"
        className="rounded-2xl px-6 py-10 text-center mb-8"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Let&apos;s Work Together
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3, maxWidth: 500, mx: "auto" }}>
          Looking for an English voice over or on-camera talent based in Israel?
          Get in touch.
        </Typography>
        <BrandButton
          href="/contact"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            "&:hover": { bgcolor: "secondary.dark" },
          }}
        >
          Contact Me
        </BrandButton>
      </Box>
    </Layout>
  );
}
