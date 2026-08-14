document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 6) * 60}ms`;
    observer.observe(item);
  });
});
