import type { Metadata } from "next";
import CertificateCard from "@/components/ui/CertificateCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { certifications } from "@/lib/certifications";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Certifications and verified credentials in full-stack engineering, systems, machine learning and computer science.",
};

const CertificationsPage = () => {
  const issuerCount = new Set(certifications.map((cert) => cert.issuer)).size;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line pb-12 pt-32 text-center md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-line/70 sm:h-[38rem] sm:w-[38rem]" />
          <div className="absolute left-1/2 top-28 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full border border-line/50 sm:top-32 sm:h-[28rem] sm:w-[28rem]" />
          <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-butter/35 blur-[100px]" />
        </div>

        <div className="shell relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-line-strong" />
            <span>Credentials / 2024—2026</span>
            <span className="hidden h-1 w-1 rotate-45 bg-apricot sm:block" />
            <span className="hidden sm:inline">All verified</span>
            <span className="h-px w-8 bg-line-strong" />
          </div>

          <h1 className="mt-7 font-display text-[clamp(4rem,11vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.06em]">
            The paper
            <br />
            <span className="text-pine">trail.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted">
            Six credentials across full-stack engineering, systems, Python,
            machine learning and computer science — the structured learning
            behind the shipped work.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
            <span>
              {String(certifications.length).padStart(2, "0")} credentials
            </span>
            <span className="h-1 w-1 rotate-45 bg-line-strong" />
            <span>{String(issuerCount).padStart(2, "0")} issuers</span>
            <span className="h-1 w-1 rotate-45 bg-line-strong" />
            <span>Verify any record</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="shell">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-line pb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            <span>The complete record</span>
            <span className="h-1 w-1 rotate-45 bg-apricot" />
            <span>{String(certifications.length).padStart(2, "0")} total</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificateCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default CertificationsPage;
