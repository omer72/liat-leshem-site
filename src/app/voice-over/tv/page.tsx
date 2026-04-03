import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, YouTubeEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "קריינות טלוויזיה",
  description: "דוגמאות קריינות לטלוויזיה — פרסומות ופרומואים בסגנונות שונים.",
};

const voiceStyles = [
  "קריינות מכירתית",
  "קריינות מחוייכת",
  "קריינות שובבה",
  "קריינות רכה",
  "קריינות סקסית",
  "קריינות קוסמטית",
];

export default function TVPage() {
  return (
    <Layout>
      <PageHero
        title="טלוויזיה - פרסומות ופרומואים"
        subtitle="קטעי הוידאו מסודרים בגלריות לפי סגנון הקריינות, דפדפו בכל גלריה לדוגמאות."
      />

      {/* Voice style tags */}
      <Box className="flex flex-wrap justify-center gap-2 mb-10">
        {voiceStyles.map((style) => (
          <Box
            key={style}
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: 6,
              bgcolor: "primary.50",
              color: "primary.main",
              fontSize: "0.9rem",
              fontWeight: 600,
              border: 1,
              borderColor: "primary.200",
            }}
          >
            {style}
          </Box>
        ))}
      </Box>

      <Box className="text-center mb-8">
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          למאגר עבודות מתעדכן —{" "}
          <Box
            component="a"
            href="/web"
            sx={{ color: "primary.main", fontWeight: 600 }}
          >
            קליק כאן
          </Box>
        </Typography>
        <BrandButton
          href="https://www.youtube.com/user/liatleshem"
          variant="contained"
          size="large"
        >
          לערוץ היוטיוב עם כל הדוגמאות ←
        </BrandButton>
      </Box>

      <Box className="flex justify-center gap-3 mt-8">
        <BrandButton variant="outlined" href="/voice-over">
          ← חזרה לקריינות
        </BrandButton>
      </Box>
    </Layout>
  );
}
