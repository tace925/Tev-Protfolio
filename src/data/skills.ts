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
    blurb: "What powers the systems I build",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "Authentication",
    ],
  },
  {
    title: "Tools & deployment",
    blurb: "How I ship and keep sites live",
    items: ["Git & GitHub", "Vite", "Netlify", "Vercel", "Chrome DevTools", "Figma basics"],
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