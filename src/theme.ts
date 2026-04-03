"use client";

import { createTheme } from "@mui/material/styles";

const brand = {
  primary: {
    main: "#d4726a",
    light: "#e2928b",
    dark: "#b8524a",
    contrastText: "#ffffff",
  },
  accent: {
    main: "#f96b44",
    light: "#fb9070",
    dark: "#d94e2a",
    contrastText: "#ffffff",
  },
  warm: {
    50: "#fef7f6",
    100: "#fdeeed",
    200: "#fad5d2",
    300: "#f5b0ab",
    400: "#e2928b",
    500: "#d4726a",
    600: "#b8524a",
    700: "#993d36",
    800: "#7a2e29",
    900: "#5c201d",
  },
  neutral: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
};

const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  palette: {
    primary: brand.primary,
    secondary: brand.accent,
    background: {
      default: "#fef7f6",
      paper: "#ffffff",
    },
    text: {
      primary: brand.neutral[900],
      secondary: brand.neutral[600],
    },
    success: { main: "#16a34a" },
    warning: { main: "#f59e0b" },
    error: { main: "#dc2626" },
    divider: brand.neutral[200],
  },
  typography: {
    fontFamily: "var(--font-heebo), var(--font-open-sans), Arial, sans-serif",
    h1: { fontWeight: 800, fontSize: "2.75rem", lineHeight: 1.15 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.25 },
    h3: { fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.3 },
    h4: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.35 },
    h5: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.4 },
    h6: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.5 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: "none" },
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
          border: `1px solid ${brand.neutral[200]}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(254,247,246,0.92)",
          backdropFilter: "blur(12px)",
          color: brand.neutral[900],
          boxShadow: `0 1px 0 ${brand.neutral[200]}`,
        },
      },
    },
  },
});

export default theme;
