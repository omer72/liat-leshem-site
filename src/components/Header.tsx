"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BrandButton from "./BrandButton";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar className="mx-auto w-full max-w-7xl px-4">
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Congruent
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <BrandButton
                key={link.href}
                variant="text"
                color="inherit"
                href={link.href}
                sx={{ fontWeight: 500 }}
              >
                {link.label}
              </BrandButton>
            ))}
            <BrandButton
              variant="contained"
              size="small"
              href="/contact"
              sx={{ ml: 1 }}
            >
              Get in Touch
            </BrandButton>
          </nav>

          {/* Mobile hamburger */}
          <IconButton
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            sx={{ color: "text.primary" }}
          >
            <Box
              component="span"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                "& span": {
                  display: "block",
                  width: 22,
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
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, pt: 2 } }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
