import About from "./../components/About";
import Divider from "./../components/Divider";
import Intro from "./../components/Intro";
import Projects from "./../components/Projects";
import Skills from "./../components/Skills";
import Experience from "./../components/Experience";
import MiniDivider from "./../components/MiniDivider";
import ContactMe from "./../components/ContactMe";

function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <MiniDivider />
      <Experience />
      <ContactMe />
    </main>
  );
}

export default Home;
