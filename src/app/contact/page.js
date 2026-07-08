import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "./Hero";
import Intro from "./Intro";
import Expectations from "./Expectations";
import "../styles/contact.css";
import ContactForm from "./ContactForm";
import FadeUp from "../components/FadeUp";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ScrollProgress />

      <main className="contact-page">
       <Hero />

<FadeUp>
  <Intro />
</FadeUp>

<FadeUp delay={0.1}>
  <Expectations />
</FadeUp>

<FadeUp delay={0.2}>
  <ContactForm />
</FadeUp>


      </main>

      <Footer />
    </>
  );
}