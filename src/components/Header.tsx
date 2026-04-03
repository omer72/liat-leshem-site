"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import BrandButton from "./BrandButton";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "ראשי", href: "/" },
  {
    label: "קריינות",
    href: "/voice-over",
    children: [
      { label: "טלוויזיה", href: "/voice-over/tv" },
      { label: "רדיו", href: "/voice-over/radio" },
      { label: "סרטי תדמית והדרכה", href: "/voice-over/movies" },
      { label: "דיבוב / קריינות משוחקת", href: "/voice-over/dubbing" },
    ],
  },
  {
    label: "מול מצלמה",
    href: "/on-camera",
    children: [
      { label: "משחק", href: "/on-camera/acting" },
      { label: "הגשה", href: "/on-camera/presenting" },
      { label: "תמונות", href: "/on-camera/photos" },
    ],
  },
  { label: "I also do English", href: "/english" },
  { label: "צרו קשר", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(26,26,46,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 rgba(201,168,76,0.15)"
            : "none",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <Toolbar className="mx-auto w-full max-w-6xl px-4">
          {/* Logo — Playfair Display in gold */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: "1.5rem",
              }}
            >
              ליאת לשם
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Box
                key={link.href}
                sx={{ position: "relative" }}
                onMouseEnter={() =>
                  link.children && setHoveredMenu(link.label)
                }
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <BrandButton
                  variant="text"
                  color="inherit"
                  href={link.href}
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: "var(--color-neutral-100)",
                    "&:hover": { color: "#C9A84C" },
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </BrandButton>
                {link.children && hoveredMenu === link.label && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      bgcolor: "rgba(26,26,46,0.95)",
                      backdropFilter: "blur(16px)",
                      borderRadius: 2,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      minWidth: 200,
                      py: 1,
                      zIndex: 10,
                    }}
                  >
                    {link.children.map((child) => (
                      <Box
                        key={child.href}
                        component={Link}
                        href={child.href}
                        sx={{
                          display: "block",
                          px: 2.5,
                          py: 1,
                          color: "var(--color-neutral-100)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          "&:hover": {
                            bgcolor: "rgba(201,168,76,0.1)",
                            color: "#C9A84C",
                          },
                          transition: "all 0.15s",
                        }}
                      >
                        {child.label}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}

            {/* Language toggle */}
            <BrandButton
              variant="outlined"
              href="/english"
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                ml: 1,
                px: 1.5,
                py: 0.5,
                minWidth: "auto",
                borderColor: "rgba(201,168,76,0.4)",
                color: "#C9A84C",
                "&:hover": {
                  borderColor: "#C9A84C",
                  bgcolor: "rgba(201,168,76,0.1)",
                },
              }}
            >
              EN
            </BrandButton>
          </nav>

          {/* Mobile hamburger */}
          <IconButton
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="פתיחת תפריט"
            sx={{ color: "#C9A84C" }}
          >
            <Box
              component="span"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                "& span": {
                  display: "block",
                  width: 24,
                  height: 2,
                  bgcolor: "#C9A84C",
                  borderRadius: 1,
                  transition: "all 0.3s",
                },
              }}
            >
              <span />
              <span />
              <span />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer for fixed navbar */}
      <Toolbar />

      {/* Mobile drawer — full width */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            bgcolor: "rgba(26,26,46,0.97)",
            backdropFilter: "blur(20px)",
            pt: 2,
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            pb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#C9A84C",
              fontWeight: 700,
            }}
          >
            ליאת לשם
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="סגירת תפריט"
            sx={{ color: "var(--color-neutral-300)" }}
          >
            <Typography variant="h5" component="span" sx={{ lineHeight: 1 }}>
              ✕
            </Typography>
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navLinks.map((link) => (
            <Box key={link.href}>
              <ListItem disablePadding>
                <ListItemButton
                  component={link.children ? "div" : Link}
                  {...(!link.children ? { href: link.href } : {})}
                  onClick={() => {
                    if (link.children) {
                      setOpenSubmenu(
                        openSubmenu === link.label ? null : link.label
                      );
                    } else {
                      setDrawerOpen(false);
                    }
                  }}
                  sx={{
                    py: 1.5,
                    px: 3,
                    "&:hover": { bgcolor: "rgba(201,168,76,0.08)" },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "var(--color-neutral-100)",
                    }}
                  />
                  {link.children && (
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--color-neutral-400)" }}
                    >
                      {openSubmenu === link.label ? "▲" : "▼"}
                    </Typography>
                  )}
                </ListItemButton>
              </ListItem>
              {link.children && (
                <Collapse in={openSubmenu === link.label}>
                  <List disablePadding>
                    {link.children.map((child) => (
                      <ListItem key={child.href} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={child.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            pr: 5,
                            pl: 3,
                            py: 1,
                            "&:hover": {
                              bgcolor: "rgba(201,168,76,0.08)",
                            },
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              fontSize: "0.95rem",
                              color: "var(--color-neutral-300)",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
