(() => {
  "use strict";

  // Signal JS is active so entrance animations can run
  document.documentElement.classList.add("js");

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Entrance animation for corkboard pins
  const pins = document.querySelectorAll(".pin");

  if (pins.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    pins.forEach((pin) => observer.observe(pin));
  } else {
    pins.forEach((pin) => pin.classList.add("is-in"));
  }
})();