// Content stays visible without JavaScript, and motion is played only once.
(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const isImage = entry.target.matches("figure, .home-paper-image");
        entry.target.animate(
          isImage
            ? [
                { opacity: 0.7, transform: "scale(0.985)" },
                { opacity: 1, transform: "scale(1)" },
              ]
            : [
                { opacity: 0.65, transform: "translateY(12px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
          { duration: isImage ? 650 : 460, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
        );
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll("[data-arrive]").forEach((element) => observer.observe(element));
})();
