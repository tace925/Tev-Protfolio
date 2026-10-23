import { MapPin, GraduationCap, CalendarDays, Briefcase } from "lucide-react";
import { contact } from "../data/contact";
import { useReveal } from "../hooks/useReveal";

const facts = [
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  { icon: GraduationCap, label: "Institution", value: "PC Kinyanjui TTI" },
  { icon: CalendarDays, label: "Intake", value: "2024 · Level 6" },
  { icon: Briefcase, label: "Availability", value: "Jan – Apr 2026" },
];

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" aria-labelledby="about-heading" className="relative">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-[12px] font-bold tracking-[0.22em] text-accent uppercase">About</p>
        <h2 id="about-heading" className="mt-2 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
          A student who ships like a professional.
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              I&apos;m <strong className="font-semibold text-ink">{contact.name}</strong>, a {contact.course} student at{" "}
              <strong className="font-semibold text-ink">{contact.institution}</strong> in {contact.location}. I&apos;m a
              full stack web developer focused on fast, mobile-first websites that work on the phones Kenyans actually
              use.
            </p>
            <p>
              My work is real client and institutional projects — a multi-portal school system, a church website with
              bookings, a property platform for owners and tenants, and shop sites for local businesses. Every project
              below has a <strong className="font-semibold text-ink">live demo</strong> and a{" "}
              <strong className="font-semibold text-ink">GitHub repo</strong> you can open right now.
            </p>
            <p>
              Right now my goal is clear: secure an <strong className="font-semibold text-ink">industrial attachment
              (Jan – Apr 2026)</strong> where I can contribute from day one, while taking on freelance builds for
              businesses, churches and creatives.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {facts.map((f) => (
              <div
                key={f.label}
                className="lift flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <dt className="text-[11px] font-semibold tracking-wider text-muted uppercase">{f.label}</dt>
                  <dd className="text-sm font-bold text-ink">{f.value}</dd>
                </span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
