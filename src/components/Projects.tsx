import { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import { categories, projects, type ProjectCategory } from "../data/projects";
import { cn } from "../lib/cn";
import { useReveal } from "../hooks/useReveal";
import { ProjectCard } from "./ProjectCard";

const chipCount = (cat: string) =>
  cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const ref = useReveal<HTMLElement>();

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative bg-surface2/60">
      <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-bold tracking-[0.22em] text-accent uppercase">Projects</p>
            <h2 id="projects-heading" className="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl">
              Live work, not screenshots.
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-muted">
              Every card opens a deployed site and its code. Filter by the kind of client you are.
            </p>
          </div>
          <p className="rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-semibold text-muted" aria-live="polite">
            Showing <span className="font-bold text-ink">{visible.length}</span> of {projects.length}
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 active:scale-95",
                  active
                    ? "bg-ink text-page shadow-lg"
                    : "border border-line bg-surface text-muted hover:border-accent hover:text-ink"
                )}
              >
                {cat === "All" && <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />}
                {cat}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                    active ? "bg-white/20 text-white" : "bg-surface2 text-muted"
                  )}
                >
                  {chipCount(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Like what you see?{" "}
          <a href="#contact" className="font-semibold text-accent underline underline-offset-4 hover:opacity-80">
            Let&apos;s talk about yours →
          </a>
        </p>
      </div>
    </section>
  );
}
