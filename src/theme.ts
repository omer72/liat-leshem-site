"use client";

import { createTheme } from "@mui/material/styles";

const brand = {
  charcoal: {
    main: "#1A1A2E",
    light: "#2D2D44",
    dark: "#0F0F1A",
  },
  gold: {
    main: "#C9A84C",
    light: "#D4BC72",
    dark: "#A88A35",
    contrastText: "#1A1A2E",
  },
  blush: {
    main: "#E8B4B8",
    light: "#F0CDD0",
    dark: "#D4959A",
    contrastText: "#1A1A2E",
  },
  warmWhite: "#FAF7F2",
  cream: "#F0E6D3",
  neutral: {
    50: "#FAF7F2",
    100: "#F0E6D3",
    200: "#E0D5C4",
    300: "#C8BBA8",
    400: "#A89D8C",
    500: "#8A7F6F",
    600: "#6B6155",
    700: "#4D453C",
    800: "#2D2D44",
    900: "#1A1A2E",
  },
};

const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: brand.gold,
    secondary: brand.blush,
    background: {
      default: brand.charcoal.main,
      paper: brand.charcoal.light,
    },
    text: {
      primary: brand.cream,
      secondary: brand.neutral[400],
    },
    success: { main: "#16a34a" },
    warning: { main: "#f59e0b" },
    error: { main: "#dc2626" },
    divider: "rgba(201,168,76,0.15)",
  },
  typography: {
    fontFamily:
      "var(--font-inter), var(--font-heebo), var(--font-open-sans), Arial, sans-serif",
    h1: {
      fontFamily:
        "var(--font-playfair), var(--font-heebo), Georgia, serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.15,
    },
    h2: {
      fontFamily:
        "var(--font-playfair), var(--font-heebo), Georgia, serif",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily:
        "var(--font-playfair), var(--font-heebo), Georgia, serif",
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.25,
    },
    h4: {
      fontFamily:
        "var(--font-playfair), var(--font-heebo), Georgia, serif",
      fontWeight: 700,
      fontSize: "1.375rem",
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: "none" },
    overline: {
      fontWeight: 600,
      fontSize: "0.75rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "0.5rem 1.75rem",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: brand.warmWhite,
          color: brand.charcoal.main,
          border: "1px solid rgba(201,168,76,0.12)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(26,26,46,0.85)",
          backdropFilter: "blur(16px)",
          color: brand.cream,
          boxShadow: "0 1px 0 rgba(201,168,76,0.15)",
        },
      },
    },
  },
});

export default theme;
