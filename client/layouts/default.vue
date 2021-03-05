<template>
  <div class="default-layout">
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
      this.initDrift();
      window.removeEventListener('scroll', scriptLoader);
    };
	  window.addEventListener('scroll', scriptLoader);
  },
  methods: {
    initDrift() {
      initDriftHelper();
    }
  }
};
</script>

<style lang="scss" scoped>
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
