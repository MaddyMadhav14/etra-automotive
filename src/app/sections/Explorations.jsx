import FadeUp from "../components/FadeUp";

export default function Explorations() {
  const projects = [
    {
      title: "Mobility Interface",
      image: "/images/explore-1.webp",
    },
    {
      title: "Digital Vehicle Experience",
      image: "/images/explore-2.webp",
    },
    {
      title: "Automotive Visualization",
      image: "/images/explore-3.webp",
    },
  ];

  return (
    <section className="explorations-section">
      <FadeUp>
        <div className="explorations-top">
          <span>EXPLORATIONS</span>
          <h2>THE LATEST</h2>
        </div>
      </FadeUp>

      <div className="exploration-grid">
        {projects.map((project, index) => (
          <FadeUp key={project.title} delay={index * 0.15}>
            <article className="exploration-card">
              <img src={project.image} alt={project.title} />

              <div className="exploration-card-content">
                <h3>{project.title}</h3>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.5}>
        <div className="exploration-btn">
          <button>View Case Studies</button>
        </div>
      </FadeUp>
    </section>
  );
}