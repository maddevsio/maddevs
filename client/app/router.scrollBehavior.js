/*
 ** scrollBehavior configuration - https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
 **
 ** Nuxt.js Smooth Scrolling with Hash Links https://zachcardoza.com/post/nuxtjs-smooth-scrolling-with-hash-links/
 */
export default async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x) => {
    const X = x
    return (
      document.querySelector(hash) ||
      new Promise(resolve => {
        if (X > 50) {
          return resolve()
        }
        setTimeout(() => {
          resolve(findEl(hash, X + 1 || 1))
        }, 100)

        return null
      })
    )
  }

  if (to.hash) {
    const el = await findEl(to.hash)
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
    return window.scrollTo(0, el.offsetTop)
  }

  return { x: 0, y: 0 }
}
