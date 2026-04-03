"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { BrandButton } from "@/components";

const goldFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(201,168,76,0.25)",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "rgba(201,168,76,0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C9A84C",
      boxShadow: "0 0 0 3px rgba(201,168,76,0.15)",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#C9A84C",
  },
};

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
      <Box className="text-center py-8 animate-fade-up">
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
      className="animate-fade-up"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        p: 4,
        borderRadius: 3,
        bgcolor: "rgba(45,45,68,0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <TextField
        name="name"
        label="שם מלא"
        required
        fullWidth
        variant="outlined"
        sx={goldFieldSx}
      />
      <TextField
        name="email"
        label="אימייל"
        type="email"
        required
        fullWidth
        variant="outlined"
        dir="ltr"
        sx={goldFieldSx}
      />
      <TextField
        name="message"
        label="הודעה"
        required
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        sx={goldFieldSx}
      />
      <BrandButton type="submit" variant="contained" size="large">
        שליחה
      </BrandButton>
    </Box>
  );
}
