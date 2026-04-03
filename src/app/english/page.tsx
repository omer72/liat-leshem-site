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
    icon: "🎙️",
  },
  {
    title: "On Camera",
    description: "Acting and presenting in English for commercials, films, and digital content.",
    icon: "🎬",
  },
  {
    title: "Translation",
    description: "Hebrew to English translation for scripts and creative content.",
    icon: "📝",
  },
];

const voiceStyles = [
  "Warm", "Deep", "Smooth", "Fun", "Professional",
  "Conversational", "Hard Sell", "Soft Sell",
];

export default function EnglishPage() {
  return (
    <Layout>
      {/* Hero */}
      <Box component="section" className="text-center py-14 md:py-20" dir="ltr">
        <Box
          className="mx-auto mb-4 h-1 w-16 rounded-full animate-fade-up"
          sx={{
            background: "linear-gradient(90deg, #C9A84C, #D4BC72, #C9A84C)",
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          className="animate-fade-up"
          sx={{ mb: 2, letterSpacing: "-0.02em", animationDelay: "0.1s" }}
        >
          I Also Do English
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl mx-auto animate-fade-up"
          sx={{ fontWeight: 400, lineHeight: 1.6, animationDelay: "0.2s" }}
        >
          Native-level English voice over and on-camera work.
          Attended American school as a child — fluent, natural, and versatile.
        </Typography>
      </Box>

      <Box className="grid gap-6 sm:grid-cols-3 mb-16" dir="ltr">
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
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </BrandCard>
        ))}
      </Box>

      {/* Voice styles */}
      <Box
        dir="ltr"
        className="rounded-2xl px-6 py-10 text-center mb-8 animate-fade-up"
        sx={{
          bgcolor: "rgba(45,45,68,0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, fontWeight: 700 }}
        >
          Voice Styles
        </Typography>
        <Box className="flex flex-wrap justify-center gap-2 mb-4">
          {voiceStyles.map((style) => (
            <Box
              key={style}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 6,
                bgcolor: "rgba(201,168,76,0.08)",
                color: "primary.main",
                fontSize: "0.9rem",
                fontWeight: 500,
                border: "1px solid rgba(201,168,76,0.2)",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "rgba(201,168,76,0.15)",
                  borderColor: "rgba(201,168,76,0.4)",
                },
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

      {/* CTA */}
      <Box
        dir="ltr"
        className="rounded-2xl px-6 py-10 text-center mb-8 animate-fade-up"
        sx={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.9), rgba(168,138,53,0.95))",
          color: "#1A1A2E",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 700, mb: 2, position: "relative" }}
        >
          Let&apos;s Work Together
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.85, mb: 3, maxWidth: 500, mx: "auto", position: "relative" }}
        >
          Looking for an English voice over or on-camera talent based in Israel?
          Get in touch.
        </Typography>
        <BrandButton
          href="/contact"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#1A1A2E",
            color: "#C9A84C",
            position: "relative",
            "&:hover": { bgcolor: "#0F0F1A" },
          }}
        >
          Contact Me
        </BrandButton>
      </Box>
    </Layout>
  );
}
