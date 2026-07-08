import FadeUp from "../components/FadeUp";

const items = [
  {
    title: "WE LISTEN",
    text: "A short call to understand your product, timeline, goals and the experience you want to create."
  },
  {
    title: "WE SCOPE",
    text: "We define the right engagement, roadmap and deliverables before production begins."
  },
  {
    title: "WE SHOW",
    text: "Our first delivery is something you can experience and interact with, not just a document."
  }
];

export default function Expectations() {
  return (
    <section className="expect-section">
      <span className="section-kicker">what to expect</span>

      <div className="expect-grid">
        {items.map((item, index) => (
          <FadeUp key={index} delay={index * 0.15}>
            <div className="expect-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}