import { IProjectData } from "./Projects";

export default function Project({ project }: { project: IProjectData }) {
  return (
    <div
      className="
			bg-card my-10
			 flex md:grid-cols-2 gap-6 rounded-3xl text-tBlack
			 max-w-5xl mx-auto overflow-hidden shadow-lg p-4
			"
      key={project.id}
    >
      {/* video section */}
      <div className="md:basis-[65%] md:mockup-browser shadow-lg bg-[#d2f2d9]">
        <div className="md:visible hidden mockup-browser-toolbar">
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

      {/* Info Section */}
      <div className="content-center md:text-right text-center md:basis-[35%]">
        <p className="text-2xl font-bold mb-6 text-center text-tGreen">
          {project.title}
        </p>
        <p className="text-tBlack -700 mb-4 text-left">{project.overview}</p>

        <ul className="list-disc list-inside text-tBlack -700 mb-4 text-left text-sm">
          {project.features.map((feature, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p className="text-tBlack -700 mb-4">{project.techStack.join(", ")}</p>
      </div>
    </div>
  );
}
