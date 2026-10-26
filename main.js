(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
  }
  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = new Date().getFullYear();
  });
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  filters.forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    cards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  }));
})();
