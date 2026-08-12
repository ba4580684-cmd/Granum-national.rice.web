import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><span>G</span><b>GRANUM GLOBAL</b></div>
          <p>
            Harvesting connectivity. Sustaining growth. Premium Pakistani rice
            for importers, distributors, wholesalers and private-label partners.
          </p>
          <div className="social-row">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/home">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/qualities">Qualities</Link>
        </div>
        <div>
          <h4>Discover</h4>
          <Link href="/blogs">Blogs</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+447447195805">+44 (0) 7447 195805</a>
          <a href="tel:+447342238038">+44 (0) 7342 238038</a>
          <a href="mailto:granumglobal@yahoo.co.uk">granumglobal@yahoo.co.uk</a>
          <p>Product of Pakistan • Serving global markets</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} Granum Global. All rights reserved.</div>
      </div>
    </footer>
  );
}
