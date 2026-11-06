"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/certifications", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-chalk/90 backdrop-blur-md">
        <div className="shell relative flex h-16 items-center justify-between gap-4">
          <div className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-muted md:block">
            Portfolio / 2026
          </div>

          <Link
            href="/"
            className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2.5"
            onClick={() => setIsOpen(false)}
            aria-label="Manish Kumar — home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-pine font-display text-[10px] font-semibold tracking-[0.02em] text-chalk transition-colors group-hover:bg-apricot group-hover:text-ink">
              MK
            </span>
            <span className="whitespace-nowrap font-display text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
              Manish Kumar
            </span>
          </Link>

          <div className="ml-auto flex items-center justify-end gap-3">
            <a
              href="mailto:manishkumar110113@gmail.com"
              className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:bg-pine hover:text-chalk md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-apricot" />
              Open for work
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-ink md:hidden"
            >
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  isOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div className="hidden border-t border-line/70 md:block">
          <nav
            className="shell flex h-10 items-center justify-center"
            aria-label="Primary"
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <div key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-2 h-1 w-1 rotate-45 bg-line-strong"
                    />
                  )}
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? "text-pine"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 transition-colors ${
                        isActive
                          ? "bg-apricot"
                          : "bg-transparent group-hover:bg-line-strong"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-chalk md:hidden"
        >
          <div className="shell flex min-h-full flex-col items-center py-8 text-center">
            <nav className="flex w-full flex-col" aria-label="Mobile">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex w-full flex-col items-center border-b border-line py-5"
                  >
                    <span className="font-mono text-[9px] tracking-[0.18em] text-apricot">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-1 font-display text-4xl font-medium tracking-[-0.04em] transition-colors ${
                        isActive ? "text-pine" : "group-hover:text-pine"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto w-full pt-10">
              <div className="rounded-2xl bg-pine p-6 text-chalk">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-chalk/65">
                  Start a conversation
                </p>
                <a
                  href="mailto:manishkumar110113@gmail.com"
                  className="mt-2 block break-all font-display text-xl tracking-[-0.02em]"
                >
                  manishkumar110113@gmail.com
                </a>
                <div className="mt-5 flex items-center justify-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em] text-chalk/70">
                  <a
                    href="https://github.com/manish01101"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-chalk"
                  >
                    GitHub
                  </a>
                  <span className="h-1 w-1 rotate-45 bg-apricot" />
                  <a
                    href="https://www.linkedin.com/in/manish01101/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-chalk"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
