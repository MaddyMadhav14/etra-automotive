import Header from "./components/Header";
import FadeUp from "./components/FadeUp";
import Intro from "./sections/Intro";
import Explorations from "./sections/Explorations";
import Studio from "./sections/Studio";
import Expertise from "./sections/Expertise";
import ContactCTA from "./sections/ContactCTA";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-page">
        <section className="home-hero">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/videos/herov.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <FadeUp delay={0.1}>
              <span className="hero-tag">AUTOMOTIVE EXPERIENCE DESIGN</span>
            </FadeUp>

            <FadeUp delay={0.25}>
              <h1>
                Prototyping Every
                <br />
                Dimension of Transit
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="hero-description">
                Designing next-generation HMI, CGI, digital experiences,
                configurators and mobility platforms for the future.
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="hero-buttons">
                <button className="primary-btn">Explore Studio</button>
                <button className="secondary-btn">View Projects</button>
              </div>
            </FadeUp>
            <FadeUp delay={0.7}>
  <div className="scroll-indicator">
    <span>SCROLL</span>

    <div className="scroll-mouse">
      <div className="scroll-dot"></div>
    </div>
  </div>
</FadeUp>
          </div>
        </section>
        <ScrollProgress />
        <Intro />
        <Explorations />
        <Studio />
        <Expertise />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}