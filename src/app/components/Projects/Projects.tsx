import Project from "./project";

export type IProjectData = {
  id: string;
  title: string;
  overview: string;
  techStack: string[];
  videoUrl: string;
};

export default function Projects() {
  const content: IProjectData[] = [
    {
      id: "000",
      title: "dreamaan",
      overview:
        "a great app craete more with doing less with power of workflows, AI and automations.",
      techStack: ["react", "nextjs", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/dreamaan.mp4",
    },
    {
      id: "001",
      title: "SinDesigner",
      overview:
        "3d web application that allows users to design and customize their own 3D building in real-time.",
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/sindesiner.mp4",
    },

    {
      id: "002",
      title: "online boxing",
      overview:
        "multiplayer browser-based boxing game featuring immersive 3D graphics and real-time interactions.",
      techStack: ["Three.js", "Next.js", "Node.js", "Colyseus"],
      videoUrl: "/videos/boxing.mp4",
    },
    {
      id: "004",
      title: "old metaverse",
      overview: "old metaverse",
      techStack: ["Three.js", "Node.js", "WebSockets"],
      videoUrl: "/videos/old.mp4",
    },
    {
      id: "005",
      title: "Runner",
      overview:
        "browser base runner game with various character and environment",
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/runnner.mp4",
    },
    {
      id: "006",
      title: "Shooter",
      overview:
        "A multiplayer browser-based game featuring immersive 3D graphics and real-time interactions.",
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/shotter.mp4",
    },
    {
      id: "003",
      title: "new metaverse",
      overview: "",
      techStack: ["babylon.js", "Node.js", "Havok physics"],
      videoUrl: "/videos/newmetaverse.mp4",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured <span className="text-tGreen">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A collection of my recent work in 3D web development and interactive
            experiences
          </p>
        </div>
        <div className="space-y-16">
          {content.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
