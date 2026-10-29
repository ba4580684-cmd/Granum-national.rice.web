
"use client";

import ResponsiveImage from "@/components/ResponsiveImage";


import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    image: "/images/rice-quality-1.jpg",
    category: "1121 Basmati",
    name: "1121 Kainat Sella",
    description:
      "Extra-long grain, premium aroma and fluffy finish for export markets.",
  },
  {
    image: "/images/rice-quality-2.jpg",
    category: "Pesticide Free",
    name: "1121 Golden Sella",
    description:
      "Golden-toned grains selected for consistent cooking and premium presentation.",
  },
  {
    image: "/images/rice-quality-3.jpg",
    category: "1718 Basmati",
    name: "1718 Raw Basmati",
    description:
      "A versatile raw basmati quality for everyday premium meals and foodservice.",
  },
  {
    image: "/images/rice-quality-4.jpg",
    category: "Pusa Basmati",
    name: "Pusa Sella Cream",
    description:
      "Elegant cream-toned grains suited to modern retail and wholesale programs.",
  },
];

const recipes = [
  ["/images/recipe-1.jpg", "Vegetable Pulao"],
  ["/images/recipe-2.jpg", "Kabuli Pulao"],
  ["/images/recipe-3.jpg", "Chicken Biryani"],
  ["/images/recipe-4.jpg", "Saffron Rice"],
];

export default function HomePage() {

  return (
    <main className="luxury-home">

      {/* ================= HERO ================= */}
      <section className="hero luxury-hero">
        <div className="hero-bg luxury-hero-bg" />

        <div className="luxury-grain-overlay" />

        <div className="container hero-grid">

          <div
            className="hero-copy luxury-hero-copy"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <span
              className="eyebrow light luxury-eyebrow"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              GRANUM GLOBAL • PREMIUM PAKISTANI RICE
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              Every grain.
              <br />   
              <em>Every celebration.</em>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              Premium basmati and non-basmati rice, carefully sourced from
              Pakistan and prepared for international buyers, distributors and
              private-label brands.
            </p>

            <div
              className="hero-actions luxury-actions"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link
                href="/products"
                className="primary-btn luxury-primary"
              >
                Explore Rice Qualities
                <span>↗</span>
              </Link>

              <Link
                href="/contact-us"
                className="secondary-btn luxury-secondary"
              >
                Send Requirement
              </Link>
            </div>

            <div
              className="hero-trust luxury-trust"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <span>✓ Extra long grain</span>
              <span>✓ Rich aroma</span>
              <span>✓ Fluffy & non-stick</span>
            </div>
          </div>

          <div
            className="hero-product luxury-hero-product"
            data-aos="zoom-in"
            data-aos-duration="1600"
            data-aos-delay="200"
          >
            <div className="luxury-image-frame">
              <ResponsiveImage
                src="/images/granum-campaign-borderless.png"
                loading="eager"
                fetchPriority="high"
                alt="Granum Global premium Pakistani rice"
              />
            </div>
{/* 
            <div
              className="luxury-floating-label"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <span>EST.</span>
              <strong>GRANUM</strong>
              <small>GLOBAL</small>
            </div> */}
          </div>
        </div>

        <div className="luxury-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-strip luxury-stats">
        <div className="container stats">

          <div data-aos="fade-up" data-aos-delay="100">
            <b>1121</b>
            <span>Kainat Basmati</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <b>50KG</b>
            <span>Bulk Packing</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <b>GLOBAL</b>
            <span>Export Focus</span>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <b>PRIVATE</b>
            <span>Label Support</span>
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="section luxury-section">
        <div className="container">

          <div
            className="luxury-section-heading"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <SectionTitle
              eyebrow="OUR COLLECTION"
              title="Premium rice qualities for every market"
              text="Choose from popular basmati and specialty rice qualities. Granum Global is built around consistency, presentation and dependable export supply."
            />
          </div>

          <div className="product-grid luxury-product-grid">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="luxury-product-item"
                data-aos="fade-up"
                data-aos-delay={index * 140}
                data-aos-duration="1000"
              >
                <div className="luxury-product-number">
                  0{index + 1}
                </div>

                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div
            className="center luxury-catalogue"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link href="/products" className="outline-btn luxury-outline">
              View Full Product Catalogue
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= WHY GRANUM ================= */}
      <section className="split-section luxury-split">
        <div className="container split-grid">

          <div
            className="split-images luxury-split-images"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <div className="luxury-main-image">
              <ResponsiveImage
                src="/images/rice-gallery-1.jpg"
                alt="Premium rice grains"
              />
            </div>

            <div className="luxury-small-image">
              <ResponsiveImage
                src="/images/rice-gallery-2.jpg"
                alt="Cooked long grain rice"
              />
            </div>

            <div className="image-tag luxury-image-tag">
              FROM FIELD TO GLOBAL TABLE
            </div>
          </div>

          <div
            className="split-copy luxury-split-copy"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <span className="eyebrow">WHY GRANUM GLOBAL</span>

            <h2>
              A rice brand made for
              <em> international business.</em>
            </h2>

            <p>
              We combine Pakistani rice heritage with export-focused
              presentation, flexible packing and buyer-first communication.
              From bulk containers to private-label programs, the experience is
              designed to feel reliable at every step.
            </p>

            <div className="check-list luxury-check-list">

              <div data-aos="fade-up" data-aos-delay="200">
                <b>01</b>
                <span>
                  <strong>Carefully selected grains</strong>
                  <small>
                    Quality-focused sourcing and processing.
                  </small>
                </span>
              </div>

              <div data-aos="fade-up" data-aos-delay="350">
                <b>02</b>
                <span>
                  <strong>Flexible packaging</strong>
                  <small>
                    Retail, wholesale and private-label formats.
                  </small>
                </span>
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <b>03</b>
                <span>
                  <strong>Export-ready service</strong>
                  <small>
                    Clear communication for international buyers.
                  </small>
                </span>
              </div>

            </div>

            <Link
              href="/about-us"
              className="primary-btn luxury-primary"
              data-aos="fade-up"
              data-aos-delay="650"
            >
              Discover Granum
              <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section
        className="quality-banner luxury-quality"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <div className="luxury-quality-overlay" />

        <div className="container quality-banner-inner">

          <div data-aos="fade-right" data-aos-delay="200">
            <span className="eyebrow light">
              GRANUM STANDARD
            </span>

            <h2>
              Premium quality.
              <br />
              Beautiful grains.
              <br />
              Consistent results.
            </h2>
          </div>

          <Link
            href="/qualities"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            See Our Quality Promise
            <span>→</span>
          </Link>

        </div>
      </section>

      {/* ================= RECIPES ================= */}
      <section className="section luxury-section luxury-recipes">
        <div className="container">

          <div data-aos="fade-up">
            <SectionTitle
              eyebrow="FROM OUR KITCHEN"
              title="Rice recipes & inspiration"
              text="Show customers how versatile premium rice can be with a collection of classic dishes."
            />
          </div>

          <div className="recipe-mini-grid luxury-recipe-grid">

            {recipes.map(([image, name], index) => (
              <Link
                className="recipe-card luxury-recipe-card"
                href="/recipes"
                key={name}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="luxury-recipe-image">
                  <ResponsiveImage src={image} alt={name} />

                  <span className="luxury-recipe-arrow">
                    ↗
                  </span>
                </div>

                <div className="luxury-recipe-content">
                  <b>{name}</b>
                  <span>View recipe →</span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section luxury-cta-section">
        <div
          className="container cta-card luxury-cta"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div>
            <span className="eyebrow light">
              READY TO SOURCE?
            </span>

            <h2>
              Tell us your
              <em> rice requirement.</em>
            </h2>

            <p>
              Bulk quantity, packaging, private label or a specific rice
              quality — start the conversation.
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