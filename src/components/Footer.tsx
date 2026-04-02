import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      className="mt-auto border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6">
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Congruent. All rights reserved.
        </Typography>
        <nav className="flex gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 no-underline hover:text-primary-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </Box>
  );
}
