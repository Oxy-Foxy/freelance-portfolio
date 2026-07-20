document.querySelectorAll(".reveal").forEach((el) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("is-visible")
      observer.unobserve(entry.target)
    },
    { threshold: 0.15 }
  )
  observer.observe(el)
})
