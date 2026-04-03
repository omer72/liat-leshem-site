import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, YouTubeEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "ארכיון עבודות",
  description: "ארכיון עבודות מתעדכן — סרטונים מערוץ היוטיוב של ליאת לשם.",
};

export default function WebPage() {
  return (
    <Layout>
      <PageHero
        title="ארכיון עבודות מתעדכן"
        subtitle="מבחר עבודות חדשות לרשותכם בערוץ המתעדכן שלי ביוטיוב. מוזמנות ומוזמנים לגלול למטה."
      />

      {/* YouTube Channel embed */}
      <Box className="max-w-3xl mx-auto mb-12">
        <Box
          className="rounded-2xl px-6 py-10 text-center"
          sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            ▶ ערוץ היוטיוב
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
            כל הסרטונים, הדמואים והעבודות האחרונות — בערוץ היוטיוב שלי.
          </Typography>
          <BrandButton
            href="https://www.youtube.com/user/liatleshem"
            variant="contained"
            size="large"
          >
            לערוץ היוטיוב ←
          </BrandButton>
        </Box>
      </Box>

      {/* SoundCloud */}
      <Box className="max-w-3xl mx-auto mb-12">
        <Box
          className="rounded-2xl px-6 py-10 text-center"
          sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            ♪ SoundCloud
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
            דוגמאות קריינות ודמואים — האזינו ב-SoundCloud.
          </Typography>
          <BrandButton
            href="https://soundcloud.com/liatleshem"
            variant="outlined"
            size="large"
          >
            ל-SoundCloud ←
          </BrandButton>
        </Box>
      </Box>

      {/* Social */}
      <Box className="text-center mb-8">
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          עוד פלטפורמות
        </Typography>
        <Box className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/" },
            { label: "Instagram", href: "https://www.instagram.com/leshem.liat/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/liatlesh/" },
            { label: "Voice123", href: "https://voice123.com/voice-actor/liatleshem" },
          ].map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 6,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                color: "text.primary",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
                transition: "all 0.15s",
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
