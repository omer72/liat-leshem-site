import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "סרטי תדמית והדרכה",
  description: "קריינות לסרטי תדמית ארגוניים, סרטי הדרכה, מצגות וסרטונים תאגידיים.",
};

const services = [
  "סרטי תדמית לחברות וארגונים",
  "סרטי הדרכה ולימוד",
  "מצגות וסרטונים לכנסים",
  "סרטוני מוצר ושיווק",
  "קריינות לאפליקציות ומערכות טלפון",
  "סרטונים לאינטרנט ורשתות חברתיות",
];

export default function MoviesPage() {
  return (
    <Layout>
      <PageHero
        title="סרטי תדמית והדרכה"
        subtitle="קריינות מקצועית לסרטים ארגוניים, הדרכה ותדמית."
      />

      <Box className="max-w-2xl mx-auto mb-12">
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", mb: 6 }}>
          קריינות לסרטי תדמית והדרכה דורשת קול שמשדר מקצועיות, אמינות ובהירות.
          ניסיון רב בקריינות לחברות מובילות במשק — בעברית ובאנגלית.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          🎥 שירותים
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
