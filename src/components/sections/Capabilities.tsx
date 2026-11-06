import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
  {
    title: "Product engineering",
    description:
      "Taking a product from a rough brief to a shipped release, including the decisions in between.",
    tools: "Next.js · TypeScript · PostgreSQL",
  },
  {
    title: "Interface & interaction",
    description:
      "Editorial layouts, design systems, motion and the small details that make software feel considered.",
    tools: "React · Tailwind · Motion",
  },
  {
    title: "Backend & data",
    description:
      "APIs, auth, schemas and integrations built to stay boring under load.",
    tools: "Node · Fastify · Prisma",
  },
  {
    title: "Mobile",
    description:
      "Cross-platform apps that share logic with the web without feeling like a webview.",
    tools: "React Native · Expo",
  },
  {
    title: "Realtime",
    description:
      "Live collaboration, chat, presence and tracking without hand-waving the hard parts.",
    tools: "WebSockets · WebRTC · Redis",
  },
  {
    title: "Launch & operations",
    description:
      "Containers, CI/CD, observability and the deployment pipeline that gets it into people's hands.",
    tools: "Docker · Azure · GitHub Actions",
  },
];

const Capabilities = () => {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="What I can own."
          description="Not a logo wall — the parts of the product I can take responsibility for from start to finish."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group flex h-full flex-col items-center bg-paper p-7 text-center transition-colors hover:bg-chalk"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line font-mono text-[9px] tracking-[0.12em] text-apricot transition-colors group-hover:border-apricot">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-balance font-display text-2xl font-medium leading-none tracking-[-0.03em] transition-colors group-hover:text-pine">
                {capability.title}
              </h3>
              <p className="mt-3 text-balance text-sm leading-relaxed text-muted">
                {capability.description}
              </p>
              <p className="mt-auto w-full border-t border-line pt-4 font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
                {capability.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
