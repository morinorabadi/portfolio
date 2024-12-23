const Skills = () => {
	const skills = [
		{
			title: "Languages",
			description: "TypeScript, JavaScript, HTML5, CSS3, Golang",
		},
		{
			title: "Game Development",
			description: "Three.js , Babylon.js, Godot Engine",
		},
		{
			title: "Frontend",
			description: "React.js, Next.js, Tailwind CSS, Three.js, Babylon.js",
		},
		{
			title: "Backend",
			description: "Node.js, Express.js, MongoDB, go-fiber",
		},
		{
			title: "Others",
			description: "Git Blender Docker",
		},
	];

	return (
		<div className="bg-black p-3 text-white">
			{skills.map((skill) => (
				<div key={skill.title}>
					<p className="font-bold mt-4">{skill.title}</p>
					<p>{skill.description}</p>
				</div>
			))}
		</div>
	);
};

export default Skills;
