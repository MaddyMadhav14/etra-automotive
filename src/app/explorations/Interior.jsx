const interiorItems = [
  {
    image: "/images/interior/interior-1.webp",
    title: "hmi cockpit systems",
    text: "Digital clusters, center displays and control surfaces designed as one connected in-cabin experience.",
  },
  {
    image: "/images/interior/interior-2.webp",
    title: "ambient interaction",
    text: "Lighting, motion and interface feedback that respond naturally to driver intent and vehicle state.",
  },
];

export default function Interior() {
  return (
    <section className="interior-section">
      <div className="interior-head">
        <p className="section-kicker">interior experiences</p>
        <h2>building the intelligence inside the cabin.</h2>
      </div>

      <div className="interior-layout">
        <div className="interior-big">
  <video
    className="interior-main-video"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src="/videos/Interior-video.mp4" type="video/mp4" />
  </video>
</div>

        <div className="interior-content">
          <span>inside the experience</span>
          <h3>from screen to sensation.</h3>
          <p>
            We craft in-cabin digital systems where interaction, information,
            motion and atmosphere work together — turning the vehicle interior
            into a responsive living environment.
          </p>
        </div>
      </div>

      <div className="interior-grid">
        {interiorItems.map((item) => (
          <article className="interior-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}