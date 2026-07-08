const services = [
  {
    no: "01",
    title: "hmi & digital cockpit",
    text: "Instrument clusters, center displays and in-cabin interfaces designed for clarity, usability and emotion.",
  },
  {
    no: "02",
    title: "real-time 3d visualization",
    text: "Interactive Unreal Engine experiences for design review, retail, marketing and production validation.",
  },
  {
    no: "03",
    title: "vehicle configurators",
    text: "Web, showroom and in-vehicle configurators with colour, material, lighting and environment interaction.",
  },
  {
    no: "04",
    title: "cgi & launch visuals",
    text: "Cinematic automotive visuals, product films and digital-first marketing assets for vehicle launches.",
  },
  {
    no: "05",
    title: "digital twin systems",
    text: "Connected digital vehicle assets that support design, engineering, visualization and customer experience.",
  },
  {
    no: "06",
    title: "interactive prototypes",
    text: "Clickable, animated and production-focused prototypes for testing future mobility experiences early.",
  },
];

export default function Services() {
  return (
    <section className="expertise-services">
      <p className="section-kicker">service capabilities</p>
      <h2>built for the complete automotive experience.</h2>

      <div className="services-grid">
        {services.map((item) => (
          <article className="service-card" key={item.no}>
            <span>{item.no}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}