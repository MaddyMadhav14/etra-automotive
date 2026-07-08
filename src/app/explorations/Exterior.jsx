const exteriorItems = [
  {
    image: "/images/exterior/highlight-1.webp",
    title: "forms in motion",
    text: "Exterior studies built to capture proportion, reflection, stance and emotional presence before production begins.",
  },
  {
    image: "/images/exterior/highlight-5.webp",
    title: "lighting language",
    text: "Headlamps, signatures, indicators and night-time behaviours designed as part of the vehicle personality.",
  },
  {
    image: "/images/exterior/highlight-2.webp",
    title: "surface exploration",
    text: "Paint, material, wheel and trim variations visualised with real-time clarity for faster design decisions.",
  },
];

export default function Exterior() {
  return (
    <section className="exterior-section">
      <div className="exterior-head">
        <p className="section-kicker">exterior experiences</p>
        <h2>designing the first impression of motion.</h2>
      </div>

     <div className="exterior-feature">
  <video
    className="exterior-feature-video"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src="/videos/cinematic_car.mp4" type="video/mp4" />
  </video>

  <div className="exterior-feature-content">
    <span>01</span>
    <h3>cinematic exterior visualization</h3>
    <p>
      We shape exterior experiences with cinematic lighting, precise material
      behaviour and real-time interaction — helping brands see the vehicle
      before the world does.
    </p>
  </div>
</div>

      <div className="exterior-grid">
        {exteriorItems.map((item, index) => (
          <article className="exterior-card" key={item.title}>
            <div className="exterior-card-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="exterior-card-content">
              <span>0{index + 2}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}