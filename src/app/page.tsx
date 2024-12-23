import Aboutme from "./components/Aboutme/Aboutme";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

export default function Home() {
	return (
		<main>
			<Aboutme />
			<Skills />
			<Projects />
			<WorkExperience />
			{/* Contact Information */}
		</main>
	);
}
