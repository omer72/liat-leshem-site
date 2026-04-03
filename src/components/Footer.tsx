import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/user/liatleshem", icon: "▶" },
  { label: "Facebook", href: "https://www.facebook.com/LeshemVoiceOver/", icon: "f" },
  { label: "Instagram", href: "https://www.instagram.com/leshem.liat/", icon: "📷" },
  { label: "SoundCloud", href: "https://soundcloud.com/liatleshem", icon: "♪" },
];

const footerLinks = [
  { label: "קריינות", href: "/voice-over" },
  { label: "מול מצלמה", href: "/on-camera" },
  { label: "English", href: "/english" },
  { label: "צרו קשר", href: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      className="mt-auto border-t"
      sx={{ borderColor: "divider", bgcolor: "background.paper" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 800 }}>
          ליאת לשם
        </Typography>

        <nav className="flex flex-wrap justify-center gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm no-underline transition-colors"
              style={{ color: "var(--color-neutral-500)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Box className="flex gap-1">
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Typography variant="body2" component="span">
                {social.icon}
              </Typography>
            </IconButton>
          ))}
        </Box>

        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} ליאת לשם. כל הזכויות שמורות.
        </Typography>
      </div>
    </Box>
  );
}
