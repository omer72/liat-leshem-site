import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "דיבוב / קריינות משוחקת",
  description: "דיבוב דמויות, קריינות משוחקת לסרטי אנימציה, משחקים ותוכניות ילדים.",
};

const specialties = [
  "דיבוב דמויות לסרטי אנימציה",
  "קריינות משוחקת לתוכניות ילדים",
  "דיבוב למשחקי וידאו",
  "דיבוב סדרות וסרטים",
  "קריינות דמויות לפרסומות",
  "דמויות קוליות מגוונות — מהומוריסטי ועד הדרמטי",
];

export default function DubbingPage() {
  return (
    <Layout>
      <PageHero
        title="דיבוב / קריינות משוחקת"
        subtitle="דמויות קוליות מגוונות — מאנימציה ומשחקים ועד דרמה ופרסומות."
      />

      <Box className="max-w-2xl mx-auto mb-12">
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", mb: 6 }}>
          כשחקנית בהכשרתי, אני מביאה לכל דמות קולית את העומק והאותנטיות שנדרשים.
          יכולת התחפשות קולית, עברית בכל מבטא ורגיסטר, ויכולת אימפרוביזציה.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          🎭 התמחויות
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
          {specialties.map((item) => (
            <Box
              component="li"
              key={item}
              sx={{
                py: 1.5,
                px: 2,
                mb: 1,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  flexShrink: 0,
                }}
              />
              <Typography variant="body1">{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="flex justify-center gap-3">
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
