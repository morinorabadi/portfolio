import Project from "./project";

export type IProjectData = {
  id: string;
  title: string;
  overview: string;
  features: string[];
  techStack: string[];
  videoUrl: string;
};

export default function Projects() {
  const content: IProjectData[] = [
    {
      id: "001",
      title: "SinDesigner",
      overview:
        "A multiplayer browser-based game featuring immersive 3D graphics and real-time interactions.",
      features: [
        "Real-time multiplayer gameplay.",
        "Interactive 3D environment built with Three.js.",
        "Secure backend with Node.js and WebSocket support.",
      ],
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/sindesiner.mp4",
    },

    {
      id: "002",
      title: "online boxing",
      overview:
        "multiplayer browser-based boxing game featuring immersive 3D graphics and real-time interactions.",
      features: [
        "real-time multiplayer game play.",
        "anti cheat with server authorization",
        "secure backend with Node.js and WebSocket.",
      ],
      techStack: ["Three.js", "Next.js", "Node.js", "Colyseus"],
      videoUrl: "/videos/boxing.mp4",
    },
    {
      id: "003",
      title: "new metaverse",
      overview: "",
      features: [
        "real time physics simulation with help of Havok",
        "customizable Interactive 3D with many environment",
        "with real time multiplayer support",
      ],
      techStack: ["babylon.js", "Node.js", "Havok physics"],
      videoUrl: "/videos/newmetaverse.mp4",
    },
    {
      id: "004",
      title: "old metaverse",
      overview: "old metaverse",
      features: [
        "Interactive 3D environment built with Three.js",
        "Secure backend with Node.js and WebSocket support",
      ],
      techStack: ["Three.js", "Node.js", "WebSockets"],
      videoUrl: "/videos/old.mp4",
    },
    {
      id: "005",
      title: "Runner",
      overview:
        "browser base runner game with various character and environment",
      features: [
        "anti cheat with server authorization",
        "collision detection with help of physics simulation",
        "",
      ],
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/runnner.mp4",
    },
    {
      id: "006",
      title: "SinDesigner",
      overview:
        "A multiplayer browser-based game featuring immersive 3D graphics and real-time interactions.",
      features: [
        "real-time multiplayer gameplay.",
        "collision detection with help of physics simulation",
        "secure backend with Node.js and WebSocket support.",
      ],
      techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
      videoUrl: "/videos/shotter.mp4",
    },
  ];

  return (
    <div className="bg-background p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-tGreen">
        Projects
      </h2>
      {content.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
}
