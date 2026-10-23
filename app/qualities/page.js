

"use client";

import ResponsiveImage from "@/components/ResponsiveImage";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const qualities = [
  [
    "Extra Long Grain",
    "Long, elegant grains with premium shelf and plate presentation.",
  ],
  [
    "Rich Aroma",
    "Aromatic rice suited to biryani, pulao and premium everyday meals.",
  ],
  [
    "Fluffy & Non-Stick",
    "Designed for a separated, attractive cooked-grain finish.",
  ],
  [
    "Consistent Selection",
    "A quality-focused catalogue makes repeat buying easier.",
  ],
  [
    "Flexible Packing",
    "Retail, wholesale, bulk and private-label conversations.",
  ],
  [
    "Export Presentation",
    "Branding and packaging built to look professional in international markets.",
  ],
];

export default function QualitiesPage() {
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
    <main className="qualities-page">

      {/* ================= HERO ================= */}
      <section className="inner-hero luxury-qualities-hero">
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
            GRANUM STANDARD
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Rice <em>Qualities</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            What makes the Granum
            <br />
            experience premium.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />

        </div>

        <div className="luxury-scroll-indicator">
          <span>DISCOVER OUR STANDARD</span>
          <i />
        </div>
      </section>

      {/* ================= QUALITY INTRO ================= */}
      <section className="section luxury-quality-section">
        <div className="container">

          <div className="quality-intro luxury-quality-intro">

            <div
              className="luxury-quality-image"
              data-aos="fade-right"
              data-aos-duration="1300"
             >
            <div className="luxury-image-frame">
                <ResponsiveImage
                 src="/images/granum-campaign.png"
                 alt="Granum premium rice"
               />
              </div>
{/*
              <div
                className="luxury-quality-badge"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span>GRANUM</span>
                <strong>STANDARD</strong>
                <small>PREMIUM RICE</small>
              </div> */}
            </div>

            <div
              className="luxury-quality-copy"
              data-aos="fade-left"
              data-aos-duration="1300"
              data-aos-delay="150"
            >
              <span className="eyebrow">
                QUALITY PROMISE
              </span>

              <h2>
                Every grain is selected
                <em> with the market in mind.</em>
              </h2>

              <p>
                Granum Global presents rice as a complete export product:
                grain quality, cooking character, packaging, communication
                and consistency all matter.
              </p>

              <div
                className="luxury-quality-divider"
                data-aos="zoom-in"
                data-aos-delay="350"
              />

              <Link
                href="/contact-us"
                className="primary-btn luxury-primary"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                Discuss Your Requirement
                <span>↗</span>
              </Link>
            </div>

          </div>

          {/* ================= QUALITY GRID ================= */}
          <div className="quality-grid luxury-quality-grid">

            {qualities.map(([title, text], index) => (
              <article
                key={title}
                className="luxury-quality-card"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="1000"
              >

                <div className="luxury-quality-card-top">
                  <span>
                    0{index + 1}
                  </span>

                  <i>↗</i>
                </div>

                <div className="luxury-quality-card-line" />

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PREMIUM STANDARD ================= */}
      <section
        className="quality-banner luxury-standard-banner"
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
              GRANUM STANDARD
            </span>

            <h2>
              Quality you can see.
              <br />
              Consistency you can trust.
            </h2>
          </div>

          <Link
            href="/products"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            View Rice Collection
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta-section luxury-quality-cta">

        <div
          className="container cta-card luxury-cta"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >

          <div>

            <span className="eyebrow light">
              READY TO SOURCE?
            </span>

            <h2>
              Find the right quality
              <em> for your market.</em>
            </h2>

            <p>
              Tell us your destination, quantity, packaging requirements
              or preferred rice quality.
            </p>

          </div>

          <Link
            href="/contact-us"
            className="gold-btn luxury-gold-btn"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Request a Quote
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}