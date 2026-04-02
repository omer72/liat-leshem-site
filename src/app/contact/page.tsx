import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Congruent. Tell us about your challenge and we'll share how we can help.",
};

export default function ContactPage() {
  return <ContactForm />;
}
