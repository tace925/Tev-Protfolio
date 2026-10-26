export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  cta: string;          // changed from priceHint
};

export const services: Service[] = [
  {
    title: "Business websites",
    description: "Fast, mobile-first sites for shops and small businesses that turn visitors into callers.",
    deliverables: ["Catalogue / menu pages", "WhatsApp & maps CTA", "M-Pesa-ready checkout notes"],
    cta: "Get a quote →",
  },
  {
    title: "Institutional systems",
    description: "Records, notices and workflow screens for schools and churches — simple for staff to use.",
    deliverables: ["Multi-role dashboards", "Notices & records", "Staff training walkthrough"],
    cta: "Get a quote →",
  },
  {
    title: "Portfolios",
    description: "Personal and brand portfolios for creatives and professionals that look sharp on phones.",
    deliverables: ["Gallery & case pages", "CV download", "Contact & social links"],
    cta: "Get a quote →",
  },
  {
    title: "Site care",
    description: "Fixes, updates and deployment help for existing sites — speed, bugs and small redesigns.",
    deliverables: ["Bug fixes", "Content updates", "Deploy to Netlify / Vercel"],
    cta: "Get a quote →",
  },
];