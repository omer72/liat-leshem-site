import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, SoundCloudEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "קריינות רדיו",
  description: "דוגמאות קריינות לרדיו — פרסומות, ג׳ינגלים, פרומואים ודיווחי תנועה.",
};

const tracks = [
  {
    title: "Yes Lifestyle",
    url: "https://soundcloud.com/liatleshem/yeslifestyle",
  },
  {
    title: "Eden Teva Market",
    url: "https://soundcloud.com/liatleshem/edentevamarket",
  },
  {
    title: "כללית",
    url: "https://soundcloud.com/liatleshem/clalit",
  },
];

export default function RadioPage() {
  return (
    <Layout>
      <PageHero
        title="קריינות רדיו"
        subtitle="פרסומות רדיו, ג׳ינגלים, פרומואים ודיווחי תנועה — בוגרת רדיו תל אביב 102fm."
      />

      <Box className="mb-8">
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", textAlign: "center", mb: 6 }}>
          שש שנים ברדיו תל אביב 102fm — קריינות פרומואים, פרסומות, ג&apos;ינגלים,
          מדורים ודיווחי תנועה. ניסיון עשיר בקריינות רדיו בסגנונות מגוונים.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}>
          🎧 דוגמאות
        </Typography>

        <Box className="max-w-2xl mx-auto">
          {tracks.map((track) => (
            <Box key={track.url} sx={{ mb: 3 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                {track.title}
              </Typography>
              <SoundCloudEmbed trackUrl={track.url} />
            </Box>
          ))}
        </Box>

        <Box className="text-center mt-6">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            לעוד דוגמאות, בקרו בעמוד ה-SoundCloud שלי.
          </Typography>
          <BrandButton
            href="https://soundcloud.com/liatleshem"
            variant="outlined"
          >
            SoundCloud ←
          </BrandButton>
        </Box>
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
