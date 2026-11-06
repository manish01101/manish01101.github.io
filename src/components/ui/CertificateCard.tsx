import { ArrowUpRight } from "lucide-react";
import type { ICertificate } from "@/lib/types";

interface ICertificateCard {
  cert: ICertificate;
  index: number;
}

const CertificateCard = ({ cert, index }: ICertificateCard) => {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-line bg-paper p-6 text-center transition-colors hover:border-line-strong sm:p-8">
      <div className="flex items-center justify-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
        <span className="text-apricot">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-1 w-1 rotate-45 bg-line-strong" />
        <span>{cert.date}</span>
      </div>

      <p className="mt-5 text-balance font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted">
        {cert.issuer}
      </p>
      <h2 className="mt-2 text-balance font-display text-2xl font-medium leading-tight tracking-[-0.03em] transition-colors group-hover:text-pine sm:text-3xl">
        {cert.title}
      </h2>

      <p className="mt-4 line-clamp-4 text-balance text-sm leading-relaxed text-muted">
        {cert.description}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {cert.tags.slice(0, 7).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted"
          >
            {tag}
          </span>
        ))}
        {cert.tags.length > 7 && (
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-faint">
            +{cert.tags.length - 7}
          </span>
        )}
      </div>

      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto flex w-full items-center justify-center gap-2 border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-pine"
      >
        Verify credential
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </article>
  );
};

export default CertificateCard;
