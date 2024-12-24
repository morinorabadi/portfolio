type IProjectData = {
	id: string;
	title: string;
	videoUrl: string;
	description: string;
};

export default function Project({
	data,
	reverse,
}: { data: IProjectData; reverse?: boolean }) {
	return (
		<div
			className="
			bg-card my-10
			 grid md:grid-cols-2 gap-6 rounded-3xl text-tBlack
			 max-w-5xl mx-auto overflow-hidden shadow-lg p-4
			"
			key={data.id}
		>
			<div
				className={`content-center md:text-right text-center ${reverse ? "md:order-last " : ""}`}
			>
				<p className="md:text-4xl text-2xl m-4">{data.title}</p>
				<p className="md:text-xl ">{data.description}</p>
			</div>
			<div className="mockup-browser shadow-lg bg-[#d2f2d9]">
				<div className="mockup-browser-toolbar">
					<div className="input border-base-300 border" />
				</div>
				<video
					src={data.videoUrl}
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
