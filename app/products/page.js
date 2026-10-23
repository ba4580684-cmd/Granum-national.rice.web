
"use client";

import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const products = [
  ["1121 Kainat Sella", "1121 Basmati Rice", "/images/rice-quality-1.jpg"],
  ["1121 Golden Sella", "Golden Sella", "/images/rice-quality-2.jpg"],
  ["1718 Raw Basmati", "1718 Basmati Rice", "/images/rice-quality-3.jpg"],
  ["Pusa Sella Cream", "Indian Basmati Style", "/images/rice-quality-4.jpg"],
  ["1401 Sella Cream", "Basmati Quality", "/images/rice-quality-1.jpg"],
  ["1509 Sella", "Basmati Quality", "/images/rice-quality-2.jpg"],
  ["Steam Rice", "Specialty Rice", "/images/rice-quality-3.jpg"],
  ["Traditional Sella", "Traditional Basmati", "/images/rice-quality-4.jpg"],
];

export default function ProductsPage() {

  return (
    <main className="products-page">

      {/* ================= INNER HERO ================= */}
      <section className="inner-hero luxury-products-hero">
        <div className="luxury-hero-overlay" />

        <div className="container luxury-inner-hero-content">

          <span
            data-aos="fade-down"
            data-aos-duration="900"
            className="luxury-hero-label"
          >
            GRANUM GLOBAL
          </span>

          <span
            data-aos="fade-up"
            data-aos-delay="150"
            className="luxury-hero-category"
          >
            PREMIUM RICE COLLECTION
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Rice <em>Products</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Premium basmati and specialty rice qualities
            <br />
            carefully prepared for international markets.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />
        </div>

        <div className="luxury-scroll-indicator">
          <span>EXPLORE COLLECTION</span>
          <i />
        </div>
      </section>

      {/* ================= PRODUCT COLLECTION ================= */}
      <section className="section luxury-product-section">
        <div className="container">

          <div
            className="luxury-products-intro"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <SectionTitle
              eyebrow="PRODUCT COLLECTION"
              title="Choose the right quality for your market"
              text="A polished catalogue structure for importers, distributors, wholesalers, retailers and foodservice buyers."
            />
          </div>

          {/* PRODUCT GRID */}
          <div className="product-grid large luxury-products-grid">

            {products.map(([name, category, image], index) => (
              <div
                key={name}
                className="luxury-product-wrapper"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >

                {/* Product Number */}
                <span className="luxury-product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Product */}
                <ProductCard
                  name={name}
                  category={category}
                  image={image}
                  description="Selected for consistent grain appearance, cooking performance and export presentation."
                />

              </div>
            ))}

          </div>

          {/* ================= CATALOGUE NOTE ================= */}
          <div
            className="catalogue-note luxury-catalogue-note"
            data-aos="fade-up"
            data-aos-duration="1100"
          >

            <div className="catalogue-note-content">

              <span
                className="eyebrow"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                CUSTOM REQUIREMENTS
              </span>

              <b
                data-aos="fade-right"
                data-aos-delay="250"
              >
                Need a custom quality?
              </b>

              <span
                data-aos="fade-right"
                data-aos-delay="350"
              >
                Tell us your destination, quantity and target market.
              </span>

            </div>

            <Link
              href="/contact-us"
              className="primary-btn luxury-primary"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Request Quote
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

      {/* ================= PREMIUM QUALITY BANNER ================= */}
      <section
        className="quality-banner luxury-products-quality"
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
              Every quality.
              <br />
              Carefully selected.
            </h2>

          </div>

          <Link
            href="/qualities"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Explore Our Quality
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta-section luxury-products-cta">

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
              Let's find the right
              <em> rice for your market.</em>
            </h2>

            <p>
              Tell us your required quality, quantity, destination and
              packaging preference.
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