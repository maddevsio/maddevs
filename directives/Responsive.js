import throttle from 'lodash.throttle';
import ResizeObserver from 'resize-observer-polyfill';

const Responsive = {
  inserted(el, conds, vnode) {
    if (typeof process === 'undefined' || !process.server) {
      const breakpoints = Object.keys(conds.value);
      const handleResize = throttle(entries => {
        const cr = entries[0].contentRect;
        breakpoints.forEach(breakpoint => {
          if (conds.value[breakpoint](cr)) {
            el.classList.add(breakpoint);
          } else {
            el.classList.remove(breakpoint);
          }
        });
      }, 200);

      const observer = new ResizeObserver(handleResize);
      observer.observe(vnode.context.$root.$el);
    }
  }
};

export default Responsive;
