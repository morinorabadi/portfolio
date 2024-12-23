const Skills = () => {
	const skills = [
		{
			title: "Languages",
			description: "JavaScript (ES6+), HTML5, CSS3, TypeScript, Golang",
		},
		{
			title: "Frontend",
			description: "React.js, Next.js, Tailwind CSS, Three.js",
		},
		{
			title: "Backend",
			description: "Node.js, Express.js, RESTful APIs, MongoDB, Mongoose",
		},
		{
			title: "Tools & Platforms",
			description: "Git, Webpack, Vite, Docker, Postman",
		},
		{
			title: "Game Development",
			description: "Unity (C#), Blender, 3D Modeling",
		},
		{
			title: "Others",
			description:
				"Problem-Solving, Debugging, Responsive Design, Cross-Browser Compatibility",
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
