"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Layout, BrandButton } from "@/components";

const contactDetails = [
  { label: "Email", value: "hello@congruent.com" },
  { label: "Phone", value: "+44 (0) 20 7946 0958" },
  { label: "Address", value: "1 Principal Place, London EC2A 2BA" },
];

export default function ContactPage() {
  return (
    <Layout>
      {/* ── Page header ── */}
      <Box component="section" className="py-16 md:py-24 text-center">
        <Box
          className="mx-auto mb-4 h-1 w-12 rounded-full"
          sx={{ bgcolor: "secondary.main" }}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{ letterSpacing: "-0.03em", lineHeight: 1.1, mb: 3 }}
        >
          Let&apos;s start a
          <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            conversation
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="max-w-xl mx-auto"
          sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
        >
          Whether you have a specific challenge or just want to explore how we
          might work together — we&apos;d love to hear from you.
        </Typography>
      </Box>

      {/* ── Contact grid ── */}
      <Box
        component="section"
        className="grid md:grid-cols-5 gap-10 md:gap-16 pb-16 md:pb-24"
      >
        {/* Form — 3 cols */}
        <Box
          component="form"
          className="md:col-span-3 flex flex-col gap-5"
          action="#"
          noValidate
        >
          <Box className="grid sm:grid-cols-2 gap-5">
            <TextField
              label="First name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Last name"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <TextField
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Organisation"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="How can we help?"
            variant="outlined"
            fullWidth
            required
            multiline
            minRows={5}
          />
          <BrandButton type="submit" size="large" sx={{ alignSelf: "flex-start" }}>
            Send Message
          </BrandButton>
        </Box>

        {/* Details — 2 cols */}
        <Box className="md:col-span-2 flex flex-col gap-8">
          {contactDetails.map((detail) => (
            <Box key={detail.label}>
              <Typography
                variant="overline"
                sx={{ color: "secondary.main", fontWeight: 700 }}
              >
                {detail.label}
              </Typography>
              <Typography variant="body1" sx={{ mt: 0.5 }}>
                {detail.value}
              </Typography>
            </Box>
          ))}

          <Box
            className="rounded-xl p-6 mt-2"
            sx={{ bgcolor: "background.paper", border: 1, borderColor: "divider" }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Prefer a quick chat?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Book a free 30-minute discovery call and we&apos;ll discuss your
              needs directly.
            </Typography>
            <BrandButton
              variant="outlined"
              size="small"
              href="/contact"
            >
              Book a Call
            </BrandButton>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
