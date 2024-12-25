import { IProjectData } from "./Projects";

export default function Project({
	data: project,
	reverse,
}: { data: IProjectData; reverse?: boolean }) {
	return (
		<div
			className="
			bg-card my-10
			 grid md:grid-cols-2 gap-6 rounded-3xl text-tBlack
			 max-w-5xl mx-auto overflow-hidden shadow-lg p-4
			"
			key={project.id}
		>
			{/* Info Section */}
			<div
				className={`content-center md:text-right text-center ${reverse ? "md:order-last " : ""}`}
			>
				<p className="text-2xl font-bold mb-4">{project.title}</p>
				<p className="text-gray-700 mb-4">{project.overview}</p>

				<h3 className="text-lg font-semibold mb-2">Key Features:</h3>
				<ul className="list-disc list-inside text-gray-700 mb-4">
					{project.features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>

				<h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
				<p className="text-gray-700 mb-4">{project.techStack.join(", ")}</p>
			</div>

			{/* video section */}
			<div className="mockup-browser shadow-lg bg-[#d2f2d9]">
				<div className="mockup-browser-toolbar">
					<div className="input border-base-300 border" />
				</div>
				<video
					src={project.videoUrl}
					autoPlay
					playsInline
					preload="metadata"
					muted
					loop
				/>
			</div>
		</div>
	);
}
