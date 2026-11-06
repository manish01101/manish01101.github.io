"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Lock, X } from "lucide-react";
import type { IProject } from "@/lib/types";

interface IProjectLightbox {
  project: IProject | null;
  onClose: () => void;
}

const ProjectLightbox = ({ project, onClose }: IProjectLightbox) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      className="fixed inset-0 z-[100] bg-pine-deep/95 p-4 text-chalk backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full w-full max-w-6xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-chalk/15 pb-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-chalk/45">
              Project preview
            </p>
            <h2 className="mt-1 truncate font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-chalk/25 transition-colors hover:bg-chalk hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative mt-4 min-h-0 flex-1">
          <Image
            src={project.image}
            alt={`${project.title} full preview`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-chalk/15 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-chalk/55">
          <span>
            {project.category} · {project.year}
          </span>

          <div className="flex flex-wrap items-center gap-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-chalk"
              >
                Live site
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {project.secondaryUrl && (
              <a
                href={project.secondaryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-chalk"
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
                className="inline-flex items-center gap-1.5 transition-colors hover:text-chalk"
              >
                Source
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-chalk/35">
                <Lock className="h-2.5 w-2.5" />
                Private
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLightbox;
