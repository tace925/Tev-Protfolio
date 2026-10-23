import { ArrowUp } from "lucide-react";
import { contact } from "../data/contact";
import { GithubIcon } from "./ContactButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface pb-28 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-display text-sm font-bold">
            Crafted &amp; polished by <span className="text-accent">{contact.brand}</span>
          </p>
          <p className="mt-1 text-[13px] text-muted">
            {contact.name} · {contact.course} · {contact.institution} · © {year}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Tevin's GitHub profile in a new tab"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
