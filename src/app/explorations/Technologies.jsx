const technologies = [
  {
    no: "01",
    title: "HMI Design",
    text: "Digital cockpit experiences designed for clarity, usability and emotion.",
  },
  {
    no: "02",
    title: "Realtime 3D",
    text: "Interactive visualization powered by Unreal Engine for production-ready experiences.",
  },
  {
    no: "03",
    title: "Digital Twin",
    text: "One digital asset powering engineering, retail, marketing and validation.",
  },
  {
    no: "04",
    title: "Configurator",
    text: "Real-time personalization experiences across web, showroom and in-vehicle systems.",
  },
];

export default function Technologies() {
  return (
    <section className="technology-section">

      <p className="section-kicker">
        emerging technologies
      </p>

      <h2>
        engineering tomorrow&apos;s digital mobility.
      </h2>

      <div className="technology-grid">

        {technologies.map((item)=>(
          <div className="technology-card" key={item.no}>

            <span>{item.no}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  )
}