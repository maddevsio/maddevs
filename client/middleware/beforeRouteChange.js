/**
 * https://nuxtjs.org/examples/middleware-router
 */
export default function beforeRouteChange({ app }) {
  app.router.beforeEach((to, from, next) => {
    if (from.name === 'blog' && (to.name === 'blog-uid' || to.name === 'customer-university-uid')) {
      window.sessionStorage.setItem('prevScrollY', window.scrollY)
    } else if (to.name !== 'blog' && window.sessionStorage.getItem('prevScrollY')) {
      window.sessionStorage.removeItem('prevScrollY')
    }
    next()
  })
}
