import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

const services = [
  {
    title: "קריינות",
    description: "פרסומות, פרומואים, תוכניות, מענים קוליים, סרטי תדמית ועוד.",
    href: "/voice-over",
    emoji: "🎙️",
  },
  {
    title: "מול מצלמה",
    description: "טלוויזיה, רשת, סרטי תדמית / הדרכה / הסברה / הדגמה ועוד.",
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

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <Box
        component="section"
        className="flex flex-col items-center gap-6 py-12 md:py-20 text-center"
      >
        <Image
          src="/images/liat-illustration.png"
          alt="ליאת לשם — קריינית ומשחקת מול מצלמה"
          width={350}
          height={302}
          priority
          className="mb-4"
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          נעים מאוד, אני ליאת לשם
        </Typography>
      </Box>

      {/* Two-column intro */}
      <Box
        component="section"
        className="grid md:grid-cols-2 gap-8 py-10 md:py-14"
        sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}
      >
        <Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}>
            🎙️ קריינות
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            קריינית ומדבבת רב-גונית ומנוסה. עברית ואנגלית. מקליטה גם מהבית.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            פרסומות, פרומואים, תוכניות, מענים קוליים, סרטי תדמית ועוד.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            מיוצגת ע&quot;י{" "}
            <Box component="span" sx={{ fontWeight: 600 }}>תאריקה זוהר</Box>:{" "}
            <Box component="a" href="tel:0546883886" sx={{ color: "primary.main" }} dir="ltr">
              054-6883886
            </Box>
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}>
            🎬 מול מצלמה
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            מגישה ומשחקת מול מצלמה. עברית ואנגלית. מנוסה בכל סוגי ההפקות.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
            טלוויזיה, רשת, סרטי תדמית / הדרכה / הסברה / הדגמה ועוד.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            מיוצגת ע&quot;י{" "}
            <Box component="span" sx={{ fontWeight: 600 }}>חני שלום</Box>:{" "}
            <Box component="a" href="tel:0523854411" sx={{ color: "primary.main" }} dir="ltr">
              052-3854411
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Summary */}
      <Box component="section" className="py-10 text-center">
        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 600, mx: "auto" }}>
          בקיצור, גם קריינות וגם מול מצלמה. כזו אני. גם וגם. ועוד.
          <br />
          נווטו כאן למעלה לכל הדוגמיות שתוכלו לאכול ועוד ועוד,{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>בתאבון</Box> :)
        </Typography>
      </Box>

      {/* Services cards */}
      <Box component="section" className="py-10">
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
                לדוגמאות ←
              </BrandButton>
            </BrandCard>
          ))}
        </Box>
      </Box>

      {/* Social bar */}
      <Box component="section" className="text-center py-8 mb-4">
        <Box className="flex flex-wrap justify-center gap-3">
          {[
            { label: "YouTube", href: "https://www.youtube.com/user/liatleshem" },
            { label: "SoundCloud", href: "https://soundcloud.com/liatleshem" },
            { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/" },
            { label: "Instagram", href: "https://www.instagram.com/leshem.liat/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/liatlesh/" },
            { label: "TikTok", href: "https://www.tiktok.com/@liatleshem" },
          ].map((social) => (
            <Box
              key={social.label}
              component="a"
              href={social.href}
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
              {social.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
