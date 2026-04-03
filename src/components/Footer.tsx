import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="mt-auto"
      sx={{
        borderTop: "1px solid rgba(201,168,76,0.25)",
        bgcolor: "transparent",
        py: 3,
        px: 4,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Typography
          variant="body1"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#C9A84C",
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          ליאת לשם
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "var(--color-neutral-500)", fontSize: "0.8rem" }}
        >
          &copy; {new Date().getFullYear()} ליאת לשם. כל הזכויות שמורות.
        </Typography>
      </div>
    </Box>
  );
}
