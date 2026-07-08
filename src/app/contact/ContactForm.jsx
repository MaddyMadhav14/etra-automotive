"use client";

import FadeUp from "../components/FadeUp";

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <p className="section-kicker">enquiry form</p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted successfully!");
        }}
      >
        <FadeUp delay={0.05}>
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <input type="email" placeholder="Email address" />
        </FadeUp>

        <FadeUp delay={0.15}>
          <input type="text" placeholder="Role" />
        </FadeUp>

        <FadeUp delay={0.2}>
          <input type="text" placeholder="Company" />
        </FadeUp>

        <FadeUp delay={0.25}>
          <input type="tel" placeholder="Contact number" />
        </FadeUp>

        <FadeUp delay={0.3}>
          <select defaultValue="">
            <option value="" disabled>
              What are you building?
            </option>
            <option>CGI</option>
            <option>Configurator</option>
            <option>HMI</option>
            <option>Digital Twin</option>
            <option>Realtime 3D</option>
            <option>Other</option>
          </select>
        </FadeUp>

        <FadeUp delay={0.35}>
          <textarea placeholder="Tell us about your project"></textarea>
        </FadeUp>

        <FadeUp delay={0.4}>
          <button type="submit">send message</button>
        </FadeUp>
      </form>
    </section>
  );
}