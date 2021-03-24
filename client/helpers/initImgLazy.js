export default () => {
  const lazyImg = [].slice.call(document.querySelectorAll('img.img_lazy'));
  if ('IntersectionObserver' in window) {
    const options = {
      threshold: 1,
    };
    const lazyImgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          target.src = target.dataset.src;

          if (target.dataset.srcset) {
            target.srcset = target.dataset.srcset;
          }

          target.classList.remove('img_lazy');
          target.classList.add('img_lazy-fade');
        }
      });
    }, options);

    lazyImg.forEach(img => {
      lazyImgObserver.observe(img);
    });
  }
};
