const highlights = [
  {
    image: "/images/highlights/highlight-1.webp",
    title: "real-time, end to end",
    text: "A single Unreal Engine pipeline from cinematic concept renders all the way to late production interface validation.",
  },
  {
    image: "/images/highlights/highlight-2.webp",
    title: "one twin, every surface",
    text: "A single digital twin powers the launch film, online configurator, showroom kiosk, and in-car display.",
  },
  {
    image: "/images/highlights/highlight-3.webp",
    title: "vernacular by design",
    text: "We treat multilingual experiences as a design requirement, not an afterthought.",
  },
  {
    image: "/images/highlights/highlight-4.webp",
    title: "experience before metal",
    text: "Stakeholders walk through a vehicle long before clay models exist, compressing decision loops.",
  },
];

export default function Highlights() {
  return (
    <section className="innovation-section">
      <p className="section-kicker">innovation highlights</p>
      <h2>built today for tomorrow’s roads.</h2>

      <div className="innovation-grid">
        {highlights.map((item) => (
          <article className="innovation-card" key={item.title}>
            <div className="innovation-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="innovation-body">
              <span></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}