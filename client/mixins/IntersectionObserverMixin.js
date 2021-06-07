const observerDefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

function IntersectionObserverMixin(idList, callbackFn, observerOptions = observerDefaultOptions) {
  return {
    mounted() {
      this.initIntersectionObserver()
    },

    methods: {
      initIntersectionObserver() {
        idList.forEach(id => {
          const callback = entries => {
            entries.forEach(entry => {
              if (entry.target.id === id) {
                if (entry.isIntersecting) {
                  callbackFn(entry)
                }
              }
            })
          }
          const element = document.getElementById(id)
          if (!element) return
          const observer = new IntersectionObserver(callback, observerOptions)
          observer.observe(element)
        })
      },
    },
  }
}

export default IntersectionObserverMixin
