import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "משחק מול מצלמה",
  description: "משחק בפרסומות, סרטים קצרים וסדרות טלוויזיה.",
};

export default function ActingPage() {
  return (
    <Layout>
      <PageHero
        title="משחק מול מצלמה"
        subtitle="משחק בפרסומות, סרטים קצרים וסדרות טלוויזיה."
      />

      <Box className="max-w-2xl mx-auto text-center mb-12">
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8 }}>
          ניסיון בינלאומי במשחק מול מצלמה — פרסומות טלוויזיה, סרטים קצרים,
          סדרות דרמה וקומדיה. נוכחות טבעית ומקצועית מול המצלמה,
          יכולת אימפרוביזציה ועבודה עם במאים ושחקנים.
        </Typography>

        <Box
          className="rounded-2xl px-6 py-10"
          sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            🎬 שואורeel
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            צפו בדוגמאות משחק בערוץ היוטיוב שלי.
          </Typography>
          <BrandButton
            href="https://www.youtube.com/user/liatleshem"
            variant="contained"
          >
            לערוץ היוטיוב ←
          </BrandButton>
        </Box>
      </Box>

      <Box className="text-center mb-8">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          סוכנת: חני שלום (סוכנות יולי)
        </Typography>
      </Box>

      <Box className="flex justify-center gap-3">
        <BrandButton variant="outlined" href="/on-camera">
          ← חזרה למול מצלמה
        </BrandButton>
        <BrandButton variant="text" href="/contact">
          צרו קשר
        </BrandButton>
      </Box>
    </Layout>
  );
}
