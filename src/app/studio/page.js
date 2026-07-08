import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import About from "./About";
import Process from "./Process";
import Hero from "./Hero";
import Values from "./Values";
import Showcase from "./Showcase";
import "../styles/studio.css";
import CTA from "./CTA";

export default function StudioPage() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <main className="studio-page">

        <Hero />
        <About />
        <Process />
        <Values />
        <Showcase />
        <CTA />
      </main>

      <Footer />
    </>
  );
}