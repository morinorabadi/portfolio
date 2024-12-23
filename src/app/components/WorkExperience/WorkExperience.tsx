const WorkExperience = () => {
	const experiences = [
		{
			title: "Web App Developer",
			company: "Sule Market",
			duration: "May 2024 – Present",
			responsibilities: [
				"developed 3D web applications for creating shed using THREE.js and Next.js.",
				"Built and optimized RESTful APIs with Node.js and Express.js for seamless backend integration.",
				"Collaborated with designers to deliver user-friendly and experiences.",
			],
		},
		{
			title: "Web Game Developer",
			company: "Smartiza",
			duration: "Sep 2022 – May 2024",
			responsibilities: [
				"Developed 3D games with THREE.js, focusing on gameplay and optimization.",
				"Engineered multiplayer functionality and real-time gameplay mechanics.",
				"Optimized web application performance to achieve faster load times.",
			],
		},
		{
			title: "Full-Stack Developer",
			company: "Freelance",
			duration: "Jun 2020 – Sep 2022",
			responsibilities: [
				"Built and maintained full-stack web applications with modern frameworks and libraries.",
				"Designed scalable backend systems and APIs with python and Django.",
				"Collaborated with clients to gather requirements and ensure project goals were met.",
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
