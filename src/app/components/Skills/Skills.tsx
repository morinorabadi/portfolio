/* eslint-disable @next/next/no-img-element */

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
			<img className="w-20" src={"/svgs/babylonjs.svg"} alt={"babylonjs"} />
		);
	const data = svgs.find((a) => a.name === name);
	if (data === undefined) return null;
	return (
		<img
			className="w-20"
			src={`${baseSvgUrl}${name}/${data.file}.svg`}
			alt={data.name}
		/>
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
		<div id="skills" className="bg-background py-12 p-8">
			<h2 className="text-3xl font-bold mb-6 text-center text-tGreen">
				Skills
			</h2>
			{skills.map((skill, index) => (
				<div className="p-2 text-tBlack" key={skill.title}>
					{index !== 0 && (
						<div className="bg-gray-400 max-w-lg h-[2px] w-[75%] mt-6 m-auto" />
					)}
					<p className="font-bold text-center text-xl m-10">{skill.title}</p>
					<div className="flex max-w-2xl m-auto gap-3 justify-evenly flex-wrap">
						{skill.description.split(" ").map((tag, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Svg name={tag} key={index} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}
