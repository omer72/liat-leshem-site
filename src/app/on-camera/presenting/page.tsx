import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "הגשה מול מצלמה",
  description: "הנחיה והגשה של תוכניות, אירועים וסרטוני תוכן.",
};

const services = [
  "הנחיית תוכניות טלוויזיה",
  "הגשת אירועים ושידורים חיים",
  "סרטוני תוכן ויוטיוב",
  "הנחיית כנסים ואירועי חברה",
  "מגישת פרסומות ואינפומרשיאל",
];

export default function PresentingPage() {
  return (
    <Layout>
      <PageHero
        title="הגשה מול מצלמה"
        subtitle="הנחיה והגשה מקצועית — מטלוויזיה ואירועים ועד תוכן דיגיטלי."
      />

      <Box className="max-w-2xl mx-auto mb-12">
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", mb: 6, lineHeight: 1.8 }}>
          נוכחות טבעית ומקצועית מול המצלמה, יכולת הגשה חמה ומזמינה,
          ניסיון בהנחיית תוכניות ואירועים שונים.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          🎤 תחומי הגשה
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
          {services.map((service) => (
            <Box
              component="li"
              key={service}
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
              <Typography variant="body1">{service}</Typography>
            </Box>
          ))}
        </Box>
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
