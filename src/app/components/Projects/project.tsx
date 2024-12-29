import { IProjectData } from "./Projects";

export default function Project({ project }: { project: IProjectData }) {
	return (
		<div
			className="
			bg-[#303030] my-10
			 flex md:flex-row flex-col md:grid-cols-2 gap-6 rounded-3xl text-tBlack
			 max-w-6xl mx-auto overflow-hidden shadow-lg p-4
			"
			key={project.id}
		>
			{/* video section */}
			<div className="md:basis-[65%] md:mockup-browser shadow-lg bg-[#16792c]">
				<div className="md:visible hidden mockup-browser-toolbar">
					<div className="input input-info border-base-300 border" />
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

			{/* Info Section */}
			<div className="content-center md:text-left text-center md:basis-[35%] text-gray-400">
				<p className="text-2xl font-bold mb-6 text-tGreen">{project.title}</p>
				<p className="mb-4">{project.overview}</p>

				<ul className="list-disc list-inside mb-2 text-sm">
					{project.features.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index}>{feature}</li>
					))}
				</ul>

				<p className=" mb-2">
					created with : {project.techStack.join(", ")} ...
				</p>
			</div>
		</div>
	);
}
