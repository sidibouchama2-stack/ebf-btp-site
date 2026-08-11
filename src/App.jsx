import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DirectorMessage from "./components/DirectorMessage";
import Services from "./components/Services";
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
        <Projects />
        <OngoingProjects />
        <DirectorMessage />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
