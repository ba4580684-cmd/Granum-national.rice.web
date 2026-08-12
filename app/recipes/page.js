import Link from "next/link";
const recipes = [
  ["/images/recipe-1.jpg","Vegetable Pulao","A fragrant rice dish for a simple premium meal."],
  ["/images/recipe-2.jpg","Kabuli Pulao","A celebratory rice plate with rich, aromatic character."],
  ["/images/recipe-3.jpg","Chicken Biryani","Long-grain rice paired with bold spices and tender chicken."],
  ["/images/recipe-4.jpg","Saffron Rice","A colorful aromatic rice preparation."],
  ["/images/recipe-5.jpg","Ruz al Bukhari","A rich rice dish for family and festive tables."],
  ["/images/recipe-6.jpg","Murabyan","A vibrant rice inspiration for everyday menus."],
];
export default function RecipesPage() {
  return <><section className="inner-hero recipe-hero"><div className="container"><span>Granum Kitchen</span><h1>Recipes</h1><p>Authentic rice inspiration for every cuisine.</p></div></section><section className="section"><div className="container"><div className="recipe-grid">{recipes.map(([img,title,text])=><article className="recipe-full" key={title}><img src={img} alt={title}/><div><span>RICE INSPIRATION</span><h3>{title}</h3><p>{text}</p><Link href="/contact-us">Source this rice →</Link></div></article>)}</div></div></section></>;
}
