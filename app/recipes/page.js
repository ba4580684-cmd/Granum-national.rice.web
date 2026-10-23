
"use client";

import ResponsiveImage from "@/components/ResponsiveImage";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const recipes = [
  [
    "/images/recipe-1.jpg",
    "Vegetable Pulao",
    "A fragrant rice dish for a simple premium meal.",
  ],
  [
    "/images/recipe-2.jpg",
    "Kabuli Pulao",
    "A celebratory rice plate with rich, aromatic character.",
  ],
  [
    "/images/recipe-3.jpg",
    "Chicken Biryani",
    "Long-grain rice paired with bold spices and tender chicken.",
  ],
  [
    "/images/recipe-4.jpg",
    "Saffron Rice",
    "A colorful aromatic rice preparation.",
  ],
  [
    "/images/recipe-5.jpg",
    "Ruz al Bukhari",
    "A rich rice dish for family and festive tables.",
  ],
  [
    "/images/recipe-6.jpg",
    "Murabyan",
    "A vibrant rice inspiration for everyday menus.",
  ],
];

export default function RecipesPage() {
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
    <main className="recipes-page">

      {/* ================= HERO ================= */}
      <section className="inner-hero recipe-hero luxury-recipes-hero">
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
            GRANUM KITCHEN
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Rice <em>Recipes</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Authentic rice inspiration
            <br />
            for every cuisine.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />

        </div>

        <div className="luxury-scroll-indicator">
          <span>EXPLORE RECIPES</span>
          <i />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section luxury-recipe-section">
        <div className="container">

          <div
            className="luxury-recipe-intro"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <span className="eyebrow">
              FROM OUR KITCHEN
            </span>

            <h2>
              Crafted around the
              <em> perfect grain.</em>
            </h2>

            <p>
              Discover inspiring rice dishes from traditional family tables
              to elegant celebrations. Every recipe starts with quality rice.
            </p>
          </div>

          {/* ================= RECIPE GRID ================= */}
          <div className="recipe-grid luxury-recipe-grid-full">

            {recipes.map(([img, title, text], index) => (
              <article
                className="recipe-full luxury-recipe-full"
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="1100"
              >

                {/* Image */}
                <div className="luxury-recipe-full-image">

                  <ResponsiveImage
                    src={img}
                    alt={title}
                  />

                  <div className="luxury-recipe-overlay">
                    <span>0{index + 1}</span>
                    <b>GRANUM KITCHEN</b>
                  </div>

                  <div className="luxury-recipe-circle">
                    ↗
                  </div>

                </div>

                {/* Content */}
                <div className="luxury-recipe-full-content">

                  <span>
                    RICE INSPIRATION
                  </span>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <Link
                    href="/contact-us"
                    className="luxury-recipe-link"
                  >
                    Source this rice
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= QUALITY BANNER ================= */}
      <section
        className="quality-banner luxury-recipe-banner"
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
              THE PERFECT GRAIN
            </span>

            <h2>
              From our fields
              <br />
              to your kitchen.
            </h2>
          </div>

          <Link
            href="/products"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Explore Our Rice
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta-section luxury-recipe-cta">

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
              Bring premium rice
              <em> to your table.</em>
            </h2>

            <p>
              Looking for the right rice quality for your restaurant,
              retail business, wholesale market or private label?
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