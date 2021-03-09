export default function(lazySvg) {
  if ('IntersectionObserver' in window) {
    let lazySvgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazySvg = entry.target;
          lazySvg.src = lazySvg.dataset.src;
          lazySvg.classList.remove('svg_lazy');
        }
      });
    });
  
    lazySvg.forEach(function(lazySvg) {
      lazySvgObserver.observe(lazySvg);
    });
  }
}
