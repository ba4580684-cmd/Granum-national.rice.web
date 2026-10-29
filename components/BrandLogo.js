export default function BrandLogo() {
  return (
    <span className="brand-logo" role="img" aria-label="Granum Global">
      <img className="brand-emblem" src="/images/granum-globe-reference-color.png" alt="" width="62" height="62" style={{ objectFit: "contain" }} />
      <span className="brand-wordmark" aria-hidden="true">
        <span className="brand-name">GRANUM</span>
        <span className="brand-global"><img className="brand-global-image" src="/images/global-wordmark-matched-gold.png" alt="" width="4096" height="559" /></span>
      </span>
    </span>
  );
}
