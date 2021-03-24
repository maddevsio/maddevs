<template>
  <div class="default-layout">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import initIntercomHelper from '@/helpers/initIntercom';

export default {
  name: 'Default',
  components: {
    Header,
    Footer,
  },

  mounted() {
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
    const scriptLoader = () => {
      initIntercomHelper();
      window.removeEventListener('scroll', scriptLoader);
    };
    window.addEventListener('scroll', scriptLoader);
  },
};
</script>

<style lang='scss' scoped>
@import '../assets/styles/_vars';

.default-layout {
  background-color: $bgcolor--black;
}
</style>
