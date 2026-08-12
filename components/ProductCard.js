export default function ProductCard({ image, category, name, description }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
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
