import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { Resume } from "./components/Resume";
import GigsSection from "./components/GigsSection";
import ReviewsSection from "./components/reviews";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <AboutMe />
      <GigsSection/>
      <Projects />
      <ReviewsSection/>
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
