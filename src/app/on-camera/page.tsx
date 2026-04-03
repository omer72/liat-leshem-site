import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandCard, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "מול מצלמה",
  description: "משחק, הגשה והנחיה מול מצלמה — פרסומות, סרטים, טלוויזיה ותוכניות.",
};

const categories = [
  {
    title: "משחק",
    description: "משחק בפרסומות, סרטים קצרים וסדרות טלוויזיה.",
    href: "/on-camera/acting",
    icon: "🎭",
  },
  {
    title: "הגשה",
    description: "הנחיה והגשה של תוכניות, אירועים וסרטוני תוכן.",
    href: "/on-camera/presenting",
    icon: "🎤",
  },
  {
    title: "תמונות",
    description: "גלריות תמונות סטילס מצילומים שונים.",
    href: "/on-camera/photos",
    icon: "📸",
  },
];

export default function OnCameraPage() {
  return (
    <Layout>
      <PageHero
        title="מול מצלמה"
        subtitle="משחק, הגשה והנחיה — נוכחות מסך מקצועית ומרשימה."
      />

      <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {categories.map((cat, i) => (
          <BrandCard
            key={cat.title}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ display: "block", mb: 1 }}
            >
              {cat.icon}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {cat.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {cat.description}
            </Typography>
            <BrandButton variant="text" size="small" href={cat.href}>
              למידע נוסף ←
            </BrandButton>
          </BrandCard>
        ))}
      </Box>

      {/* CTA */}
      <Box
        className="rounded-2xl px-6 py-10 text-center animate-fade-up"
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
          מעוניינים לעבוד יחד?
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.85, mb: 3, maxWidth: 500, mx: "auto", position: "relative" }}
        >
          לתיאום צילומים, אודישנים או כל שאלה — צרו קשר עם הסוכנת שלי.
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
          צרו קשר
        </BrandButton>
      </Box>
    </Layout>
  );
}
