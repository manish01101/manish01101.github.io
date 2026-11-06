import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Seal from "@/components/ui/Seal";

const stats = [
  { value: "08", label: "Projects shipped" },
  { value: "06", label: "Verified credentials" },
  { value: "12+", label: "Tools in daily use" },
  { value: "2026", label: "Latest release" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[17rem] h-72 w-72 -translate-x-1/2 rounded-full bg-butter/45 blur-[110px]" />
        <div className="absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-line/80 sm:top-28 sm:h-[44rem] sm:w-[44rem]" />
        <div className="absolute left-1/2 top-36 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-line/60 sm:top-40 sm:h-[35rem] sm:w-[35rem]" />
        <div className="absolute left-1/2 top-52 h-[16rem] w-[16rem] -translate-x-1/2 rounded-full border border-line/45 sm:top-56 sm:h-[24rem] sm:w-[24rem]" />
      </div>

      <div className="shell relative flex flex-col items-center pb-12 pt-28 text-center sm:pt-36 md:pb-14 md:pt-40">
        <div className="rise flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-8 bg-line-strong" />
          <span>Full-stack developer</span>
          <span className="h-1 w-1 rotate-45 bg-apricot" />
          <span>Web &amp; mobile products</span>
          <span className="h-px w-8 bg-line-strong" />
        </div>

        <Seal
          id="hero-seal"
          label="INTERFACE · SYSTEMS · SHIPPING · "
          className="rise mt-7 h-20 w-20 sm:h-24 sm:w-24"
        />

        <h1 className="rise rise-1 mt-7 font-display text-[clamp(4.4rem,14vw,9.5rem)] font-medium leading-[0.8] tracking-[-0.06em]">
          Manish
          <br />
          <span className="text-pine">Kumar</span>
          <span className="text-apricot">.</span>
        </h1>

        <p className="rise rise-2 mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          I build web and mobile products end to end — from the first screen to
          the last deploy. Considered on the surface, dependable underneath.
        </p>

        <div className="rise rise-3 mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/projects"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-pine px-7 py-4 text-sm font-semibold text-chalk transition-colors hover:bg-apricot hover:text-ink sm:w-auto"
          >
            Explore the work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-ink px-7 py-4 text-sm font-semibold transition-colors hover:bg-paper sm:w-auto"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid w-full grid-cols-2 divide-y divide-line border-y border-line sm:mt-14 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <p className="font-display text-4xl font-medium leading-none tracking-[-0.045em] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
