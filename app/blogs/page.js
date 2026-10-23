
"use client";

import Link from "next/link";

const posts = [
  [
    "How to choose the right basmati quality",
    "From 1121 to 1718 and beyond, understand the key differences buyers consider.",
  ],
  [
    "Why packaging matters in rice exports",
    "Presentation, pack sizes and private labels can shape how customers experience a product.",
  ],
  [
    "Building a premium rice brand",
    "A strong rice brand connects origin, quality, consistency and a clear story.",
  ],
];

export default function BlogsPage() {

  return (
    <main className="blogs-page">

      {/* ================= HERO ================= */}
      <section className="inner-hero luxury-blogs-hero">
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
            KNOWLEDGE & INSIGHTS
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Granum <em>Insights</em>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Ideas for rice buyers, food businesses
            <br />
            and global markets.
          </p>

          <div
            className="luxury-hero-line"
            data-aos="zoom-in"
            data-aos-delay="700"
          />
        </div>

        <div className="luxury-scroll-indicator">
          <span>EXPLORE INSIGHTS</span>
          <i />
        </div>
      </section>

      {/* ================= BLOG COLLECTION ================= */}
      <section className="section luxury-blog-section">
        <div className="container">

          <div
            className="luxury-blog-intro"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <span className="eyebrow">
              GRANUM INSIGHTS
            </span>

            <h2>
              Knowledge that moves
              <em> global business.</em>
            </h2>

            <p>
              Explore practical ideas about rice quality, packaging,
              export markets and building a premium food brand.
            </p>
          </div>

          {/* ================= BLOG GRID ================= */}
          <div className="blog-grid luxury-blog-grid">

            {posts.map(([title, text], index) => (
              <article
                className="blog-card luxury-blog-card"
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 180}
                data-aos-duration="1100"
              >

                {/* Number */}
                <div className="blog-num luxury-blog-number">
                  0{index + 1}
                </div>

                {/* Category */}
                <span className="luxury-blog-category">
                  GRANUM INSIGHT
                </span>

                {/* Decorative line */}
                <div className="luxury-blog-line" />

                {/* Title */}
                <h2>{title}</h2>

                {/* Description */}
                <p>{text}</p>

                {/* Link */}
                <Link
                  href="/contact-us"
                  className="luxury-blog-link"
                >
                  Talk to our team
                  <span>↗</span>
                </Link>

                {/* Corner decoration */}
                <div className="luxury-blog-corner" />
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INSIGHT BANNER ================= */}
      <section
        className="quality-banner luxury-blog-banner"
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
              KNOWLEDGE • QUALITY • TRUST
            </span>

            <h2>
              Better knowledge.
              <br />
              Better rice decisions.
            </h2>
          </div>

          <Link
            href="/products"
            className="secondary-btn luxury-secondary"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Explore Our Products
            <span>→</span>
          </Link>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section luxury-blog-cta">

        <div
          className="container cta-card luxury-cta"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >

          <div>

            <span className="eyebrow light">
              HAVE A QUESTION?
            </span>

            <h2>
              Let's talk about
              <em> your rice requirements.</em>
            </h2>

            <p>
              Whether you're sourcing for wholesale, retail, foodservice
              or private label, our team is ready to discuss your market.
            </p>

          </div>

          <Link
            href="/contact-us"
            className="gold-btn luxury-gold-btn"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Talk to Granum
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}
