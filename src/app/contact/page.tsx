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
    icon: "🎙️",
  },
  {
    title: "סוכנת מול מצלמה",
    name: "חני שלום (סוכנות יולי)",
    phone: "052-3854411",
    email: "hanishalom71@gmail.com",
    icon: "🎬",
  },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/user/liatleshem" },
  { label: "SoundCloud", href: "https://soundcloud.com/liatleshem" },
  { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/" },
  { label: "Instagram", href: "https://www.instagram.com/leshem.liat/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/liatlesh/" },
];

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        title="צרו קשר"
        subtitle="מעוניינים בשירותי קריינות או משחק מול מצלמה? דברו איתי או עם הסוכנות."
      />

      <Box className="grid gap-6 sm:grid-cols-2 mb-12">
        {agents.map((agent, i) => (
          <BrandCard
            key={agent.title}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ display: "block", mb: 1 }}
            >
              {agent.icon}
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
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
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
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
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                dir="ltr"
              >
                {agent.email}
              </Box>
            </Typography>
          </BrandCard>
        ))}
      </Box>

      <Box className="max-w-xl mx-auto mb-12">
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
        >
          שלחו הודעה
        </Typography>
        <ContactForm />
      </Box>

      {/* Social links */}
      <Box className="text-center mb-8 animate-fade-up">
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 3, fontWeight: 700 }}
        >
          עקבו אחריי
        </Typography>
        <Box className="flex flex-wrap justify-center gap-3">
          {socials.map((social) => (
            <Box
              key={social.label}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                bgcolor: "rgba(45,45,68,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(201,168,76,0.15)",
                color: "text.primary",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#C9A84C",
                  color: "#C9A84C",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.15)",
                },
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
