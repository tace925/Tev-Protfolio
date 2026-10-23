export type ProjectCategory = "Church" | "School" | "Business" | "Media";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  result: string;
  stack: string[];
  liveUrl: string;
  repoUrl?: string;
  featured?: boolean;
};

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "School",
  "Church",
  "Business",
  "Media",
];

export const projects: Project[] = [
  {
    slug: "pck-tti-management",
    name: "PCK TTI Management System",
    category: "School",
    year: "2025",
    summary:
      "Multi-portal school management SPA for records, notices and daily operations at PC Kinyanjui TTI.",
    result: "Replaces paper records for 4 user roles — admin, staff, students & mess.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://pck-tti-management.netlify.app",
    repoUrl: "https://github.com/tace925/pck-tti-management-system",
    featured: true,
  },
  {
    slug: "fine-villa",
    name: "Fine Villa Limited",
    category: "Business",
    year: "2025",
    summary:
      "Property management platform connecting owners, agents, caretakers and tenants in one dashboard.",
    result: "One login for 4 roles — listings, tenants, rent tracking & maintenance.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    liveUrl: "https://finevilla-limited.vercel.app",
    repoUrl: "https://github.com/tace925/fine-villa-limited",
    featured: true,
  },
  {
    slug: "kag-katoloni",
    name: "KAG Katoloni Church",
    category: "Church",
    year: "2024",
    summary:
      "Church website and management system with notices, leadership profiles and event bookings.",
    result: "Sunday notices & bookings moved online — no more printed bulletins.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://kag-katoloni.netlify.app",
    repoUrl: "https://github.com/tace925/kag-katoloni-church",
    featured: true,
  },
  {
    slug: "mess-department",
    name: "Mess Department System",
    category: "School",
    year: "2025",
    summary:
      "Standalone mess department system for PCK TTI — meal planning, inventory and daily headcounts.",
    result: "Kitchen staff plan a full week of meals from one screen.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://pck-mess-system.netlify.app",
    repoUrl: "https://github.com/tace925/pck-mess-system",
  },
  {
    slug: "rubbs-media",
    name: "RUBBS Media",
    category: "Media",
    year: "2024",
    summary:
      "Cinematic dark portfolio for an event photography & videography brand.",
    result: "Bookings-first layout — gallery, packages & WhatsApp CTA in 2 taps.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://rubbsmedia.vercel.app",
    repoUrl: "https://github.com/tace925/rubbs-media",
  },
  {
    slug: "prime-time-shop",
    name: "Prime Time Shop",
    category: "Business",
    year: "2024",
    summary:
      "Clothes & shoes shop website for a Machakos business — catalogue, offers and directions.",
    result: "Shop catalogue on phones — customers browse before they visit.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://primetimeshop.netlify.app",
    repoUrl: "https://github.com/tace925/prime-time-shop",
  },
  {
    slug: "terminal-portfolio",
    name: "Terminal-style Portfolio",
    category: "Media",
    year: "2025",
    summary:
      "Terminal-themed personal portfolio — type commands to explore projects, skills and contact.",
    result: "Memorable interactive CV that recruiters actually finish reading.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://terminal-style-portfolio-lemon.vercel.app",
    repoUrl: "https://github.com/tace925/terminal-style-portfolio",
  },
];
