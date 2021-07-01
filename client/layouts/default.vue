<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'
import initIntercom from '@/helpers/intercom'

export default {
  name: 'Default',
  components: {
    Header,
    Footer,
  },

  mounted() {
    this.initHashLinks()
    this.loadIntercomScript()
  },

  methods: {
    initHashLinks() {
      this.$nextTick(() => {
        if (window.location.hash) {
          try {
            const section = document.querySelector(window.location.hash)
            if (section) section.scrollIntoView({ block: 'start' })
            return true
          } catch {
            return false
          }
        }
        return false
      })
    },

    loadIntercomScript() {
      const scriptLoader = () => {
        initIntercom()
        window.removeEventListener('scroll', scriptLoader)
      }
      window.addEventListener('scroll', scriptLoader)
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/_vars';

.default-layout {
  background-color: $bgcolor--black;
}
</style>
