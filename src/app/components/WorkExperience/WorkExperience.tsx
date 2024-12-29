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
		<div className="min-h-screen bg-bgwhite flex items-center justify-center ">
			<div className="p-8">
				<h2 className="text-2xl font-bold mb-6 text-center text-tGreen">
					Work Experience
				</h2>
				<div className="space-y-6">
					{experiences.map((experience) => (
						<div
							key={experience.title}
							className="p-6 rounded-lg text-gray-400 font-bold"
						>
							<h3 className="text-xl font-semibold">{experience.title}</h3>
							<p className="text-sm ">
								<span className="text-tGreen">{experience.company}</span> &bull;
								{experience.duration}
							</p>
							<ul className="mt-4 list-disc list-inside">
								{experience.responsibilities.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<div className="bg-gray-400 h-1 w-[75%] mt-8 m-auto" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;

import React from "react";
