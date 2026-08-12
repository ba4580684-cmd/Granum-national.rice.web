import Link from "next/link";
const posts = [
  ["How to choose the right basmati quality","From 1121 to 1718 and beyond, understand the key differences buyers consider."],
  ["Why packaging matters in rice exports","Presentation, pack sizes and private labels can shape how customers experience a product."],
  ["Building a premium rice brand","A strong rice brand connects origin, quality, consistency and a clear story."],
];
export default function BlogsPage() {
  return <><section className="inner-hero"><div className="container"><span>Granum Insights</span><h1>Blogs</h1><p>Ideas for rice buyers, food businesses and global markets.</p></div></section><section className="section"><div className="container"><div className="blog-grid">{posts.map(([title,text],i)=><article className="blog-card" key={title}><div className="blog-num">0{i+1}</div><span>GRANUM INSIGHT</span><h2>{title}</h2><p>{text}</p><Link href="/contact-us">Talk to our team →</Link></article>)}</div></div></section></>;
}
