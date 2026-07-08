export default function Hero() {
  return (
    <section className="studio-hero">
      <div className="studio-hero-bg">
        <video
          className="studio-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/studio-main.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="studio-overlay"></div>

      <div className="studio-content">
        <span className="studio-eyebrow">
          etra automotive
        </span>

        <h1>studio</h1>

        <h2>inside the studio</h2>

        <p>
          We bring together automotive design, CGI,
          HMI, realtime visualization and engineering
          into one production pipeline.
        </p>
      </div>
    </section>
  );
}