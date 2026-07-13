const platforms = [
  "Unreal Engine",
  "Rive",
  "Figma",
  "3D Configurators",
  "HMI Systems",
  "Digital Twin Pipeline",
];

export default function Platforms() {
  return (
    <section className="expertise-platforms">
      <p className="section-kicker">technologies & platforms</p>

      <h2>one workflow across design, realtime and production.</h2>

      <div className="platform-grid">
        {platforms.map((item) => (
          <div className="platform-pill" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}