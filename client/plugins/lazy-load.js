export default ({ app }, inject) => { // eslint-disable-line
  let options = {
    className: 'media_lazy',
    classNameFade: 'media_lazy-fade',
    threshold: 0.1,
  }

  // Replace data-src to src
  function replaceAttrs(target) {
    if (target.tagName === 'VIDEO') {
      const videoSource = target.children[0]
      if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
        videoSource.src = videoSource.dataset.src
        videoSource.removeAttribute('data-src')
      }
      target.load()
    } else {
      target.src = target.dataset.src
      if (target.dataset.srcset) {
        target.srcset = target.dataset.srcset
        target.removeAttribute('data-src')
      }
    }
  }

  const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return
    replaceAttrs(target)
    target.classList.remove(options.className)
    target.classList.add(options.classNameFade)
  })

  // Disable lazy loading
  function destroyLazy() {
    const elements = document.querySelectorAll(`.${options.className}`)
    elements.forEach(element => {
      replaceAttrs(element)
      element.classList.remove(options.className)
      element.classList.remove(options.classNameFade)
    })
  }

  // Get all elements and init plugin
  function initializeLazyLoad(customOptions) {
    options = { ...options, ...customOptions }

    const elements = Array.from(document.querySelectorAll(`.${options.className}`))
    console.log(elements)

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(observerCallback, options)
      elements.forEach(element => observer.observe(element))
    }
  }

  const LazyLoad = {
    init: initializeLazyLoad,
    destroy: destroyLazy,
  }

  // Inject global method
  inject('LazyLoad', LazyLoad)
}
