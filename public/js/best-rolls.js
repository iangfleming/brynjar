(() => {
  "use strict";

  const BASE = "/images/best-rolls/";
  const PORTRAIT = new Set(["img1", "img3", "img5", "img21", "img24"]);

  const photos = Array.from({ length: 26 }, (_, i) => {
    const name = `img${i + 1}`;
    return {
      name,
      src: `${BASE}${name}.jpeg`,
      thumb: `${BASE}thumbs/${name}.jpeg`,
      alt: `Film photo ${i + 1}`,
      orientation: PORTRAIT.has(name) ? "portrait" : "landscape",
      caption: rollCaption(i + 1),
    };
  });

  function rollCaption(n) {
    const roll = Math.ceil(n / 6);
    const frame = ((n - 1) % 6) + 1;
    return `Roll ${roll}, frame ${frame}`;
  }

  // Build the grid
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = photos
    .map(
      (p, i) =>
        `<figure class="photo ${p.orientation}" data-index="${i}">` +
        `<img class="photo-img" src="${p.thumb}" alt="${p.alt}" loading="lazy">` +
        `<figcaption class="photo-caption">${p.caption}</figcaption>` +
        `</figure>`
    )
    .join("");

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  let current = 0;

  const open = (index) => {
    current = (index + photos.length) % photos.length;
    const p = photos[current];
    lightboxImage.src = p.src;
    lightboxImage.alt = p.alt;
    lightboxCaption.textContent = p.caption;
    lightbox.hidden = false;
    document.body.classList.add("is-locked");
  };

  const close = () => {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.classList.remove("is-locked");
  };

  const prev = () => open(current - 1);
  const next = () => open(current + 1);

  gallery.addEventListener("click", (e) => {
    const fig = e.target.closest(".photo");
    if (fig) open(Number(fig.dataset.index));
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
})();