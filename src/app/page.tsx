import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Capabilities from "@/components/sections/Capabilities";
import ContactCTA from "@/components/sections/ContactCTA";
import Credentials from "@/components/sections/Credentials";
import Hero from "@/components/sections/Hero";
import WorkGallery from "@/components/sections/WorkGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Ticker from "@/components/ui/Ticker";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Ticker />

      <section
        id="work"
        className="scroll-mt-28 border-b border-line py-20 sm:py-28"
      >
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="A range of products, not a single trick."
            description="Eight builds across learning, commerce, logistics, collaboration and video. Every project gets the same seat at the table."
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-pine hover:text-chalk"
              >
                All {projects.length} projects
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            }
          />

          <WorkGallery projects={projects} />
        </div>
      </section>

      <Capabilities />
      <Credentials />
      <ContactCTA />
    </div>
  );
}
