/* Live filtering for the service cards on Services.html. */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  if (input) {
    const cards = [...document.querySelectorAll(".service-card")];
    const status = document.getElementById("searchStatus");
    const filterCards = () => {
      const term = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const matches = card.textContent.toLocaleLowerCase().includes(term);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (status) status.textContent = term ? `${visible} service${visible === 1 ? "" : "s"} found.` : "";
    };
    input.addEventListener("input", filterCards);
  }

  const pageInput = document.getElementById("siteSearch");
  if (!pageInput) return;
  const sections = [...document.querySelectorAll("main .content-section")];
  const pageStatus = document.getElementById("siteSearchStatus");

  const filterSections = () => {
    const term = pageInput.value.trim().toLocaleLowerCase();
    let visible = 0;
    sections.forEach((section) => {
      const matches = !term || section.textContent.toLocaleLowerCase().includes(term);
      section.hidden = !matches;
      if (matches) visible += 1;
    });
    document.querySelectorAll(".left-col, .right-col").forEach((column) => {
      column.hidden = Boolean(term) && !column.querySelector(".content-section:not([hidden])");
    });
    const contactLayout = document.querySelector(".contact-container");
    if (contactLayout) {
      contactLayout.hidden = Boolean(term) && !contactLayout.querySelector(".content-section:not([hidden])");
    }
    if (pageStatus) {
      pageStatus.textContent = term
        ? visible ? `${visible} matching section${visible === 1 ? "" : "s"}.` : "No matching sections found."
        : "";
    }
  };
  pageInput.addEventListener("input", filterSections);
});
