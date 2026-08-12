// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     ["Home", "/home"],
//     ["About Us", "/about-us"],
//     ["Products", "/products"],
//     ["Blogs", "/blogs"],
//     ["Recipes", "/recipes"],
//     ["Qualities", "/qualities"],
//     ["Contact Us", "/contact-us"],
//   ];

//   return (
//     <>
//       <div className="topbar">
//         <div className="container topbar-inner">
//           <span>Premium Pakistani Rice • International Export</span>
//           <div className="top-links">
//             <a href="tel:+447447195805">+44 (0) 7447 195805</a>
//             <a href="mailto:granumglobal@yahoo.co.uk">granumglobal@yahoo.co.uk</a>
//             <a href="#facebook">Facebook</a>
//             <a href="#instagram">Instagram</a>
//           </div>
//         </div>
//       </div>

//       <header className="site-header">
//         <div className="container nav-inner">
//           <Link href="/home" className="logo" onClick={() => setOpen(false)}>
//             <span className="logo-symbol">G</span>
//             <span><b>GRANUM</b><small>GLOBAL</small></span>
//           </Link>

//           <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//             {open ? "✕" : "☰"}
//           </button>

//           <nav className={open ? "nav open" : "nav"}>
//             {links.map(([label, href]) => (
//               <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
//             ))}
//             <Link className="nav-cta" href="/contact-us" onClick={() => setOpen(false)}>Request Quote</Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }


// <nav className={open ? "nav open" : "nav"}>
//   {links.map(([label, href]) => (
//     <Link
//       key={href}
//       href={href}
//       onClick={() => setOpen(false)}
//       className={pathname === href ? "active" : ""}
//     >
//       {label}
//     </Link>
//   ))}

//   <Link
//     className={`nav-cta ${pathname === "/contact-us" ? "active" : ""}`}
//     href="/contact-us"
//     onClick={() => setOpen(false)}
//   >
//     Request Quote
//   </Link>
// </nav>

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    ["Home", "/home"],
    ["About Us", "/about-us"],
    ["Products", "/products"],
    ["Blogs", "/blogs"],
    ["Recipes", "/recipes"],
    ["Qualities", "/qualities"],
    ["Contact Us", "/contact-us"],
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Premium Pakistani Rice • International Export</span>

          <div className="top-links">
            <a href="tel:+447447195805">+44 (0) 7447 195805</a>
            <a href="mailto:granumglobal@yahoo.co.uk">
              granumglobal@yahoo.co.uk
            </a>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">

          <Link
            href="/home"
            className="logo"
            onClick={() => setOpen(false)}
          >
            <span className="logo-symbol">G</span>
            <span>
              <b>GRANUM</b>
              <small>GLOBAL</small>
            </span>
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          <nav className={open ? "nav open" : "nav"}>

            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={pathname === href ? "active" : ""}
              >
                {label}
              </Link>
            ))}

            <Link
              className={`nav-cta ${
                pathname === "/contact-us" ? "active" : ""
              }`}
              href="/contact-us"
              onClick={() => setOpen(false)}
            >
              Request Quote
            </Link>

          </nav>
        </div>
      </header>
    </>
  );
}

