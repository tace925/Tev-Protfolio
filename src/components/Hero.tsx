import { ArrowDown, Download, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { contact, contactButtons } from "../data/contact";
import { useReveal } from "../hooks/useReveal";
import { ContactButton } from "./ContactButton";

const ticker = ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify", "Vercel", "Git & GitHub", "Responsive Design"];

export function Hero() {
  const ref = useReveal<HTMLElement>(0);

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-[68px]">
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-blueprint absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-wa/10 blur-[90px]" />
        <div className="absolute top-64 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[90px]" />
      </div>

      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal relative mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm">
                <span className="ping-dot relative inline-block h-2 w-2 rounded-full bg-wa text-wa" aria-hidden="true" />
                {contact.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                9 live projects
              </span>
            </div>

            <p className="mt-6 text-[13px] font-bold tracking-[0.22em] text-accent uppercase">
              {contact.brand} · Nairobi, Kenya
            </p>
            <h1 id="hero-heading" className="mt-3 font-display text-[2.6rem] leading-[1.02] font-bold text-balance sm:text-6xl lg:text-[4.4rem]">
              {contact.name.split(" ")[0]} {contact.name.split(" ")[1]}
              <br />
              <span className="text-gradient">{contact.name.split(" ")[2]}</span>
            </h1>
            <p className="mt-3 font-display text-lg font-semibold text-ink sm:text-xl">
              Full Stack Developer <span className="text-muted font-normal">·</span>{" "}
              <span className="text-muted font-medium">Computer Science Student</span>
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              {contact.objective} Real church, school &amp; business systems — each with a live demo and code you can
              inspect.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ContactButton button={contactButtons[0]} size="lg" className="w-full sm:w-auto" />
              <ContactButton button={contactButtons[1]} variant="solid-ink" size="lg" className="w-full sm:w-auto" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={contact.cvPath}
                download="Tevin-Mulinge-Mutuku-CV.pdf"
                className="inline-flex items-center gap-1.5 font-semibold text-accent underline decoration-accent/40 decoration-2 underline-offset-4 hover:decoration-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV (PDF)
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 font-semibold text-muted transition-colors hover:text-ink"
              >
                See live work
                <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
              </a>
            </div>

            {/* mini facts */}
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {[
                { k: "Based", v: "Nairobi, KE" },
                { k: "Study", v: "CS Level 6" },
                { k: "Focus", v: "Full-stack web" },
              ].map((f) => (
                <div key={f.k} className="rounded-2xl border border-line bg-surface px-3 py-3 text-center">
                  <dt className="text-[11px] font-semibold tracking-wider text-muted uppercase">{f.k}</dt>
                  <dd className="mt-0.5 text-[13px] font-bold text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Profile card */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-accent/25 via-fuchsia-500/15 to-wa/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface shadow-[var(--shadow-card)]">
              {/* card top */}
              <div className="relative bg-gradient-to-br from-[#0f4c81] via-[#1a6bb5] to-[#0b2c4d] p-6 text-white dark:from-[#0e2547] dark:via-[#143a6b] dark:to-[#0b1220]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 font-display text-xl font-bold backdrop-blur-sm ring-1 ring-white/30">
                    TM
                  </div>
                  <div>
                    <p className="font-display text-lg leading-tight font-bold">{contact.name}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-[13px] text-white/80">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {contact.location}
                    </p>
                  </div>
                </div>
                <div className="relative mt-5 flex items-center gap-2 rounded-2xl bg-black/25 p-3 font-mono text-[12.5px] backdrop-blur-sm">
                  <span aria-hidden="true" className="flex gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] block" />
                    <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e] block" />
                    <i className="h-2.5 w-2.5 rounded-full bg-[#28c840] block" />
                  </span>
                  <span className="truncate text-white/90">$ whoami → tevintech --hireable</span>
                </div>
              </div>
              {/* card body */}
              <div className="space-y-3 p-5">
                <div className="flex items-start gap-3 rounded-2xl bg-surface2 p-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <GraduationCap className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div className="text-[13px] leading-snug">
                    <p className="font-bold text-ink">{contact.institution}</p>
                    <p className="text-muted">{contact.course} · {contact.intake}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl border border-line p-3">
                    <p className="font-display text-2xl font-bold text-accent">9</p>
                    <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">Live projects</p>
                  </div>
                  <div className="rounded-2xl border border-line p-3">
                    <p className="font-display text-2xl font-bold text-accent">4</p>
                    <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">Categories</p>
                  </div>
                </div>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-line py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  github.com/tace925
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* stack ticker */}
        <div className="no-print relative mt-10 overflow-hidden rounded-full border border-line bg-surface py-2.5" aria-label="Technologies Tevin works with">
          <div className="animate-marquee flex w-max items-center gap-8 pr-8">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-8 text-[13px] font-semibold whitespace-nowrap text-muted" aria-hidden={i >= ticker.length}>
                {t} <i className="h-1.5 w-1.5 rounded-full bg-accent not-italic" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}