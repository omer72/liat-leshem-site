import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, YouTubeEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "משחק מול מצלמה",
  description: "משחק בפרסומות, פרומואים, תוכניות, סרטים ויראליים — דוגמאות וידאו.",
};

const videos = [
  { id: "AFWOllsYTuM", title: "פרסומת" },
  { id: "dC8cc318NA8", title: "פרסומת" },
  { id: "SE831UmvFFw", title: "פרסומת" },
  { id: "33gxo8kF46g", title: "פרסומת" },
  { id: "erLsnxqpRoM", title: "פרסומת" },
  { id: "nzp7JH2O-bI", title: "פרסומת" },
  { id: "PQtymnbqq74", title: "פרסומת" },
  { id: "nS-ib-Fpi6c", title: "פרסומת" },
];

export default function ActingPage() {
  return (
    <Layout>
      <PageHero
        title="משחק מול מצלמה"
        subtitle="פרסומות, פרומואים, תוכניות, סרטים ויראליים — עושה הכל (טוב כמעט), דברו עם הסוכנת שלי."
      />

      <Box className="max-w-4xl mx-auto mb-12">
        <Box className="grid gap-6 sm:grid-cols-2">
          {videos.map((video) => (
            <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
          ))}
        </Box>
      </Box>

      <Box className="text-center mb-8">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          סוכנת: חני שלום (סוכנות יולי) —{" "}
          <Box component="a" href="tel:0523854411" sx={{ color: "primary.main" }} dir="ltr">
            052-3854411
          </Box>
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
