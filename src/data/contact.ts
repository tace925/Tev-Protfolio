export const contact = {
  name: "Tevin Mulinge Mutuku",
  shortName: "Tevin Mutuku",
  brand: "TEVINTECH",
  role: "Full Stack Developer · Computer Science Student",
  objective:
    "Seeking industrial attachment & client projects — I build fast, mobile-first websites and systems for schools, churches and businesses.",
  email: "tevinmulinge48@gmail.com",
  phoneDisplay: "0797 510 552",
  phone: "0797510552",
  phoneIntl: "+254797510552",
  whatsappNumber: "254797510552",
  location: "Nairobi, Kenya",
  institution: "PC Kinyanjui TTI",
  course: "Computer Science · Level 6",
  intake: "2024 Intake",
  availability: "Available Jan – Apr 2026",
  availabilityShort: "Open for attachment",
  github: "https://github.com/tace925",
  linkedin: "https://www.linkedin.com/in/tevin-mulinge",
  cvPath: "/Tevin-CV.pdf",
};

export type ContactButtonKind = "whatsapp" | "email" | "call" | "github";

export type ContactButton = {
  label: string;
  shortLabel: string;
  href: string;
  kind: ContactButtonKind;
};

export const contactButtons: [ContactButton, ContactButton] = [
  {
    label: "Chat on WhatsApp",
    shortLabel: "WhatsApp",
    kind: "whatsapp",
    href: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
      "Hello Tevin, I saw your portfolio and would like to talk."
    )}`,
  },
  {
    label: "Send an Email",
    shortLabel: "Email",
    kind: "email",
    href: `mailto:${contact.email}?subject=${encodeURIComponent("Portfolio enquiry")}`,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
