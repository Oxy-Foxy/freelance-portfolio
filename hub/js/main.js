const STORAGE_KEY = "og-hub-lang";
const SUPPORTED = ["ru", "ro", "en"];

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

function applyI18n(lang) {
  const dict = window.HUB_I18N?.[lang] || window.HUB_I18N.ru;
  document.documentElement.lang = lang;
  document.title = dict.docTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang [data-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(el.getAttribute("data-scroll"));
  });
});

document.querySelectorAll(".lang [data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyI18n(btn.getAttribute("data-lang")));
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
