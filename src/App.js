import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Services from "./components/services/Services";

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Project />
    <Footer />
    </>
  );
}

export default App;
