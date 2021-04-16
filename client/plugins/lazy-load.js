export default ({ app }, inject) => { // eslint-disable-line
  let options = {
    className: 'media_lazy',
    classNameFade: 'media_lazy-fade',
    threshold: 0.1,
  }

  // Refresh lazy elements when updated DOM
  function refreshLazy() {
    const elements = document.querySelectorAll(`.${options.className}`)
    elements.forEach(element => {
      element.src = element.dataset.src
      element.classList.remove(options.className)
      element.classList.remove(options.classNameFade)
    })
  }

  // In progress...
  function destroyLazy() {
    const elements = document.querySelectorAll(`.${options.className}`)
    elements.forEach(element => {
      element.src = element.dataset.src
      element.classList.remove(options.className)
    })
  }

  function handleVideo(target) {
    const videoSource = target.children[0]
    if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
      videoSource.src = videoSource.dataset.src
    }
    target.load()
  }

  function handleImg(target) {
    target.src = target.dataset.src
    if (target.dataset.srcset) {
      target.srcset = target.dataset.srcset
    }
  }

  const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return

    if (target.tagName === 'VIDEO') {
      handleVideo(target)
    } else {
      handleImg(target)
    }

    target.classList.remove(options.className)
    target.classList.add(options.classNameFade)
  })

  function initializeLazyLoad(customOptions) {
    options = { ...options, ...customOptions }

    const elements = Array.from(document.querySelectorAll(`.${options.className}`))

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(observerCallback, options)
      elements.forEach(element => observer.observe(element))
    }
  }

  const LazyLoad = {
    init: initializeLazyLoad,
    refresh: refreshLazy,
    destroy: destroyLazy,
  }

  // Inject global method
  inject('LazyLoad', LazyLoad)
}
