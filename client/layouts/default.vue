<template>
  <div class='default-layout'>
    <Header/>
      <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import initDriftHelper from '@/helpers/initDrift';

export default {
  name: 'Default',
  components: { 
    Header,
    Footer
  },
  mounted() {
    this.initSvgLazy();
    this.$nextTick(() => {
      try {
        const section = document.querySelector(window.location.hash);
        if (section) {
          section.scrollIntoView({ block: 'start' });
        }
        return true;
      } catch {
        return false;
      }
    });
    let scriptLoader = () => {
      initDriftHelper();
      window.removeEventListener('scroll', scriptLoader);
    };
    window.addEventListener('scroll', scriptLoader);
  },
  methods: {
    initSvgLazy() {
      const lazyImages = [].slice.call(document.querySelectorAll('img.svg_lazy'));
      if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('svg_lazy');
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
  @import '../assets/styles/_vars';

  .default-layout {
    background-color: $bgcolor--black;
  }

  .page-scrollbar {
    height: 100vh;
    overflow: hidden;

    /deep/ .ps__rail-y {
      z-index: 999;
      cursor: pointer;
    }
  }
</style>
