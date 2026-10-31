/* Open only images explicitly marked as lightbox thumbnails. */
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll("img.gallery-thumb:not(#lightboxImage)");
  if (!thumbnails.length) return;

  let modal = document.getElementById("lightboxModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lightboxModal";
    modal.className = "lightbox-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Expanded image");
    modal.innerHTML = '<button type="button" id="lightboxClose" aria-label="Close image">&times;</button><img id="lightboxImage" alt="">';
    modal.hidden = true;
    document.body.append(modal);
  }

  const image = modal.querySelector("#lightboxImage");
  const closeButton = modal.querySelector("#lightboxClose");
  if (!image || !closeButton) return;
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (modal.opener) modal.opener.focus();
  };
  thumbnails.forEach((thumb) => {
    thumb.tabIndex = 0;
    thumb.setAttribute("role", "button");
    thumb.setAttribute("aria-label", `Expand image: ${thumb.alt || "Website image"}`);
    const open = () => {
      image.src = thumb.currentSrc || thumb.src;
      image.alt = thumb.alt;
      modal.opener = thumb;
      modal.hidden = false;
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    };
    thumb.addEventListener("click", open);
    thumb.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
  });
  closeButton.addEventListener("click", close);
  modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !modal.hidden) close(); });
});
