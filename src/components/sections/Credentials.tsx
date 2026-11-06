import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/certifications";
import SectionHeading from "@/components/ui/SectionHeading";

const Credentials = () => {
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Credentials"
          title="The paper trail."
          description="Formal proof of the foundations — full-stack engineering, systems, machine learning and computer science."
        />

        <div className="mx-auto mt-12 max-w-3xl border-t border-line">
          {certifications.slice(0, 4).map((cert, index) => (
            <a
              key={cert.title}
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center border-b border-line py-6 text-center transition-colors hover:bg-chalk"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                <span className="text-apricot">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{cert.issuer}</span>
                <span className="h-1 w-1 rotate-45 bg-line-strong" />
                <span>{cert.date}</span>
              </div>
              <h3 className="mt-2 flex items-center justify-center gap-2 text-balance font-display text-xl font-medium leading-tight tracking-[-0.025em] transition-colors group-hover:text-pine sm:text-2xl">
                {cert.title}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-apricot" />
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-pine hover:text-chalk"
          >
            All {certifications.length} credentials
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
