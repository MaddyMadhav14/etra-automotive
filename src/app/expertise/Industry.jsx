const industries = [
  {
    title: "Passenger Vehicles",
    text: "Digital cockpit experiences, HMI systems, CGI visualization and premium vehicle configurators.",
  },
  {
    title: "Commercial Mobility",
    text: "Fleet visualization, operational dashboards and connected mobility interfaces.",
  },
  {
    title: "Future Mobility",
    text: "Electric vehicles, autonomous concepts, digital twins and immersive prototype experiences.",
  },
];

export default function Industry() {
  return (
    <section className="expertise-industry">
      <p className="section-kicker">industry experience</p>

      <h2>solutions built across the evolving mobility ecosystem.</h2>

      <div className="industry-grid">
        {industries.map((item) => (
          <article className="industry-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}