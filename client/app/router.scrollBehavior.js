/*
** scrollBehavior configuration - https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
*/
export default function (to, from, savedPosition) {
  if (savedPosition) return savedPosition;
  if (to && to.hash) return { selector: to.hash };
  return { x: 0, y: 0 };
}
