import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandCard } from "@/components";
import EstimateForm from "./EstimateForm";

export const metadata: Metadata = {
  title: "בקשת הצעת מחיר",
  description:
    "בקשו הצעת מחיר לשירותי קריינות ומול מצלמה מליאת לשם.",
};

const benefits = [
  {
    icon: "🎯",
    title: "התאמה אישית",
    description: "כל פרויקט מקבל יחס אישי ומותאם לצרכים שלכם.",
  },
  {
    icon: "⚡",
    title: "זמן תגובה מהיר",
    description: "חוזרת עם הצעת מחיר תוך יום עסקים אחד.",
  },
  {
    icon: "💎",
    title: "איכות מקצועית",
    description: "ניסיון של שנים בקריינות ומשחק מול מצלמה.",
  },
];

export default function EstimatePage() {
  return (
    <Layout>
      <PageHero
        title="בקשת הצעת מחיר"
        subtitle="מלאו את הטופס ואחזור אליכם עם הצעת מחיר מותאמת."
      />

      <Box className="grid gap-6 sm:grid-cols-3 mb-12">
        {benefits.map((benefit, i) => (
          <BrandCard
            key={benefit.title}
            className="animate-fade-up text-center"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ display: "block", mb: 1 }}
            >
              {benefit.icon}
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {benefit.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {benefit.description}
            </Typography>
          </BrandCard>
        ))}
      </Box>

      <Box className="max-w-xl mx-auto mb-12">
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}
        >
          פרטי הבקשה
        </Typography>
        <EstimateForm />
      </Box>
    </Layout>
  );
}
