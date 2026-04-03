import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <Box component="section" className="text-center py-14 md:py-20">
      {/* Gold accent line */}
      <Box
        className="mx-auto mb-4 h-1 w-16 rounded-full animate-fade-up"
        sx={{
          background: "linear-gradient(90deg, #C9A84C, #D4BC72, #C9A84C)",
        }}
      />
      <Typography
        variant="h1"
        component="h1"
        className="animate-fade-up"
        sx={{ mb: 2, letterSpacing: "-0.02em", animationDelay: "0.1s" }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl mx-auto animate-fade-up"
          sx={{ fontWeight: 400, lineHeight: 1.6, animationDelay: "0.2s" }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
