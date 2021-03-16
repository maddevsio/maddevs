export default function() {
  const lazyImg = [].slice.call(document.querySelectorAll('img.img_lazy'));
  if ('IntersectionObserver' in window) {
    const options = {
      threshold: 1
    };
    let lazyImgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImg = entry.target;
          lazyImg.src = lazyImg.dataset.src;

          if (lazyImg.dataset.srcset) {
            lazyImg.srcset = lazyImg.dataset.srcset;
          }

          lazyImg.classList.remove('img_lazy');
          lazyImg.classList.add('img_lazy-fade');
        }
      });
    }, options);
  
    lazyImg.forEach(function(lazyImg) {
      lazyImgObserver.observe(lazyImg);
    });
  }
}
