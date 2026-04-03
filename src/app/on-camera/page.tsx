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
    emoji: "🎭",
  },
  {
    title: "הגשה",
    description: "הנחיה והגשה של תוכניות, אירועים וסרטוני תוכן.",
    href: "/on-camera/presenting",
    emoji: "🎤",
  },
  {
    title: "תמונות",
    description: "גלריות תמונות סטילס מצילומים שונים.",
    href: "/on-camera/photos",
    emoji: "📸",
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
        {categories.map((cat) => (
          <BrandCard key={cat.title}>
            <Typography variant="h3" component="span" sx={{ display: "block", mb: 1 }}>
              {cat.emoji}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              {cat.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {cat.description}
            </Typography>
            <BrandButton variant="text" size="small" href={cat.href}>
              למידע נוסף ←
            </BrandButton>
          </BrandCard>
        ))}
      </Box>

      <Box
        className="rounded-2xl px-6 py-10 text-center"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          מעוניינים לעבוד יחד?
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3, maxWidth: 500, mx: "auto" }}>
          לתיאום צילומים, אודישנים או כל שאלה — צרו קשר עם הסוכנת שלי.
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
          צרו קשר
        </BrandButton>
      </Box>
    </Layout>
  );
}
