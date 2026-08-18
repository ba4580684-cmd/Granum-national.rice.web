// import Link from "next/link";
// import SectionTitle from "@/components/SectionTitle";

// export default function AboutPage() {
//   return (
//     <>
//       <section className="inner-hero"><div className="container"><span>Granum Global</span><h1>About Us</h1><p>Harvesting connectivity. Sustaining growth.</p></div></section>
//       <section className="section"><div className="container two-panel">
//         <div><span className="eyebrow">OUR STORY</span><h2>From Pakistan's rice fields to global tables.</h2><p>Granum Global is positioned as a premium rice packing and export brand focused on serving international importers, wholesalers, retailers, foodservice businesses and private-label partners.</p><p>Our identity combines the warmth of Pakistani agriculture with a clean, modern international presentation. The goal is simple: dependable rice, thoughtful packing and clear communication.</p><Link href="/contact-us" className="primary-btn">Talk to Granum</Link></div>
//         <img src="/images/granum-label.png" alt="Granum Global rice packaging" />
//       </div></section>
//       <section className="cream-section"><div className="container"><SectionTitle eyebrow="OUR VALUES" title="Built around quality and trust" />
//         <div className="value-grid"><div><b>01</b><h3>Quality First</h3><p>Product selection and presentation are treated as a core part of the brand.</p></div><div><b>02</b><h3>Global Mindset</h3><p>Designed for international buyers, retail shelves and export conversations.</p></div><div><b>03</b><h3>Flexible Supply</h3><p>Bulk, retail and private-label requirements can be discussed around your market.</p></div></div>
//       </div></section>
//     </>
//   );
// }


"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
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
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="inner-hero luxury-about-hero">
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
            OUR STORY
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            About <em>Us</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Harvesting connectivity.
            <br />
            Sustaining growth.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />
        </div>

        <div className="luxury-scroll-indicator">
          <span>DISCOVER GRANUM</span>
          <i />
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="section luxury-about-story">
        <div className="container two-panel luxury-two-panel">

          <div
            className="luxury-about-copy"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <span className="eyebrow">
              OUR STORY
            </span>

            <h2>
              From Pakistan's rice fields
              <em> to global tables.</em>
            </h2>

            <p>
              Granum Global is positioned as a premium rice packing and export
              brand focused on serving international importers, wholesalers,
              retailers, foodservice businesses and private-label partners.
            </p>

            <p>
              Our identity combines the warmth of Pakistani agriculture with a
              clean, modern international presentation. The goal is simple:
              dependable rice, thoughtful packing and clear communication.
            </p>

            <div
              className="luxury-about-divider"
              data-aos="zoom-in"
              data-aos-delay="300"
            />

            <Link
              href="/contact-us"
              className="primary-btn luxury-primary"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Talk to Granum
              <span>↗</span>
            </Link>
          </div>

          <div
            className="luxury-about-image"
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-delay="150"
          >
            <div className="luxury-image-frame">
              <img
                src="/images/granum-label.png"
                alt="Granum Global rice packaging"
              />
            </div>

            <div
              className="luxury-image-caption"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <span>GRANUM</span>
              <strong>GLOBAL</strong>
              <small>PREMIUM RICE EXPORT</small>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="cream-section luxury-values-section">
        <div className="container">

          <div
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <SectionTitle
              eyebrow="OUR VALUES"
              title="Built around quality and trust"
            />
          </div>

          <div className="value-grid luxury-value-grid">

            <div
              className="luxury-value-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="luxury-value-number">01</span>

              <div className="luxury-value-line" />

              <h3>Quality First</h3>

              <p>
                Product selection and presentation are treated as a core part
                of the brand.
              </p>

              <span className="luxury-value-arrow">↗</span>
            </div>

            <div
              className="luxury-value-card"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span className="luxury-value-number">02</span>

              <div className="luxury-value-line" />

              <h3>Global Mindset</h3>

              <p>
                Designed for international buyers, retail shelves and export
                conversations.
              </p>

              <span className="luxury-value-arrow">↗</span>
            </div>

            <div
              className="luxury-value-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="luxury-value-number">03</span>

              <div className="luxury-value-line" />

              <h3>Flexible Supply</h3>

              <p>
                Bulk, retail and private-label requirements can be discussed
                around your market.
              </p>

              <span className="luxury-value-arrow">↗</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BRAND STATEMENT ================= */}
      <section className="quality-banner luxury-about-banner">
        <div className="luxury-quality-overlay" />

        <div className="container quality-banner-inner">

          <div
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <span className="eyebrow light">
              THE GRANUM PROMISE
            </span>

            <h2>
              Pakistani heritage.
              <br />
              International standards.
            </h2>
          </div>

          <Link
            href="/products"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Explore Our Rice
            <span>→</span>
          </Link>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta-section luxury-about-cta">
        <div
          className="container cta-card luxury-cta"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >

          <div>
            <span className="eyebrow light">
              LET'S CONNECT
            </span>

            <h2>
              Build your next rice
              <em> partnership with us.</em>
            </h2>

            <p>
              Tell us about your market, quantity, packaging requirements or
              private-label program.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="gold-btn luxury-gold-btn"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Start a Conversation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}