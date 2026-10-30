export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    blurb: "What I build interfaces with",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Responsive design",
      "Single-page apps",
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and logic behind the systems I build",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "CRUD operations",
      "Authentication (JWT)",
      "Password hashing (bcrypt)",
      "mysql2",
      "Environment variables & secrets",
    ],
  },
  {
    title: "Databases & BaaS",
    blurb: "Where the data lives",
    items: [
      "MySQL",
      "SQL & JOINs",
      "Database design",
      "Primary & foreign keys",
      "Relational modelling",
      "EER diagrams",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security",
      "Supabase Storage",
      "Supabase Realtime",
      "Edge Functions",
      "supabase-js",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    title: "Tools & deployment",
    blurb: "How I ship and keep sites live",
    items: [
      "Git & GitHub",
      "Vite",
      "Netlify",
      "Vercel",
      "MySQL Workbench",
      "Chrome DevTools",
      "Figma basics",
    ],
  },
  {
    title: "Ways of working",
    blurb: "How I work with clients & teams",
    items: [
      "Problem solving",
      "Client communication",
      "Attention to detail",
      "Project ownership",
      "Mobile-first thinking",
      "Fast turnaround",
    ],
  },
];