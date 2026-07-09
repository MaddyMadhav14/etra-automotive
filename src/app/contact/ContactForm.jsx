"use client";
import { useState } from "react";
import FadeUp from "../components/FadeUp";

export default function ContactForm() {
     const [status, setStatus] = useState("");
     const [loading, setLoading] = useState(false);
  return (
    <section className="contact-form-section">
      <p className="section-kicker">Enquiry form</p>

      <form
  className="contact-form"
onSubmit={async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

const result = await res.json();

if (result.success) {
  setStatus("success");
  form.reset();
} else {
  setStatus("error");
}
setLoading(false);
}}
>

        <FadeUp delay={0.05}>
          <div className="form-row">
           <input  name="firstName" type="text" placeholder="First name" required />
            <input  name="lastName" type="text" placeholder="Last name" required />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <input  name="email" type="email" placeholder="Email address" required />
        </FadeUp>

        <FadeUp delay={0.15}>
          <input  name="role" type="text" placeholder="Role" />
        </FadeUp>

        <FadeUp delay={0.2}>
          <input  name="company" type="text" placeholder="Company" />
        </FadeUp>

        <FadeUp delay={0.25}>
         <input  name="phone" type="tel" placeholder="Contact number" required />
        </FadeUp>

        <FadeUp delay={0.3}>
         <select name="service" defaultValue="" required>
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
          <textarea
          name="message" placeholder="Tell us about your project..."
           rows={5} required/>
        </FadeUp>

        <FadeUp delay={0.4}>
         <button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>
        </FadeUp>
        {status === "success" && (
  <p className="form-success">
    Thank you! Your enquiry has been submitted successfully.
  </p>
)}

{status === "error" && (
  <p className="form-error">
    Something went wrong. Please try again.
  </p>
)}
      </form>
    </section>
  );
}