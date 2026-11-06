import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { year } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-chalk">
      <div className="shell relative z-10 flex flex-col items-center py-14 text-center">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-pine font-display text-[11px] font-semibold tracking-[0.02em] text-chalk transition-colors group-hover:bg-apricot group-hover:text-ink">
            MK
          </span>
          <span className="font-display text-2xl font-semibold tracking-[-0.035em]">
            Manish Kumar
          </span>
        </Link>

        <p className="mt-5 max-w-sm text-balance text-sm leading-relaxed text-muted">
          Full-stack developer building web and mobile products end to end,
          from Kolkata to wherever the work is.
        </p>

        <a
          href="mailto:manishkumar110113@gmail.com"
          className="group mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-pine transition-colors hover:text-apricot"
        >
          manishkumar110113@gmail.com
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em]"
          aria-label="Footer"
        >
          {[
            { href: "/projects", label: "Work" },
            { href: "/about", label: "About" },
            { href: "/certifications", label: "Credentials" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <div key={item.href} className="flex items-center gap-3">
              {index > 0 && (
                <span className="h-1 w-1 rotate-45 bg-line-strong" />
              )}
              <Link
                href={item.href}
                className="text-muted transition-colors hover:text-pine"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em]">
          <a
            href="https://github.com/manish01101"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-pine"
          >
            GitHub
          </a>
          <span className="h-1 w-1 rotate-45 bg-line-strong" />
          <a
            href="https://www.linkedin.com/in/manish01101/"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-pine"
          >
            LinkedIn
          </a>
          <span className="h-1 w-1 rotate-45 bg-line-strong" />
          <a
            href="#"
            className="text-muted transition-colors hover:text-pine"
          >
            Back to top
          </a>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-2 border-t border-line pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-faint sm:flex-row sm:gap-6">
          <p>&copy; {year} · All rights reserved</p>
          <p>Kolkata, India · IST</p>
          <p>Built with Next.js</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-0 right-0 select-none overflow-hidden"
      >
        <p className="whitespace-nowrap text-center font-display text-[12vw] font-semibold leading-none tracking-[-0.07em] text-ink/[0.035]">
          PORTFOLIO
        </p>
      </div>
    </footer>
  );
};

export default Footer;
