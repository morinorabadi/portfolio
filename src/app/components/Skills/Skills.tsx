/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const svgs = [
	{ name: "typescript", file: "typescript-original" },
	{ name: "javascript", file: "javascript-original" },
	{ name: "html5", file: "html5-original-wordmark" },
	{ name: "css3", file: "css3-original-wordmark" },
	{ name: "go", file: "go-original-wordmark" },

	{ name: "threejs", file: "threejs-original-wordmark" },
	{ name: "godot", file: "godot-original-wordmark" },
	{ name: "opengl", file: "opengl-original" },

	{ name: "react", file: "react-original-wordmark" },
	{ name: "nextjs", file: "nextjs-original-wordmark" },
	{ name: "tailwindcss", file: "tailwindcss-original" },

	{ name: "nodejs", file: "nodejs-original-wordmark" },
	{ name: "express", file: "express-original" },
	{ name: "mongodb", file: "mongodb-original-wordmark" },
	{ name: "socketio", file: "socketio-original" },

	{ name: "blender", file: "blender-original" },
	{ name: "docker", file: "docker-original-wordmark" },
	{ name: "git", file: "git-original" },
	{ name: "linux", file: "linux-original" },
	{ name: "ubuntu", file: "ubuntu-original" },
];

const baseSvgUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const Svg = ({ name }: { name: string }) => {
	if (name === "babylonjs")
		return (
			<div className="group flex flex-col items-center gap-2 transition-transform hover:scale-110">
				<div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 p-3 transition-colors group-hover:bg-slate-700">
					<img className="h-full w-full" src={"/svgs/babylonjs.svg"} alt={"babylonjs"} />
				</div>
			</div>
		);
	const data = svgs.find((a) => a.name === name);
	if (data === undefined) return null;
	return (
		<div className="group flex flex-col items-center gap-2 transition-transform hover:scale-110">
			<div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800/50 p-3 transition-colors group-hover:bg-slate-700">
				<img
					className="h-full w-full object-contain"
					src={`${baseSvgUrl}${name}/${data.file}.svg`}
					alt={data.name}
				/>
			</div>
		</div>
	);
};

export default function Skills() {
	const skills = [
		{
			title: "Languages",
			description: "typescript javascript html5 css3 go",
		},
		{
			title: "Game Development",
			description: "opengl threejs babylonjs godot",
		},
		{
			title: "Frontend",
			description: "react nextjs tailwindcss threejs babylonjs",
		},
		{
			title: "Backend",
			description: "nodejs express mongodb socketio",
		},
		{
			title: "Others",
			description: "git blender docker linux ubuntu",
		},
	];

	return (
		<section id="skills" className="bg-slate-900 py-20">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
						Skills & <span className="text-tGreen">Technologies</span>
					</h2>
					<p className="mt-4 text-lg text-slate-400">
						Tools and technologies I work with to bring ideas to life
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((skill) => (
						<Card
							key={skill.title}
							className="border-slate-800 bg-slate-950/50 backdrop-blur transition-all hover:border-tGreen/50 hover:shadow-lg hover:shadow-tGreen/10"
						>
							<CardHeader>
								<CardTitle className="text-xl font-bold text-white">
									{skill.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-4 justify-center">
									{skill.description.split(" ").map((tag, index) => (
										<Svg name={tag} key={index} />
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
