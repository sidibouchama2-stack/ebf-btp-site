import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DirectorMessage from "./components/DirectorMessage";
import Services from "./components/Services";
import Process from "./components/Process";
import OngoingProjects from "./components/OngoingProjects";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DirectorMessage />
        <Services />
        <Process />
        <OngoingProjects />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
