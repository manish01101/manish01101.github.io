import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { IProject } from "@/lib/types";

interface IWorkGallery {
  projects: IProject[];
}

const WorkGallery = ({ projects }: IWorkGallery) => {
  return (
    <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-12">
      {projects.map((project, index) => (
        <a
          key={project.id}
          href={project.liveUrl || project.githubUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center text-center"
        >
          <div className="relative aspect-[17/9] w-full overflow-hidden rounded-xl border border-line bg-sand transition-colors group-hover:border-line-strong">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-chalk/90 px-2.5 py-1 font-mono text-[8px] tracking-[0.16em] text-ink backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute -bottom-0 left-1/2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-chalk text-pine transition-colors group-hover:bg-apricot group-hover:text-ink">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
            <span>{project.category}</span>
            <span className="h-1 w-1 rotate-45 bg-apricot" />
            <span>{project.year}</span>
          </div>

          <h3 className="mt-1.5 text-balance font-display text-xl font-medium leading-tight tracking-[-0.03em] transition-colors group-hover:text-pine sm:text-2xl">
            {project.title}
          </h3>
        </a>
      ))}
    </div>
  );
};

export default WorkGallery;
