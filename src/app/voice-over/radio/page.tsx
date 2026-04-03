import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, SoundCloudEmbed, BrandButton } from "@/components";

export const metadata: Metadata = {
  title: "קריינות רדיו",
  description: "דוגמאות קריינות לרדיו — פרסומות, אותות תחנה ומעברונים בסגנונות שונים.",
};

const radioCategories = [
  {
    style: "קריינות מחוייכת",
    tracks: [
      "קק\"ל מזמינה אתכם לטייל",
      "אותות תחנה לרדיו חיפה (עם גיל קומר והראל סלוצקי)",
      "רשות הטבע והגנים",
      "פיאט 500",
      "דלונגי דרגון מבית ניופאן",
    ],
  },
  {
    style: "קריינות משוחקת",
    tracks: [
      "סלקום (עם עודד דוידוב)",
      "המשביר לצרכן (עם גל נדיבי)",
      "הוט טריפל + הוט מובייל (עם נעם אבירם)",
      "רוטס HR, אני קלודין (עם סנדרה רינגלר וזיו תדהר)",
      "סבוקלם (עם גדי לוי, אלון זמק ונעם אבירם)",
    ],
  },
  {
    style: "קריינות דידקטית",
    tracks: [
      "תשדירי מידע בנושא אוסטיאופורוזיס",
      "מבצע אכיפה של משטרת התנועה (עם רפי גינת)",
      "משרד התמ\"ת, אכיפת חוק הטרדה מינית",
      "מימון ישיר (עם שמוליק לוי ונעם אבירם)",
      "האקדמית ת\"א יפו (מתחיל דידקטי ממשיך שמייח)",
    ],
  },
  {
    style: "קריינות רכה",
    tracks: [
      "פזגז (עם יואב יפת)",
      "תדר חדש ל-88fm באילת",
      "פרומו יום האישה ב-88fm",
      "סימילאק (עם יואב יפת)",
      "משרד הבינוי והשיכון",
    ],
  },
  {
    style: "קריינות מכירתית",
    tracks: [
      "סקודה בתוכנית הבוקר של רדיו ת\"א 102fm",
      "yes חוויה קולנועית גדולה מהחיים",
      "ווירפול מבית אלקטרה",
      "רשת תכשיטי רויאלטי",
      "גוטקס / פלפל / אוברזון",
    ],
  },
  {
    style: "קריינות אינפורמטיבית מדוברת",
    tracks: [
      "הפרעת קשב וריכוז בחסות חברת יאנסן",
      "מסרים ירוקים במעברונים לרדיו אקו 99fm",
      "חושבים, חיים — הרשות הלאומית לביטחון בדרכים",
      "מסרים תזונתיים — חלב וי של תנובה",
      "הביטוח הלאומי, הביטחון שלך ושלי",
    ],
  },
];

const soundcloudTracks = [
  { title: "Yes Lifestyle", url: "https://soundcloud.com/liatleshem/yeslifestyle" },
  { title: "Eden Teva Market", url: "https://soundcloud.com/liatleshem/edentevamarket" },
  { title: "כללית", url: "https://soundcloud.com/liatleshem/clalit" },
];

export default function RadioPage() {
  return (
    <Layout>
      <PageHero
        title="רדיו — פרסומות / אותות תחנה / מעברונים"
        subtitle="לנוחיותכם, קטעי האודיו מסודרים בנגנים לפי סגנון הקריינות, קליק אנד ליסטן."
      />

      {/* SoundCloud demos */}
      <Box className="max-w-2xl mx-auto mb-12">
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}>
          🎧 האזנה מהירה
        </Typography>
        {soundcloudTracks.map((track) => (
          <Box key={track.url} sx={{ mb: 3 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
              {track.title}
            </Typography>
            <SoundCloudEmbed trackUrl={track.url} />
          </Box>
        ))}
        <Box className="text-center mt-4">
          <BrandButton href="https://soundcloud.com/liatleshem" variant="outlined">
            לכל הדוגמאות ב-SoundCloud ←
          </BrandButton>
        </Box>
      </Box>

      {/* Track listings by style */}
      <Box className="max-w-3xl mx-auto mb-12">
        <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 700, textAlign: "center" }}>
          📋 רשימת עבודות לפי סגנון
        </Typography>
        <Box className="grid gap-6 sm:grid-cols-2">
          {radioCategories.map((cat) => (
            <Box
              key={cat.style}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
              >
                {cat.style}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {cat.tracks.map((track) => (
                  <Box
                    component="li"
                    key={track}
                    sx={{
                      py: 0.75,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                      fontSize: "0.9rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        flexShrink: 0,
                        mt: 0.8,
                      }}
                    />
                    {track}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="flex justify-center gap-3">
        <BrandButton variant="outlined" href="/voice-over">
          ← חזרה לקריינות
        </BrandButton>
      </Box>
    </Layout>
  );
}
