const WorkExperience = () => {
	const experiences = [
		{
			title: "Full-Stack Developer",
			company: "Freelance",
			duration: "Jan 2023 – Present",
			responsibilities: [
				"Designed and developed responsive websites and web applications for clients using React.js and Next.js.",
				"Built and optimized RESTful APIs with Node.js and Express.js for seamless backend integration.",
				"Collaborated with designers and stakeholders to deliver user-friendly experiences.",
			],
		},
		{
			title: "Frontend Developer",
			company: "XYZ Tech Solutions",
			duration: "Sep 2021 – Dec 2022",
			responsibilities: [
				"Created interactive and dynamic web interfaces using React.js and Tailwind CSS.",
				"Ensured cross-browser compatibility and mobile responsiveness for various projects.",
				"Improved website performance, reducing load times by 30%.",
			],
		},
		{
			title: "Game Developer",
			company: "Indie Studio",
			duration: "Jun 2020 – Aug 2021",
			responsibilities: [
				"Developed 3D games with Unity and Blender, focusing on gameplay mechanics and optimization.",
				"Designed immersive game environments using Three.js and WebGL for browser-based experiences.",
				"Worked with a small team to prototype and release two indie games.",
			],
		},
	];
	return (
		<div className="min-h-screen bg-gray-200 flex items-center justify-center">
			<div className="bg-gray-100 p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
					Work Experience
				</h2>
				<div className="space-y-6">
					{experiences.map((experience) => (
						<div
							key={experience.title}
							className="bg-white p-6 rounded-lg shadow-md"
						>
							<h3 className="text-xl font-semibold text-gray-700">
								{experience.title}
							</h3>
							<p className="text-sm text-gray-500">
								{experience.company} &bull; {experience.duration}
							</p>
							<ul className="mt-4 list-disc list-inside text-gray-600">
								{experience.responsibilities.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;

import React from "react";
