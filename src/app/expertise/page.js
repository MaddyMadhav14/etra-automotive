import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "./Hero";
import Intro from "./Intro";
import "../styles/expertise.css";
import Services from "./Services";
import Platforms from "./Platforms";
import Industry from "./Industry";
import Metrics from "./Metrics";
import CTA from "./CTA";

export default function ExpertisePage() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <main className="expertise-page">
        <Hero />
        <Intro />
        <Services />
        <Platforms />
        <Industry />
        <Metrics />
        <CTA />
      </main>

      <Footer />
    </>
  );
}