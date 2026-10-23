import ResponsiveImage from "@/components/ResponsiveImage";

export default function ProductCard({ image, category, name, description }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <ResponsiveImage src={image} alt={name} sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1000px) 50vw, 295px" />
        <span>{category}</span>
      </div>
      <div className="product-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="/contact-us">Request this quality →</a>
      </div>
    </article>
  );
}
