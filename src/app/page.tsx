import Aboutme from "./components/Aboutme/Aboutme";
import ContactInformation from "./components/ContactInformation/ContactInformation";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <main>
      <Nav />
      <Aboutme />
      <Projects />
      <Skills />
      <WorkExperience />
      <ContactInformation />
    </main>
  );
}
