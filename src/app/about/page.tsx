import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Manish Kumar is a full-stack developer in Kolkata building web and mobile products end to end.",
};

const facts = [
  ["Timezone", "IST (UTC+5:30)"],
  ["Focus", "Full-stack product engineering"],
  ["Experience", "2024 — now"],
  ["Currently", "Independent developer"],
  ["Open to", "Freelance & full-time"],
];

const principles = [
  {
    title: "Understand the runtime",
    description:
      "Frameworks change. Knowing what the machine is actually doing underneath does not.",
  },
  {
    title: "Ship the whole thing",
    description:
      "A feature is not done when it renders. It is done when auth, errors, empty states and deployment are handled.",
  },
  {
    title: "Make it legible",
    description:
      "Code, interfaces and docs should explain themselves before they need a meeting.",
  },
  {
    title: "Sweat the details",
    description:
      "Loading states, edge cases and latency are usually the part people remember.",
  },
];

const About = () => {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32 text-center md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-16 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-line/70 sm:h-[42rem] sm:w-[42rem]" />
          <div className="absolute left-1/2 top-28 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-line/50 sm:h-[32rem] sm:w-[32rem]" />
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-butter/35 blur-[100px]" />
        </div>

        <div className="shell relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-line-strong" />
            <span>About / The longer version</span>
            <span className="h-px w-8 bg-line-strong" />
          </div>

          <h1 className="mt-8 max-w-4xl text-balance font-display text-[clamp(3.2rem,8.4vw,7rem)] font-medium leading-[0.86] tracking-[-0.055em]">
            A developer with a{" "}
            <span className="text-pine">designer&apos;s</span> eye.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m Manish. I build web and mobile products from first sketch
            to production — usually for people who need the whole thing handled,
            not just the front end.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <a
              href="https://github.com/manish01101"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 border-b border-ink pb-0.5 transition-colors hover:border-apricot hover:text-pine"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish01101/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 border-b border-ink pb-0.5 transition-colors hover:border-apricot hover:text-pine"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 border-b border-ink pb-0.5 transition-colors hover:border-apricot hover:text-pine"
            >
              See the work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <div className="shell">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-pine">
              Profile / 02
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              The short version.
            </h2>
          </div>

          <dl className="mt-10 grid grid-cols-2 divide-y divide-line border-y border-line sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {facts.map(([label, value], index) => (
              <div
                key={label}
                className={`px-3 py-5 text-center ${
                  index === facts.length - 1
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                  {label}
                </dt>
                <dd className="mt-2 text-balance text-sm font-semibold">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-14 max-w-2xl">
            <p className="text-balance text-center font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.035em]">
              My work sits where product design meets{" "}
              <span className="text-pine">systems engineering.</span>
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                I like interfaces that feel inevitable, APIs that are boring in
                the best way, and codebases another person can pick up without a
                meeting. I care about the unglamorous parts — auth, data
                modelling, error states, performance and deploy pipelines —
                because that&apos;s usually where a product becomes trustworthy.
              </p>
              <p>
                Over the last two years I&apos;ve built and shipped eight
                products: a realtime collaborative whiteboard, a food-rescue
                logistics platform, peer-to-peer video conferencing, a learning
                platform, a multi-surface ordering system and a handful of
                smaller tools. Some are client work; all of them had to survive
                real users, edge cases and deployment.
              </p>
              <p>
                Before that, I was building things mostly to learn how they
                worked. That instinct — take it apart, understand it, then build
                it properly — is still the through-line.
              </p>
              <p>
                When I&apos;m not shipping, I&apos;m usually reading about
                distributed systems, writing Rust, or taking something apart to
                see why it behaves the way it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="shell">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-pine">
              How I work / 03
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              A few things I don&apos;t compromise on.
            </h2>
            <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-muted">
              The default settings that shape how I approach a build.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex flex-col items-center bg-paper p-7 text-center transition-colors hover:bg-chalk sm:p-8"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line font-mono text-[9px] tracking-[0.12em] text-apricot">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-balance font-display text-2xl font-medium tracking-[-0.035em]">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md text-balance text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default About;
