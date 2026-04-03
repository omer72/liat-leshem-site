"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { BrandButton } from "@/components";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`הודעה מהאתר מאת ${name}`);
    const body = encodeURIComponent(`שם: ${name}\nאימייל: ${email}\n\n${message}`);
    window.location.href = `mailto:karyanim@tarika.co.il?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Box className="text-center py-8">
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          תודה!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ההודעה שלכם נשלחה. אחזור אליכם בהקדם.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        p: 3,
        borderRadius: 3,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
      }}
    >
      <TextField
        name="name"
        label="שם מלא"
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        name="email"
        label="אימייל"
        type="email"
        required
        fullWidth
        variant="outlined"
        dir="ltr"
      />
      <TextField
        name="message"
        label="הודעה"
        required
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
      <BrandButton type="submit" variant="contained" size="large">
        שליחה
      </BrandButton>
    </Box>
  );
}
