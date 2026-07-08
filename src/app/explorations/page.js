import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import "../styles/explorations.css";
import Highlights from "./Highlights";
import Exterior from "./Exterior";
import Interior from "./Interior";
import Technologies from "./Technologies";
import CTA from "./CTA";
import ScrollProgress from "../components/ScrollProgress";

export default function ExplorationsPage() {
  return (
    <>
      <Header />

      <main className="exploration-page">
      
        <Hero />
          <ScrollProgress />
        <Intro />
        <Highlights />
        <Exterior />
        <Interior />
        <Technologies />
        <CTA />
      </main>

      <Footer />
    </>
  );
}