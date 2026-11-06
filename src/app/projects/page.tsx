"use client";

import { useCallback, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import ContactCTA from "@/components/sections/ContactCTA";
import type { IProject } from "@/lib/types";
import { projectCategories, projects } from "@/lib/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedWord, setSearchedWord] = useState("");
  const [previewProject, setPreviewProject] = useState<IProject | null>(null);
  const closePreview = useCallback(() => setPreviewProject(null), []);

  const filteredProjects = useMemo(() => {
    const query = searchedWord.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.role?.toLowerCase().includes(query) ?? false) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchedWord]);

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
            <span>Archive / 2024—2026</span>
            <span className="h-1 w-1 rotate-45 bg-apricot" />
            <span>08 projects</span>
            <span className="h-px w-8 bg-line-strong" />
          </div>

          <h1 className="mt-7 font-display text-[clamp(4rem,11vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.06em]">
            All the
            <br />
            <span className="text-pine">work.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted">
            Eight projects across web, mobile and realtime systems. Some are
            client products, some are independent builds — all of them made it
            to production.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
            <span>{String(projects.length).padStart(2, "0")} projects</span>
            <span className="h-1 w-1 rotate-45 bg-line-strong" />
            <span>{projectCategories.length - 1} categories</span>
            <span className="h-1 w-1 rotate-45 bg-line-strong" />
            <span>Curated archive</span>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-line bg-chalk/95 backdrop-blur-md md:top-[6.5rem]">
        <div className="shell py-3">
          <div className="flex flex-col items-center gap-2.5 lg:flex-row lg:justify-center lg:gap-4">
            <div className="flex h-10 w-full max-w-md items-center gap-3 rounded-full border border-line bg-paper px-4 transition-colors focus-within:border-pine">
              <Search className="h-4 w-4 shrink-0 text-faint" />
              <input
                type="search"
                placeholder="Search project, stack or keyword"
                value={searchedWord}
                onChange={(event) => setSearchedWord(event.target.value)}
                className="h-full w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-faint"
                aria-label="Search projects"
              />
              {searchedWord && (
                <button
                  type="button"
                  onClick={() => setSearchedWord("")}
                  aria-label="Clear search"
                  className="text-faint transition-colors hover:text-ink"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex w-full items-center justify-start gap-2 overflow-x-auto pb-0.5 sm:justify-center lg:w-auto lg:shrink-0 lg:pb-0">
              <SlidersHorizontal className="hidden h-3.5 w-3.5 shrink-0 text-faint sm:block" />
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full border px-3.5 py-2 font-mono text-[8px] uppercase tracking-[0.12em] transition-colors sm:text-[9px] ${
                    selectedCategory === category
                      ? "border-pine bg-pine text-chalk"
                      : "border-line text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="shell">
          <div className="mb-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-line pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:mb-8">
            <span>
              {searchedWord || selectedCategory !== "All"
                ? "Filtered results"
                : "The complete archive"}
            </span>
            <span className="h-1 w-1 rotate-45 bg-apricot" />
            <span aria-live="polite">
              {String(filteredProjects.length).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
              {filteredProjects.map((project, position) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={projects.indexOf(project)}
                  priority={position === 0}
                  onPreview={setPreviewProject}
                />
              ))}
            </div>
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-line bg-paper p-8 text-center sm:p-10">
              <span className="h-2 w-2 rotate-45 bg-apricot" />
              <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-pine">
                No match / 00
              </p>
              <h2 className="mt-3 text-balance font-display text-4xl font-medium tracking-[-0.04em]">
                Nothing here yet.
              </h2>
              <p className="mt-3 max-w-sm text-balance text-sm leading-relaxed text-muted">
                No project matches that search or filter. Try a different stack,
                or clear the filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchedWord("");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-xs font-semibold text-chalk transition-colors hover:bg-apricot hover:text-ink"
              >
                Clear filters
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
      <ProjectLightbox project={previewProject} onClose={closePreview} />
    </div>
  );
};

export default Projects;
