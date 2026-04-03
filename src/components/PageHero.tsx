import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <Box
      component="section"
      className="text-center py-14 md:py-20"
    >
      <Box
        className="mx-auto mb-4 h-1 w-16 rounded-full"
        sx={{ bgcolor: "primary.main" }}
      />
      <Typography
        variant="h1"
        component="h1"
        sx={{ mb: 2, letterSpacing: "-0.02em" }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl mx-auto"
          sx={{ fontWeight: 400, lineHeight: 1.6 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
