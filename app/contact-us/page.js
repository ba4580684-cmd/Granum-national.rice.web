// import LeadForm from "@/components/LeadForm";
// export default function ContactPage() {
//   return <><section className="inner-hero"><div className="container"><span>Granum Global</span><h1>Contact Us</h1><p>Send your rice requirement to our team.</p></div></section><LeadForm /></>;
// }

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });
  }, []);

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="inner-hero luxury-contact-hero">
        <div className="luxury-hero-overlay" />

        <div className="container luxury-inner-hero-content">

          <span
            className="luxury-hero-label"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            GRANUM GLOBAL
          </span>

          <span
            className="luxury-hero-category"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            LET'S CONNECT
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Contact <em>Us</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Tell us what you need.
            <br />
            We'll help you find the right rice.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />

        </div>

        <div className="luxury-scroll-indicator">
          <span>SEND YOUR REQUIREMENT</span>
          <i />
        </div>
      </section>

      {/* ================= CONTACT INTRO ================= */}
      <section className="section luxury-contact-section">
        <div className="container">

          <div
            className="luxury-contact-intro"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <span className="eyebrow">
              START A CONVERSATION
            </span>

            <h2>
              Let's build your
              <em> rice supply together.</em>
            </h2>

            <p>
              Share your required rice quality, quantity, destination and
              packaging preference. Our team can discuss the right option
              for your market.
            </p>
          </div>

          {/* ================= LEAD FORM ================= */}
          <div
            className="luxury-lead-form"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <LeadForm />
          </div>

        </div>
      </section>

      {/* ================= CONTACT STATEMENT ================= */}
      <section
        className="quality-banner luxury-contact-banner"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >

        <div className="luxury-quality-overlay" />

        <div className="container quality-banner-inner">

          <div
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="eyebrow light">
              GRANUM GLOBAL
            </span>

            <h2>
              From Pakistan
              <br />
              to the world.
            </h2>
          </div>

          <div
            className="luxury-contact-badge"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <span>PREMIUM</span>
            <strong>RICE</strong>
            <small>EXPORT & SUPPLY</small>
          </div>
 
        </div>

      </section>

    </main>
  );
}
