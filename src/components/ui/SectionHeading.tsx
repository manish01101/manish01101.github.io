import type { ReactNode } from "react";

interface ISectionHeading {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  action,
}: ISectionHeading) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
        <span className="h-px w-8 bg-line-strong sm:w-12" />
        <span className="text-pine">{index}</span>
        <span className="h-1 w-1 rotate-45 bg-apricot" />
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-line-strong sm:w-12" />
      </div>

      <h2 className="mt-6 max-w-4xl text-balance font-display text-[clamp(2.6rem,5.6vw,5rem)] font-medium leading-[0.92] tracking-[-0.045em]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}

      {action && <div className="mt-7">{action}</div>}
    </div>
  );
};

export default SectionHeading;
