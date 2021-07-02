/*
 ** scrollBehavior configuration - https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
 **
 ** Nuxt.js — Custom scrollBehavior fired after page loaded https://levelup.gitconnected.com/nuxt-js-custom-scrollbehavior-fired-after-page-loaded-cd94fd6ddd12
 ** Nuxt.js Smooth Scrolling with Hash Links - https://zachcardoza.com/post/nuxtjs-smooth-scrolling-with-hash-links/
 */

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual' // scrollBehavior not called if property is 'manual'
    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })
    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}

export default async (to, from, savedPosition) => {
  const position = savedPosition || { x: 0, y: 0 }

  // triggerScroll is only fired when a new component is loaded
  if (to.path === from.path && to.hash !== from.hash) {
    $nuxt.$nextTick(() => $nuxt.$emit('triggerScroll'))
  }

  const findEl = async (hash, x) => {
    try {
      return document.querySelector(hash)
        || new Promise(resolve => {
          if (x > 50) resolve()
          setTimeout(() => { resolve(findEl(hash, (x + 1) || 1)) }, 100)
        })
    } catch {
      return null
    }
  }

  if (to.hash) {
    const hashEl = await findEl(to.hash)
    if (hashEl) {
      if ('scrollBehavior' in document.documentElement.style) return window.scrollTo({ top: hashEl.offsetTop, behavior: 'smooth' })
      return window.scrollTo(0, hashEl.offsetTop)
    }
  }

  return new Promise(resolve => {
    $nuxt.$once('triggerScroll', () => {
      // section with filtered posts is rendered with a small delay, then offset heigh of the blog page changes
      if (to.name === 'blog') return setTimeout(() => resolve(position), 50)
      return resolve(position)
    })
  })
}
