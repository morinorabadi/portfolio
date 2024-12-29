import Aboutme from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/Experience/Experience";

export default function Home() {
  return (
    <main>
      <Nav />
      <Aboutme />
      <Projects />
      <Skills />
      <WorkExperience />
      <Contact />
    </main>
  );
}
