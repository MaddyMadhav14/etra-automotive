import FadeUp from "../components/FadeUp";

export default function Intro() {
  return (
    <section className="intro-section">
      <FadeUp>
        <div className="intro-title">
          <h2>
            Designing Experiences for Automotive, Future Mobility and Beyond.
          </h2>
        </div>
      </FadeUp>

      <div className="intro-content">
        <FadeUp delay={0.15}>
          <div className="intro-image">
            <img src="/images/Red.png" alt="Automotive design showcase" />
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="intro-text">
            <h3>
              Bringing Together The Best Of Strategy, Design, Technology And
              Engineering
            </h3>

            <p>
              From the world s first digital HMI to next-generation mobility
              platforms, we build premium automotive experiences that inspire.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}