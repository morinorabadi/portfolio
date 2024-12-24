import Project from "./project";

type IProjectData = {
	id: string;
	title: string;
	videoUrl: string;
	description: string;
};

export default function Projects() {
	const content: IProjectData[] = [
		{
			id: "001",
			title: "SinDesigner",
			description:
				"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
			videoUrl: "/videos/test.mp4",
		},
		{
			id: "002",
			title: "SinDesigner",
			description:
				"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
			videoUrl: "/videos/test.mp4",
		},
	];

	return (
		<div className="bg-background p-3">
			<h2 className="text-2xl font-bold mb-6 text-center text-tGreen"> Projects </h2>
			{content.map((data,index) => (
				<Project data={data} key={data.id} reverse={index%2 === 0} />
			))}
		</div>
	);
}
