const process = [
  {
    no: "01",
    title: "Discover",
    text: "Understanding the brand, vehicle vision and customer journey.",
  },
  {
    no: "02",
    title: "Design",
    text: "Creating HMI, UX flows, visual systems and interaction concepts.",
  },
  {
    no: "03",
    title: "Visualize",
    text: "Building CGI, realtime renders and digital twins with precision.",
  },
  {
    no: "04",
    title: "Develop",
    text: "Transforming concepts into production-ready digital experiences.",
  },
];

export default function Process() {
  return (
    <section className="studio-process">
      <p className="section-kicker">our process</p>

      <h2>from concept to production.</h2>

      <div className="process-grid">
        {process.map((item) => (
          <article className="process-card" key={item.no}>
            <span>{item.no}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}