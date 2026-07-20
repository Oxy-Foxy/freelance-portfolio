const header = document.querySelector(".site-header");
const reveals = document.querySelectorAll(".reveal");

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setNavOpen(open) {
  const panel = document.querySelector("[data-nav-panel]");
  const backdrop = document.querySelector("[data-nav-backdrop]");
  const burger = document.querySelector("[data-nav-open]");
  if (!panel || !backdrop || !burger) return;
  panel.classList.toggle("is-open", open);
  backdrop.hidden = !open;
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("nav-open", open);
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(el.getAttribute("data-scroll"));
    setNavOpen(false);
  });
});

document.querySelector("[data-nav-open]")?.addEventListener("click", () => setNavOpen(true));
document.querySelector("[data-nav-close]")?.addEventListener("click", () => setNavOpen(false));
document.querySelector("[data-nav-backdrop]")?.addEventListener("click", () => setNavOpen(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNavOpen(false);
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  },
  { passive: true }
);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

document.querySelectorAll(".faq__q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq__item");
    if (!item) return;
    const wasOpen = item.classList.contains("is-open");
    document.querySelectorAll(".faq__item").forEach((el) => {
      el.classList.remove("is-open");
      el.querySelector(".faq__q")?.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});
