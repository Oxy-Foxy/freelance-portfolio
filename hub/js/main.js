const STORAGE_KEY = "og-hub-lang";
const SUPPORTED = ["ru", "ro", "en"];
const LABELS = { ru: "RU", ro: "RO", en: "EN" };

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || "ru").toLowerCase();
  if (nav.startsWith("ro")) return "ro";
  if (nav.startsWith("en")) return "en";
  return "ru";
}

function setDropdownOpen(open) {
  const root = document.querySelector("[data-lang-dropdown]");
  const toggle = document.querySelector("[data-lang-toggle]");
  const menu = document.querySelector("[data-lang-menu]");
  if (!root || !toggle || !menu) return;
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  root.classList.toggle("is-open", open);
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
  if (!open) setDropdownOpen(false);
}

function setMeta(name, content, attr = "name") {
  if (content == null) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function applyI18n(lang) {
  const dict = window.HUB_I18N?.[lang] || window.HUB_I18N.ru;
  document.documentElement.lang = lang;
  document.title = dict.docTitle;
  setMeta("description", dict.metaDescription);
  setMeta("og:title", dict.docTitle, "property");
  setMeta("og:description", dict.metaDescription, "property");
  setMeta("og:locale", dict.ogLocale, "property");
  setMeta("twitter:title", dict.docTitle);
  setMeta("twitter:description", dict.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  const current = document.querySelector("[data-lang-current]");
  if (current) current.textContent = LABELS[lang] || lang.toUpperCase();

  document.querySelectorAll(".lang__menu [data-lang]").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.parentElement?.setAttribute("aria-selected", active ? "true" : "false");
  });

  localStorage.setItem(STORAGE_KEY, lang);
  setDropdownOpen(false);
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(el.getAttribute("data-scroll"));
    setNavOpen(false);
  });
});

document.querySelector("[data-nav-open]")?.addEventListener("click", () => {
  setNavOpen(true);
});

document.querySelector("[data-nav-close]")?.addEventListener("click", () => {
  setNavOpen(false);
});

document.querySelector("[data-nav-backdrop]")?.addEventListener("click", () => {
  setNavOpen(false);
});

const langToggle = document.querySelector("[data-lang-toggle]");
const langRoot = document.querySelector("[data-lang-dropdown]");

langToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = langToggle.getAttribute("aria-expanded") !== "true";
  setDropdownOpen(open);
});

document.querySelectorAll(".lang__menu [data-lang]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    applyI18n(btn.getAttribute("data-lang"));
  });
});

document.addEventListener("click", (e) => {
  if (langRoot && !langRoot.contains(e.target)) setDropdownOpen(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setDropdownOpen(false);
    setNavOpen(false);
  }
});

document.querySelectorAll(".reveal").forEach((el) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    },
    { threshold: 0.15 }
  );
  observer.observe(el);
});

applyI18n(detectLang());
