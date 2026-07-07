import FadeUp from "../components/FadeUp";

export default function Studio() {
  const services = [
    ["01", "Concept Cars", "Transforming ideas into premium automotive concepts with future-ready design thinking."],
    ["02", "Rapid Prototyping", "Accelerating innovation through interactive prototypes and immersive visualization."],
    ["03", "Realtime 3D", "Building Unreal Engine experiences that redefine automotive storytelling."],
    ["04", "Platform Expertise", "Powerful automotive interfaces engineered for scalability and performance."],
    ["05", "Design Systems", "Creating unified design languages that scale across every digital touchpoint."],
    ["06", "Production HMI", "Delivering production-ready HMI experiences with pixel-perfect execution."],
  ];

  return (
    <section className="studio-section">
      <FadeUp>
        <div className="studio-heading">
          <span>STUDIO</span>

          <h2>
            Setting New
            <br />
            Benchmarks
          </h2>

          <p>
            We create immersive automotive experiences through cutting-edge HMI,
            CGI and digital engineering.
          </p>
        </div>
      </FadeUp>

      <div className="studio-grid">
        {services.map((service, index) => (
          <FadeUp key={service[0]} delay={index * 0.1}>
            <div className="studio-card">
              <span>{service[0]}</span>
              <h3>{service[1]}</h3>
              <p>{service[2]}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}