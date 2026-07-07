import FadeUp from "../components/FadeUp";

export default function Expertise() {
  const items = [
    {
      number: "01",
      title: "Human Machine Interface",
      desc: "Designing cockpit UI, infotainment systems, clusters and production-ready HMI experiences.",
    },
    {
      number: "02",
      title: "CGI Visualization",
      desc: "Creating high-quality automotive visuals for concept presentation, launch campaigns and product storytelling.",
    },
    {
      number: "03",
      title: "Digital Twin",
      desc: "Building connected digital replicas that help visualize, test and improve future mobility experiences.",
    },
    {
      number: "04",
      title: "Configurator",
      desc: "Interactive vehicle customization experiences with colors, trims, materials and real-time visualization.",
    },
    {
      number: "05",
      title: "Realtime 3D",
      desc: "Immersive 3D experiences powered by real-time rendering for automotive platforms and presentations.",
    },
    {
      number: "06",
      title: "UI / UX Design",
      desc: "Premium user experiences crafted for web, mobile, cockpit displays and digital mobility products.",
    },
  ];

  return (
    <section className="expertise-section">
      <FadeUp>
        <div className="expertise-head">
          <span>EXPERTISE</span>

          <h2>
            What We
            <br />
            Engineer
          </h2>

          <p>
            From digital cockpit experiences to real-time visualization, we
            create future-ready automotive interfaces and immersive mobility
            systems.
          </p>
        </div>
      </FadeUp>

      <div className="expertise-list">
        {items.map((item, index) => (
          <FadeUp key={item.number} delay={index * 0.1}>
            <article className="expertise-row">
              <span className="expertise-number">
                {item.number}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <span className="expertise-arrow">→</span>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}