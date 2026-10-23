import { Store, Landmark, UserSquare2, Wrench, Check } from "lucide-react";
import { services } from "../data/services";
import { useReveal } from "../hooks/useReveal";

const icons = [Store, Landmark, UserSquare2, Wrench];

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-surface2/60">
      <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden="true" />
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-[12px] font-bold tracking-[0.22em] text-accent uppercase">Services</p>
        <h2 id="services-heading" className="mt-2 max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl">
          What I can build for you this month.
        </h2>
        <p className="mt-2 max-w-xl text-[15px] text-muted">
          Clear scope, mobile-first, deployed and handed over with training. Prices in Kenya Shillings.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={service.title}
                className="lift flex flex-col rounded-[18px] border border-line bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-[17px] font-bold">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[13px] font-medium text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-full bg-surface2 px-3 py-1.5 text-center text-[12.5px] font-bold text-accent">
                  {service.priceHint}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
