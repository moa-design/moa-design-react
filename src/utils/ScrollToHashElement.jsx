import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// SCROLL SUAVE PERSONALIZADO
function smoothScrollTo(targetY, duration = 1500) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  function easing(t) {
    return 1 - Math.pow(1 - t, 4); // súper suave
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startY + diff * easing(progress));

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash, subimos al top
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 20;

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        const targetY =
          element.getBoundingClientRect().top + window.scrollY - 100;

        smoothScrollTo(targetY, 1500);
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scrollToElement, 50);
      }
    };

    scrollToElement();
  }, [pathname, hash]);

  return null;
}
