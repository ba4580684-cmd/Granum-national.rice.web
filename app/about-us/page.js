import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero"><div className="container"><span>Granum Global</span><h1>About Us</h1><p>Harvesting connectivity. Sustaining growth.</p></div></section>
      <section className="section"><div className="container two-panel">
        <div><span className="eyebrow">OUR STORY</span><h2>From Pakistan's rice fields to global tables.</h2><p>Granum Global is positioned as a premium rice packing and export brand focused on serving international importers, wholesalers, retailers, foodservice businesses and private-label partners.</p><p>Our identity combines the warmth of Pakistani agriculture with a clean, modern international presentation. The goal is simple: dependable rice, thoughtful packing and clear communication.</p><Link href="/contact-us" className="primary-btn">Talk to Granum</Link></div>
        <img src="/images/granum-label.png" alt="Granum Global rice packaging" />
      </div></section>
      <section className="cream-section"><div className="container"><SectionTitle eyebrow="OUR VALUES" title="Built around quality and trust" />
        <div className="value-grid"><div><b>01</b><h3>Quality First</h3><p>Product selection and presentation are treated as a core part of the brand.</p></div><div><b>02</b><h3>Global Mindset</h3><p>Designed for international buyers, retail shelves and export conversations.</p></div><div><b>03</b><h3>Flexible Supply</h3><p>Bulk, retail and private-label requirements can be discussed around your market.</p></div></div>
      </div></section>
    </>
  );
}
