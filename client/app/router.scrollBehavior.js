/*
 ** scrollBehavior configuration - https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
 **
 ** Nuxt.js — Custom scrollBehavior fired after page loaded https://levelup.gitconnected.com/nuxt-js-custom-scrollbehavior-fired-after-page-loaded-cd94fd6ddd12
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

export default function scrollBehavior(to, from, savedPosition) {
  let position = savedPosition || { x: 0, y: 0 }

  // triggerScroll is only fired when a new component is loaded
  if (to.path === from.path && to.hash !== from.hash) {
    $nuxt.$nextTick(() => $nuxt.$emit('triggerScroll'))
  }

  return new Promise(resolve => {
    $nuxt.$once('triggerScroll', () => {
      if (to.hash) {
        let { hash } = to
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') { hash = `#${window.CSS.escape(hash.substr(1))}` }
        try {
          if (document.querySelector(hash)) position = { selector: hash }
        } catch (e) {
          // eslint-disable-next-line
          console.warn(
            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).',
          )
        }
      }

      // section with filtered posts is rendered with a small delay, then offset heigh of the blog page changes
      if (to.name === 'blog') return setTimeout(() => resolve(position), 50)

      return resolve(position)
    })
  })
}
