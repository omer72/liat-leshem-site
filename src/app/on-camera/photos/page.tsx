import type { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, PageHero, BrandButton, FlickrGallery } from "@/components";

export const metadata: Metadata = {
  title: "תמונות סטילס",
  description: "גלריות תמונות סטילס של ליאת לשם.",
};

export default function PhotosPage() {
  return (
    <Layout>
      <PageHero
        title="תמונות סטילס"
        subtitle="גלריות תמונות סטילס מצילומים שונים."
      />

      <Box className="max-w-2xl mx-auto text-center mb-12">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: "italic" }}>
          (אזהרה: סיגריות מצטלמות טוב, אך מזיקות לכל השאר. אני כבר לא מעשנת סיגריות) :)
        </Typography>
      </Box>

      <Box className="mb-12">
        <FlickrGallery />
      </Box>

      <Box className="text-center mb-8">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          לתמונות נוספות, בקרו בעמוד הפליקר שלי.
        </Typography>
        <BrandButton
          href="https://www.flickr.com/people/leshemania/"
          variant="outlined"
        >
          Flickr ←
        </BrandButton>
      </Box>

      <Box className="flex justify-center gap-3">
        <BrandButton variant="outlined" href="/on-camera">
          ← חזרה למול מצלמה
        </BrandButton>
      </Box>
    </Layout>
  );
}
