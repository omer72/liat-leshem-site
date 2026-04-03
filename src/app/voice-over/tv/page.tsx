import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "קריינות טלוויזיה",
  description: "דוגמאות קריינות לטלוויזיה — פרסומות, פרומואים, טריילרים וקמפיינים.",
};

export default function TVPage() {
  return (
    <Layout>
      <PageHero
        title="קריינות טלוויזיה"
        subtitle="פרסומות, פרומואים, טריילרים וקמפיינים לטלוויזיה."
      />

      <Box className="text-center mb-8">
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          קריינות מקצועית לפרסומות טלוויזיה, פרומואים לערוצים, טריילרים לתוכניות
          וקמפיינים פרסומיים. קול חם ומגוון שמתאים לסגנונות שונים — ממכירתי ואגרסיבי
          ועד רך ואינטימי.
        </Typography>
      </Box>

      <Box
        className="rounded-2xl px-6 py-10 text-center mb-8"
        sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
          📺 דוגמאות קריינות לטלוויזיה
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          צפו בערוץ היוטיוב שלי לדוגמאות עדכניות של עבודות טלוויזיה.
        </Typography>
        <BrandButton
          href="https://www.youtube.com/user/liatleshem"
          variant="contained"
          size="large"
        >
          לערוץ היוטיוב ←
        </BrandButton>
      </Box>

      <Box className="flex justify-center gap-3 mt-8">
        <BrandButton variant="outlined" href="/voice-over">
          ← חזרה לקריינות
        </BrandButton>
        <BrandButton variant="text" href="/contact">
          צרו קשר
        </BrandButton>
      </Box>
    </Layout>
  );
}
