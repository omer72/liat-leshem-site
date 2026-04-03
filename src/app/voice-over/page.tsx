import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandCard, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "קריינות",
  description: "שירותי קריינות מקצועיים — טלוויזיה, רדיו, סרטי תדמית והדרכה, דיבוב וקריינות משוחקת.",
};

const categories = [
  {
    title: "טלוויזיה",
    description: "פרסומות ופרומואים לטלוויזיה בכל סגנונות הקריינות.",
    href: "/voice-over/tv",
    icon: "📺",
  },
  {
    title: "רדיו",
    description: "פרסומות, אותות תחנה ומעברונים לרדיו.",
    href: "/voice-over/radio",
    icon: "📻",
  },
  {
    title: "סרטי תדמית והדרכה",
    description: "קריינות לסרטי תדמית, הדרכה, הסברה, הדגמה ועוד.",
    href: "/voice-over/movies",
    icon: "🎥",
  },
  {
    title: "דיבוב / קריינות משוחקת",
    description: "דיבוב דמויות וקריינות משוחקת לסרטי אנימציה, משחקים ותוכניות.",
    href: "/voice-over/dubbing",
    icon: "🎭",
  },
];

const voiceStyles = [
  "דיבוב", "קריינות מכירתית", "קריינות שובבה", "קריינות סקסית",
  "סרטי תדמית", "רדיו", "טלוויזיה", "קריינות מחוייכת",
  "קריינות רכה", "קריינות קוסמטית",
];

export default function VoiceOverPage() {
  return (
    <Layout>
      <PageHero
        title="קריינות"
        subtitle="קריינית ומדבבת רב-גונית ומנוסה. עברית ואנגלית. מקליטה גם מהבית."
      />

      {/* Voice style tags */}
      <Box className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up">
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
              fontWeight: 600,
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

      <Box className="grid gap-6 sm:grid-cols-2 mb-16">
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
              דוגמאות ←
            </BrandButton>
          </BrandCard>
        ))}
      </Box>

      {/* Equipment */}
      <Box
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
          sx={{ mb: 2, fontWeight: 700 }}
        >
          🎤 ציוד מקצועי
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 500, mx: "auto" }}
        >
          אולפן ביתי מקצועי עם מיקרופון Neumann BCM 104 ו-Digidesign M Box עם
          Pro Tools. יכולה להקליט ולשלוח קבצים דיגיטליים באופן עצמאי, וכן גישה
          לאולפני פוסט מקצועיים.
        </Typography>
      </Box>
    </Layout>
  );
}
