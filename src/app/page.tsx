import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

const services = [
  {
    title: "קריינות",
    description: "קריינות לטלוויזיה, רדיו, סרטי תדמית והדרכה, דיבוב וקריינות משוחקת.",
    href: "/voice-over",
    emoji: "🎙️",
  },
  {
    title: "מול מצלמה",
    description: "משחק, הגשה והנחיה מול מצלמה לפרסומות, סרטים ותוכניות טלוויזיה.",
    href: "/on-camera",
    emoji: "🎬",
  },
  {
    title: "English",
    description: "Voice over and on-camera work in English — native-level fluency.",
    href: "/english",
    emoji: "🌍",
  },
];

const highlights = [
  { value: "25+", label: "שנות ניסיון" },
  { value: "🎙️", label: "קריינות" },
  { value: "🎬", label: "מול מצלמה" },
  { value: "🌍", label: "עברית ואנגלית" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <Box
        component="section"
        className="flex flex-col items-center gap-6 py-20 md:py-28 text-center"
      >
        <Box
          className="mx-auto mb-2 h-1 w-16 rounded-full"
          sx={{ bgcolor: "primary.main" }}
        />
        <Typography
          variant="h1"
          component="h1"
          className="max-w-3xl"
          sx={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          ליאת לשם
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{ color: "primary.main", fontWeight: 700 }}
        >
          קריינות ומול מצלמה
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl"
          sx={{ fontWeight: 400, lineHeight: 1.7 }}
        >
          קריינית מקצועית ושחקנית מול מצלמה עם ניסיון רב בטלוויזיה, רדיו,
          פרסום, דיבוב והגשה. קול חם, עמוק ומגוון — בעברית ובאנגלית.
        </Typography>
        <Box className="flex flex-wrap justify-center gap-3 pt-2">
          <BrandButton size="large" href="/voice-over">
            קריינות
          </BrandButton>
          <BrandButton variant="outlined" size="large" href="/on-camera">
            מול מצלמה
          </BrandButton>
          <BrandButton variant="outlined" size="large" href="/contact">
            צרו קשר
          </BrandButton>
        </Box>
      </Box>

      {/* Highlights ribbon */}
      <Box
        component="section"
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12"
        sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}
      >
        {highlights.map((item) => (
          <Box key={item.label} className="text-center">
            <Typography
              variant="h3"
              component="p"
              sx={{ color: "primary.main", fontWeight: 800 }}
            >
              {item.value}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Services */}
      <Box component="section" className="py-16 md:py-20">
        <Typography
          variant="h2"
          component="h2"
          className="text-center mb-4"
          sx={{ letterSpacing: "-0.02em" }}
        >
          מה אני עושה
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center max-w-xl mx-auto mb-10"
        >
          שירותי קריינות ומשחק מול מצלמה במגוון תחומים — מפרסומות טלוויזיה ורדיו
          ועד דיבוב, סרטי תדמית והגשה.
        </Typography>
        <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <BrandCard key={service.title}>
              <Typography variant="h3" component="span" sx={{ display: "block", mb: 1 }}>
                {service.emoji}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {service.description}
              </Typography>
              <BrandButton variant="text" size="small" href={service.href}>
                למידע נוסף ←
              </BrandButton>
            </BrandCard>
          ))}
        </Box>
      </Box>

      {/* Bio snippet */}
      <Box
        component="section"
        className="rounded-2xl px-6 py-14 text-center mb-8"
        sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em", mb: 2 }}
        >
          קצת עליי
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.9, maxWidth: 600, mx: "auto", mb: 2, lineHeight: 1.8 }}
        >
          בוגרת רדיו תל אביב 102fm, שם עבדתי שש שנים בקריינות פרומואים, פרסומות,
          ג&apos;ינגלים, מדורים ודיווחי תנועה. פעילה בתחום הקריינות והמשחק מול מצלמה
          מאז 1998. מצויידת באולפן ביתי מקצועי עם מיקרופון Neumann BCM 104.
        </Typography>
        <BrandButton
          variant="contained"
          size="large"
          href="/contact"
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            "&:hover": { bgcolor: "secondary.dark" },
            mt: 2,
          }}
        >
          צרו קשר
        </BrandButton>
      </Box>
    </Layout>
  );
}
