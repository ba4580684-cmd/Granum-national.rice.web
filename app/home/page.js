import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const products = [
  { image: "/images/rice-quality-1.jpg", category: "1121 Basmati", name: "1121 Kainat Sella", description: "Extra-long grain, premium aroma and fluffy finish for export markets." },
  { image: "/images/rice-quality-2.jpg", category: "Pesticide Free", name: "1121 Golden Sella", description: "Golden-toned grains selected for consistent cooking and premium presentation." },
  { image: "/images/rice-quality-3.jpg", category: "1718 Basmati", name: "1718 Raw Basmati", description: "A versatile raw basmati quality for everyday premium meals and foodservice." },
  { image: "/images/rice-quality-4.jpg", category: "Pusa Basmati", name: "Pusa Sella Cream", description: "Elegant cream-toned grains suited to modern retail and wholesale programs." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">GRANUM GLOBAL • PREMIUM PAKISTANI RICE</span>
            <h1>Every grain.<br /><em>Every celebration.</em></h1>
            <p>
              Premium basmati and non-basmati rice, carefully sourced from Pakistan
              and prepared for international buyers, distributors and private-label brands.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="primary-btn">Explore Rice Qualities</Link>
              <Link href="/contact-us" className="secondary-btn">Send Requirement</Link>
            </div>
            <div className="hero-trust">
              <span>✓ Extra long grain</span><span>✓ Rich aroma</span><span>✓ Fluffy & non-stick</span>
            </div>
          </div>
          <div className="hero-product">
            <img src="/images/granum-campaign.png" alt="Granum Global premium Pakistani rice" />
            <div className="floating-quality">PREMIUM<br /><b>QUALITY</b></div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats">
          <div><b>1121</b><span>Kainat Basmati</span></div>
          <div><b>50KG</b><span>Bulk Packing</span></div>
          <div><b>GLOBAL</b><span>Export Focus</span></div>
          <div><b>PRIVATE</b><span>Label Support</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="OUR COLLECTION" title="Premium rice qualities for every market" text="Choose from popular basmati and specialty rice qualities. Granum Global is built around consistency, presentation and dependable export supply." />
          <div className="product-grid">
            {products.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
          <div className="center"><Link href="/products" className="outline-btn">View Full Product Catalogue</Link></div>
        </div>
      </section>

      <section className="split-section">
        <div className="container split-grid">
          <div className="split-images">
            <img src="/images/rice-gallery-1.jpg" alt="Premium rice grains" />
            <img src="/images/rice-gallery-2.jpg" alt="Cooked long grain rice" />
            <div className="image-tag">FROM FIELD TO GLOBAL TABLE</div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">WHY GRANUM GLOBAL</span>
            <h2>A rice brand made for international business.</h2>
            <p>
              We combine Pakistani rice heritage with export-focused presentation,
              flexible packing and buyer-first communication. From bulk containers
              to private-label programs, the experience is designed to feel reliable
              at every step.
            </p>
            <div className="check-list">
              <div><b>01</b><span><strong>Carefully selected grains</strong><small>Quality-focused sourcing and processing.</small></span></div>
              <div><b>02</b><span><strong>Flexible packaging</strong><small>Retail, wholesale and private-label formats.</small></span></div>
              <div><b>03</b><span><strong>Export-ready service</strong><small>Clear communication for international buyers.</small></span></div>
            </div>
            <Link href="/about-us" className="primary-btn">Discover Granum</Link>
          </div>
        </div>
      </section>

      <section className="quality-banner">
        <div className="container quality-banner-inner">
          <div><span className="eyebrow light">GRANUM STANDARD</span><h2>Premium quality. Beautiful grains. Consistent results.</h2></div>
          <Link href="/qualities" className="secondary-btn">See Our Quality Promise</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="FROM OUR KITCHEN" title="Rice recipes & inspiration" text="Show customers how versatile premium rice can be with a collection of classic dishes." />
          <div className="recipe-mini-grid">
            {[
              ["/images/recipe-1.jpg", "Vegetable Pulao"],
              ["/images/recipe-2.jpg", "Kabuli Pulao"],
              ["/images/recipe-3.jpg", "Chicken Biryani"],
              ["/images/recipe-4.jpg", "Saffron Rice"],
            ].map(([image, name]) => (
              <Link className="recipe-card" href="/recipes" key={name}>
                <img src={image} alt={name} /><div><b>{name}</b><span>View recipe →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div><span className="eyebrow light">READY TO SOURCE?</span><h2>Tell us your rice requirement.</h2><p>Bulk quantity, packaging, private label or a specific rice quality — start the conversation.</p></div>
          <Link href="/contact-us" className="gold-btn">Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}
