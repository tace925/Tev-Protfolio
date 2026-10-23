import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contact, contactButtons } from "../data/contact";
import { useReveal } from "../hooks/useReveal";
import { ContactButton } from "./ContactButton";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-[24px] border border-line bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* CTA side */}
            <div className="relative bg-gradient-to-br from-[#0f4c81] via-[#134e85] to-[#0a2540] p-7 text-white sm:p-10 dark:from-[#0e2547] dark:via-[#12325e] dark:to-[#0b1220]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20 backdrop-blur-sm">
                  <span className="ping-dot relative inline-block h-2 w-2 rounded-full bg-emerald-400 text-emerald-400" aria-hidden="true" />
                  Replies within a day
                </p>
                <h2 id="contact-heading" className="mt-4 font-display text-3xl font-bold text-balance sm:text-4xl">
                  Have a project or an attachment slot?
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  One tap is all it takes. Message me on WhatsApp or send an email — tell me what you need and
                  I&apos;ll reply with next steps and a timeline.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contactButtons[0].href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat on WhatsApp — opens WhatsApp chat"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-6 py-3.5 text-[15px] font-bold text-[#052e16] shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href={contactButtons[1].href}
                    aria-label="Send an Email — opens email app"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-[#0f4c81] transition-all hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    Send an Email
                  </a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-[13px] text-white/70">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {contact.availability} · Industrial attachment &amp; freelance
                </p>
              </div>
            </div>

            {/* Details side */}
            <div className="p-7 sm:p-10">
              <h3 className="font-display text-lg font-bold">Direct details</h3>
              <p className="mt-1 text-sm text-muted">Prefer to copy-paste? Use these — no form, no waiting.</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href={`tel:${contact.phoneIntl}`} className="lift flex items-center gap-3 rounded-2xl border border-line p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold tracking-wider text-muted uppercase">Phone / WhatsApp</span>
                      <span className="block text-[15px] font-bold">{contact.phoneDisplay} · {contact.phoneIntl}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="lift flex items-center gap-3 rounded-2xl border border-line p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-wider text-muted uppercase">Email</span>
                      <span className="block truncate text-[15px] font-bold">{contact.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-line p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold tracking-wider text-muted uppercase">Location</span>
                    <span className="block text-[15px] font-bold">{contact.location}</span>
                  </span>
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                <ContactButton button={contactButtons[0]} size="sm" className="flex-1" />
                <ContactButton button={contactButtons[1]} variant="outline" size="sm" className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
