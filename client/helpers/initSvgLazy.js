export default function(lazySvg) {
  if ('IntersectionObserver' in window) {
    const options = {
      threshold: 1
    };
    let lazySvgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazySvg = entry.target;
          lazySvg.src = lazySvg.dataset.src;
          lazySvg.classList.remove('svg_lazy');
          lazySvg.classList.add('svg_lazy-fade');
        }
      });
    }, options);
  
    lazySvg.forEach(function(lazySvg) {
      lazySvgObserver.observe(lazySvg);
    });
  }
}
