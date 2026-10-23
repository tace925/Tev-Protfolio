import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { contactButtons } from "../data/contact";
import { cn } from "../lib/cn";
import { WhatsAppIcon } from "./ContactButton";

export function FloatingContactBar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    const footer = document.querySelector("footer");
    if (!contactSection && !footer) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Hide the bar when contact section or footer is in view
        const anyVisible = entries.some((e) => e.isIntersecting);
        setHide(anyVisible);
      },
      { threshold: 0.08 }
    );
    if (contactSection) io.observe(contactSection);
    if (footer) io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hide}
      className={cn(
        "no-print fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden",
        "transition-all duration-300",
        hide ? "pointer-events-none translate-y-[120%] opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-line bg-surface/95 p-2 shadow-[0_-8px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur-xl">
        <a
          href={contactButtons[0].href}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp — opens WhatsApp chat"
          tabIndex={hide ? -1 : 0}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#15803d] px-4 py-3 text-sm font-bold text-white active:scale-[0.97] dark:bg-[#22c55e] dark:text-[#052e16]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={contactButtons[1].href}
          aria-label="Send an Email — opens email app"
          tabIndex={hide ? -1 : 0}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-page active:scale-[0.97]"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </a>
      </div>
    </div>
  );
}
