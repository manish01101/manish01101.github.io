"use client";

import Image from "next/image";
import { ArrowUpRight, Lock, Maximize2 } from "lucide-react";
import type { IProject } from "@/lib/types";

interface IProjectCard {
  project: IProject;
  index?: number;
  onPreview?: (project: IProject) => void;
  priority?: boolean;
}

const ProjectCard = ({
  project,
  index,
  onPreview,
  priority = false,
}: IProjectCard) => {
  return (
    <article className="group flex h-full flex-col items-center text-center">
      <button
        type="button"
        onClick={() => onPreview?.(project)}
        aria-label={`Open a larger preview of ${project.title}`}
        className="relative block aspect-[17/9] w-full overflow-hidden rounded-xl border border-line bg-sand text-left transition-colors group-hover:border-line-strong"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={priority ? "eager" : "lazy"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        {index !== undefined && (
          <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-chalk/90 px-2.5 py-1 font-mono text-[8px] tracking-[0.16em] text-ink backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="pointer-events-none absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-line/80 bg-chalk/95 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur-sm transition-colors group-hover:border-apricot group-hover:bg-apricot">
          <Maximize2 className="h-3 w-3" />
          Preview
        </span>
      </button>

      <div className="flex w-full flex-1 flex-col items-center pt-7">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
          <span>{project.category}</span>
          <span className="h-1 w-1 rotate-45 bg-apricot" />
          <span>{project.year}</span>
          <span className="h-1 w-1 rotate-45 bg-line-strong" />
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-pine" />
            {project.liveUrl ? "Live" : "Private"}
          </span>
        </div>

        <h3 className="mt-2 text-balance font-display text-2xl font-medium leading-tight tracking-[-0.035em] transition-colors group-hover:text-pine sm:text-3xl">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-3 line-clamp-3 max-w-md text-balance text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-line pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-pine"
            >
              Live
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.secondaryUrl && (
            <a
              href={project.secondaryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-pine"
            >
              {project.secondaryLabel || "Admin"}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-pine"
            >
              Source
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              <Lock className="h-2.5 w-2.5" />
              Private
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
