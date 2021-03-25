export default function ({ app }) {
  app.router.beforeEach((to, from, next) => {
    if (from.name === 'blog' && (to.name === 'blog-uid' || to.name === 'customer-university-uid')) {
      window.localStorage.setItem('prevScrollY', window.scrollY);
    } else {
      if (to.name !== 'blog' && window.localStorage.getItem('prevScrollY')) {
        window.localStorage.removeItem('prevScrollY');
      }
    }
    next();
  });
}
