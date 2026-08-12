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
    <>
      <section className="inner-hero"><div className="container"><span>Granum Global Catalogue</span><h1>Rice Products</h1><p>Premium basmati and specialty rice qualities for international markets.</p></div></section>
      <section className="section"><div className="container">
        <SectionTitle eyebrow="PRODUCT COLLECTION" title="Choose the right quality for your market" text="A polished catalogue structure for importers, distributors, wholesalers, retailers and foodservice buyers." />
        <div className="product-grid large">{products.map(([name, category, image]) => <ProductCard key={name} name={name} category={category} image={image} description="Selected for consistent grain appearance, cooking performance and export presentation." />)}</div>
        <div className="catalogue-note"><div><b>Need a custom quality?</b><span>Tell us your destination, quantity and target market.</span></div><Link href="/contact-us" className="primary-btn">Request Quote</Link></div>
      </div></section>
    </>
  );
}
