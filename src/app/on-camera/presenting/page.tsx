import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, YouTubeEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "הגשה מול מצלמה",
  description: "הגשה, הדגמה והסברה מול מצלמה — אתרים, אפליקציות, סרטי תדמית והדרכה.",
};

const videos = [
  { id: "KvMTkJrExo8", title: "הגשה" },
  { id: "pOou2QGHw2I", title: "הגשה" },
  { id: "H5hQmyD8JB0", title: "הגשה" },
  { id: "RQS94mFfo6g", title: "הגשה" },
  { id: "Fbrz628e3H4", title: "הגשה" },
  { id: "xbdsdWs-pCY", title: "הגשה" },
];

export default function PresentingPage() {
  return (
    <Layout>
      <PageHero
        title="הגשה / הדגמה / הסברה מול מצלמה"
        subtitle="מגישה אתרים, אפליקציות, סרטי תדמית והדרכה — יצוגית / קומית / רשמית, אני כחומר גלם בידיכם."
      />

      <Box className="max-w-4xl mx-auto mb-12">
        <Box className="grid gap-6 sm:grid-cols-2">
          {videos.map((video) => (
            <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
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
