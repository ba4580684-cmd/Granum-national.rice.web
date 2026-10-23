"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

let initialized = false;

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // AOS has no destroy API. Initialize its global listeners only once,
    // including when React replays effects in development.
    if (!initialized) {
      AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: true,
        offset: 40,
        disableMutationObserver: true,
      });
      initialized = true;
    }

    let frame;
    let disposed = false;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => AOS.refreshHard());
    };

    // Refresh after route commits and after assets change section positions.
    refresh();
    const onImageLoad = (event) => {
      if (event.target instanceof HTMLImageElement) refresh();
    };
    document.addEventListener("load", onImageLoad, true);
    document.fonts.ready.then(() => {
      if (!disposed) refresh();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("load", onImageLoad, true);
    };
  }, [pathname]);

  return null;
}
