import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandCard } from "@/components";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "צרו קשר",
  description: "צרו קשר עם ליאת לשם — קריינות ומול מצלמה. סוכני קריינות ומשחק.",
};

const agents = [
  {
    title: "סוכנת קריינות",
    name: "טריקה זוהר",
    phone: "054-6883886",
    email: "karyanim@tarika.co.il",
    emoji: "🎙️",
  },
  {
    title: "סוכנת מול מצלמה",
    name: "חני שלום (סוכנות יולי)",
    phone: "052-3854411",
    email: "hanishalom71@gmail.com",
    emoji: "🎬",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        title="צרו קשר"
        subtitle="מעוניינים בשירותי קריינות או משחק מול מצלמה? דברו איתי או עם הסוכנות."
      />

      <Box className="grid gap-6 sm:grid-cols-2 mb-12">
        {agents.map((agent) => (
          <BrandCard key={agent.title}>
            <Typography variant="h3" component="span" sx={{ display: "block", mb: 1 }}>
              {agent.emoji}
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              {agent.title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
              {agent.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              טלפון:{" "}
              <Box
                component="a"
                href={`tel:${agent.phone.replace(/-/g, "")}`}
                sx={{ color: "primary.main", textDecoration: "none" }}
                dir="ltr"
              >
                {agent.phone}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              אימייל:{" "}
              <Box
                component="a"
                href={`mailto:${agent.email}`}
                sx={{ color: "primary.main", textDecoration: "none" }}
                dir="ltr"
              >
                {agent.email}
              </Box>
            </Typography>
          </BrandCard>
        ))}
      </Box>

      <Box className="max-w-xl mx-auto mb-12">
        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}>
          שלחו הודעה
        </Typography>
        <ContactForm />
      </Box>

      <Box className="text-center mb-8">
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          עקבו אחריי
        </Typography>
        <Box className="flex flex-wrap justify-center gap-3">
          {[
            { label: "YouTube", href: "https://www.youtube.com/user/liatleshem" },
            { label: "SoundCloud", href: "https://soundcloud.com/liatleshem" },
            { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/" },
            { label: "Instagram", href: "https://www.instagram.com/leshem.liat/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/liatlesh/" },
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
