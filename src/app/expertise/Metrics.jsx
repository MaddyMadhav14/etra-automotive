const metrics = [
  {
    value: "01",
    title: "single pipeline",
    text: "Strategy, design, visualization and development connected under one workflow.",
  },
  {
    value: "02",
    title: "faster validation",
    text: "Interactive prototypes help teams review, test and decide before production cost increases.",
  },
  {
    value: "03",
    title: "premium execution",
    text: "Luxury-grade visual detail, motion and usability across every automotive surface.",
  },
  {
    value: "04",
    title: "future ready",
    text: "Built for EVs, digital cockpits, connected platforms and immersive retail experiences.",
  },
];

export default function Metrics() {
  return (
    <section className="expertise-metrics">
      <p className="section-kicker">why etra</p>
      <h2>built for speed, clarity and production confidence.</h2>

      <div className="metrics-grid">
        {metrics.map((item) => (
          <article className="metric-card" key={item.value}>
            <span>{item.value}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}