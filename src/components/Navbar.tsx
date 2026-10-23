import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, contactButtons, navLinks } from "../data/contact";
import { cn } from "../lib/cn";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppIcon } from "./ContactButton";

export function Navbar({ theme, onToggleTheme }: { theme: "light" | "dark"; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = contactButtons[0];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-page/85 shadow-[0_8px_30px_-18px_rgb(0_0_0/0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-page/40 backdrop-blur-md"
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="TEVINTECH — back to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink font-display text-[13px] font-bold text-page transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            TM
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-bold tracking-tight">TEVINTECH</span>
            <span className="block text-[11px] font-medium text-muted">{contact.shortName}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface2 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={wa.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp — opens WhatsApp chat"
            className="hidden items-center gap-2 rounded-full bg-[#15803d] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex dark:bg-[#22c55e] dark:text-[#052e16]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-line bg-page/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-surface2"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={wa.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#15803d] px-4 py-3 text-sm font-semibold text-white dark:bg-[#22c55e] dark:text-[#052e16]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
