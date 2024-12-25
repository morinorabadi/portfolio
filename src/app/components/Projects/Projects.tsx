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
			videoUrl: "/videos/test.mp4",
		},
		{
			id: "002",
			title: "SinDesigner",
			overview:
				"A multiplayer browser-based game featuring immersive 3D graphics and real-time interactions.",
			features: [
				"Real-time multiplayer gameplay.",
				"Interactive 3D environment built with Three.js.",
				"Secure backend with Node.js and WebSocket support.",
			],
			techStack: ["Three.js", "Node.js", "WebSockets", "MongoDB"],
			videoUrl: "/videos/test.mp4",
		},
	];

	return (
		<div className="bg-background p-3">
			<h2 className="text-2xl font-bold mb-6 text-center text-tGreen">
				Projects
			</h2>
			{content.map((data, index) => (
				<Project data={data} key={data.id} reverse={index % 2 === 0} />
			))}
		</div>
	);
}
