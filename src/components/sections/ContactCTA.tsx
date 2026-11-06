import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden border-b border-pine-deep bg-pine-deep py-20 text-chalk sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-chalk/10 sm:h-[46rem] sm:w-[46rem]" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-chalk/10 sm:h-[32rem] sm:w-[32rem]" />

      </div>

      <div className="shell relative flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-chalk/60">
          <span className="h-px w-8 bg-chalk/25" />
          <span>04</span>
          <span className="h-1 w-1 rotate-45 bg-apricot" />
          <span>Contact</span>
          <span className="h-px w-8 bg-chalk/25" />
        </div>

        <h2 className="mt-6 max-w-4xl text-balance font-display text-[clamp(3rem,7.4vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
          Have a problem
          <br />
          worth <span className="text-apricot">shipping?</span>
        </h2>

        <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-chalk/65">
          Good work starts with a clear problem. Send yours and I&apos;ll tell
          you how I&apos;d approach it.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="mailto:manishkumar110113@gmail.com"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-chalk px-6 py-4 text-sm font-semibold text-ink transition-colors hover:bg-apricot sm:w-auto"
          >
            manishkumar110113@gmail.com
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-chalk/35 px-6 py-4 text-sm font-semibold transition-colors hover:bg-chalk hover:text-ink sm:w-auto"
          >
            Use the contact form
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 flex w-full flex-col items-center justify-center gap-3 border-t border-chalk/15 pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-chalk/50 sm:flex-row sm:gap-6">
          <span>Working worldwide · replies within a day</span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/manish01101"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-chalk"
            >
              GitHub
            </a>
            <span className="h-1 w-1 rotate-45 bg-chalk/25" />
            <a
              href="https://www.linkedin.com/in/manish01101/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-chalk"
            >
              LinkedIn
            </a>
            <span className="h-1 w-1 rotate-45 bg-chalk/25" />
            <a
              href="mailto:manishkumar110113@gmail.com"
              className="transition-colors hover:text-chalk"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
