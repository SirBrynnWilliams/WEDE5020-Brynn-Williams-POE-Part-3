/* Shared behaviour used by every page. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  const currentUrl = new URL(window.location.href);

  document.querySelectorAll(".site-nav a[href]").forEach((link) => {
    const linkUrl = new URL(link.getAttribute("href"), currentUrl);
    const active = linkUrl.pathname.toLowerCase() === currentUrl.pathname.toLowerCase();
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      if (!body || !body.classList.contains("accordion-body")) return;
      const open = body.classList.contains("active");
      document.querySelectorAll(".accordion-body.active").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".accordion-header[aria-expanded='true']").forEach((item) => item.setAttribute("aria-expanded", "false"));
      if (!open) {
        body.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
});
