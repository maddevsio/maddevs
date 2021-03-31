const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
  if (!isIntersecting) return

  target.src = target.dataset.src
  if (target.dataset.srcset) {
    target.srcset = target.dataset.srcset
  }

  target.classList.remove('img_lazy')
  target.classList.add('img_lazy-fade')
})

function initializeLazyLoad() {
  const images = Array.from(document.querySelectorAll('img.img_lazy'))

  const options = {
    threshold: 1,
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(observerCallback, options)
    images.forEach(image => observer.observe(image))
  }
}

export default initializeLazyLoad
