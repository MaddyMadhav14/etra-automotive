export default function Showcase() {
  return (
    <section className="studio-showcase">

      <div className="showcase-left">
        <video
          className="showcase-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/studio-case.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="showcase-right">

        <p className="section-kicker">
          featured capability
        </p>

        <h2>
          transforming automotive ideas into immersive digital experiences.
        </h2>

        <p>
          From HMI interfaces to realtime configurators and cinematic CGI,
          every experience is designed to help brands visualize, validate and
          communicate before production begins.
        </p>

      </div>

    </section>
  );
}