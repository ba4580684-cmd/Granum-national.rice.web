import Link from "next/link";

const qualities = [
  ["Extra Long Grain", "Long, elegant grains with premium shelf and plate presentation."],
  ["Rich Aroma", "Aromatic rice suited to biryani, pulao and premium everyday meals."],
  ["Fluffy & Non-Stick", "Designed for a separated, attractive cooked-grain finish."],
  ["Consistent Selection", "A quality-focused catalogue makes repeat buying easier."],
  ["Flexible Packing", "Retail, wholesale, bulk and private-label conversations."],
  ["Export Presentation", "Branding and packaging built to look professional in international markets."],
];

export default function QualitiesPage() {
  return (
    <>
      <section className="inner-hero"><div className="container"><span>Granum Standard</span><h1>Rice Qualities</h1><p>What makes the Granum experience premium.</p></div></section>
      <section className="section"><div className="container">
        <div className="quality-intro"><img src="/images/granum-campaign.png" alt="Granum premium rice" /><div><span className="eyebrow">QUALITY PROMISE</span><h2>Every grain is selected with the market in mind.</h2><p>Granum Global presents rice as a complete export product: grain quality, cooking character, packaging, communication and consistency all matter.</p><Link href="/contact-us" className="primary-btn">Discuss Your Requirement</Link></div></div>
        <div className="quality-grid">{qualities.map(([title, text], i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>
    </>
  );
}
