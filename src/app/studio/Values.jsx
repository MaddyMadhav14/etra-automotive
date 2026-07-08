const values = [
  {
    title: "precision first",
    text: "Every pixel, reflection and interaction is shaped with production-level attention.",
  },
  {
    title: "designed for motion",
    text: "We think beyond static screens and create experiences that respond, move and evolve.",
  },
  {
    title: "future-ready pipeline",
    text: "Our workflow connects design, CGI, realtime engines and HMI systems into one loop.",
  },
];

export default function Values() {
  return (
    <section className="studio-values">
      <div className="values-head">
        <p className="section-kicker">studio philosophy</p>
        <h2>principles that guide every experience.</h2>
      </div>

      <div className="values-grid">
        {values.map((item) => (
          <article className="value-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}