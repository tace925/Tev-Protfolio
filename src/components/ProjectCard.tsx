import { ExternalLink, TrendingUp, Church, GraduationCap, Store, Clapperboard } from "lucide-react";
import type { Project } from "../data/projects";
import { cn } from "../lib/cn";
import { GithubIcon } from "./ContactButton";

const categoryStyle: Record<Project["category"], { gradient: string; chip: string; Icon: typeof Church }> = {
  School: {
    gradient: "from-[#0f4c81] via-[#2563eb] to-[#06b6d4]",
    chip: "bg-sky-500/15 text-sky-200 ring-sky-300/30",
    Icon: GraduationCap,
  },
  Church: {
    gradient: "from-[#7c3aed] via-[#a855f7] to-[#ec4899]",
    chip: "bg-violet-500/15 text-violet-200 ring-violet-300/30",
    Icon: Church,
  },
  Business: {
    gradient: "from-[#15803d] via-[#16a34a] to-[#84cc16]",
    chip: "bg-emerald-500/15 text-emerald-200 ring-emerald-300/30",
    Icon: Store,
  },
  Media: {
    gradient: "from-[#b45309] via-[#f59e0b] to-[#ef4444]",
    chip: "bg-amber-500/15 text-amber-200 ring-amber-300/30",
    Icon: Clapperboard,
  },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const style = categoryStyle[project.category];
  const Icon = style.Icon;

  return (
    <article
      className="lift group flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]"
      style={{ transitionDelay: `${(index % 3) * 40}ms` }}
      aria-labelledby={`project-${project.slug}`}
    >
      {/* Visual header */}
      <div className={cn("relative overflow-hidden bg-gradient-to-br p-5 pb-6", style.gradient)}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div aria-hidden="true" className="absolute -right-10 -bottom-12 opacity-[0.16] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          <Icon className="h-44 w-44 text-white" strokeWidth={1} />
        </div>
        <div className="relative flex items-center justify-between gap-2">
          <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ring-1 backdrop-blur-sm", style.chip)}>
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {project.category}
          </span>
          <span className="rounded-full bg-black/30 px-3 py-1 font-mono text-[11px] font-semibold text-white/90 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
        <div className="relative mt-8">
          <p aria-hidden="true" className="font-mono text-[11px] text-white/60">
            ~/projects/{project.slug}
          </p>
          <h3 id={`project-${project.slug}`} className="mt-1 font-display text-[1.35rem] leading-tight font-bold text-white">
            {project.name}
          </h3>
        </div>
        {project.featured && (
          <span className="absolute top-5 right-5 hidden">Featured</span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {project.featured && (
          <p className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold text-[#92600a] dark:text-gold">
            ★ Featured build
          </p>
        )}
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-surface2 p-3 text-[13px] leading-snug font-medium text-ink">
          <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-wa" aria-hidden="true" />
          <span>{project.result}</span>
        </p>
        <ul aria-label={`Technologies used in ${project.name}`} className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-page px-2.5 py-1 text-[11.5px] font-semibold text-muted"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-2 border-t border-line pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live site for ${project.name} in a new tab`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-page transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live site
          </a>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open GitHub repository for ${project.name} in a new tab`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-line px-4 py-2.5 text-[13px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center rounded-full border border-dashed border-line px-4 py-2.5 text-[13px] font-medium text-muted">
              Private repo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
