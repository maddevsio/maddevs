export default ({ app }, inject) => { // eslint-disable-line
  let options = {
    className: 'media_lazy',
    classNameFade: 'media_lazy-fade',
    threshold: 0.1,
  }

  let observer = null

  // Replace data-src to src
  function replaceAttrs(target) {
    if (target.tagName === 'VIDEO') {
      const videoSource = target.children[0]
      if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
        videoSource.src = videoSource.dataset.src
      }
      target.load()
    } else {
      target.src = target.dataset.src
      if (target.dataset.srcset) {
        target.srcset = target.dataset.srcset
      }
    }
  }

  const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return
    replaceAttrs(target)
    target.classList.remove(options.className)
    target.classList.add(options.classNameFade)
    observer.unobserve(target)
  })

  // Disable lazy loading
  function resetLazy() {}

  // Disable lazy loading
  function destroyLazy() {}

  // Get all elements and init plugin
  function initializeLazyLoad(customOptions) {
    options = { ...options, ...customOptions }

    const elements = Array.from(document.querySelectorAll(`.${options.className}`))

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(observerCallback, options)
      elements.forEach(element => observer.observe(element))
    }
  }

  const LazyLoad = {
    init: initializeLazyLoad,
    destroy: destroyLazy,
    reset: resetLazy,
  }

  // Inject global method
  inject('LazyLoad', LazyLoad)
}
