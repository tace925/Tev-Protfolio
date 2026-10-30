import { Code2, Server, Database, Rocket, Handshake } from "lucide-react";
import { skillGroups } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

// One icon per group, in the same order as skillGroups:
// Front-end, Backend, Databases & BaaS, Tools & deployment, Ways of working
const icons = [Code2, Server, Database, Rocket, Handshake];

export function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-[12px] font-bold tracking-[0.22em] text-accent uppercase">Skills</p>
        <h2 id="skills-heading" className="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl">
          A tight, employable stack.
        </h2>
        <p className="mt-2 max-w-xl text-[15px] text-muted">
          No buzzword soup — the tools I actually ship with, plus how I work.
        </p>

        {/* 6-column grid on large screens: first 3 cards span 2, last 2 span 3 */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, gi) => {
            const Icon = icons[gi % icons.length];
            const span = gi < 3 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <div
                key={group.title}
                className={`lift rounded-[18px] border border-line bg-surface p-6 shadow-[var(--shadow-card)] ${span}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-page">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{group.title}</h3>
                <p className="mt-0.5 text-[13px] text-muted">{group.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${group.title} skills`}>
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-surface2 px-3 py-1.5 text-[12.5px] font-medium text-ink ring-1 ring-line/60 ring-inset"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}