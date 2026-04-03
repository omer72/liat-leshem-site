"use client";

import { useState } from "react";
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

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar className="mx-auto w-full max-w-6xl px-4">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <Typography
              variant="h5"
              component="span"
              sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "-0.02em" }}
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
                onMouseEnter={() => link.children && setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <BrandButton
                  variant="text"
                  color="inherit"
                  href={link.href}
                  sx={{ fontWeight: 500, fontSize: "0.95rem" }}
                >
                  {link.label}
                </BrandButton>
                {link.children && hoveredMenu === link.label && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      border: 1,
                      borderColor: "divider",
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
                          color: "text.primary",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          "&:hover": { bgcolor: "primary.50", color: "primary.main" },
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
          </nav>

          {/* Mobile hamburger */}
          <IconButton
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="פתיחת תפריט"
            sx={{ color: "text.primary" }}
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
                  bgcolor: "text.primary",
                  borderRadius: 1,
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

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, pt: 2 } }}
      >
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 800 }}>
            ליאת לשם
          </Typography>
        </Box>
        <List>
          {navLinks.map((link) => (
            <Box key={link.href}>
              <ListItem disablePadding>
                <ListItemButton
                  component={link.children ? "div" : Link}
                  {...(!link.children ? { href: link.href } : {})}
                  onClick={() => {
                    if (link.children) {
                      setOpenSubmenu(openSubmenu === link.label ? null : link.label);
                    } else {
                      setDrawerOpen(false);
                    }
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  {link.children && (
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
                          sx={{ pr: 4 }}
                        >
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{ fontSize: "0.9rem" }}
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
