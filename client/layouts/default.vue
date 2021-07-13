<template>
  <div class="default-layout">
    <Header />
    <Nuxt class="main-section" />
    <ClientOnly>
      <CookieNotice />
    </ClientOnly>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'
import initIntercom from '@/helpers/intercom'
import CookieNotice from '@/components/core/CookieNotice'

export default {
  name: 'Default',
  components: {
    CookieNotice,
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
.default-layout {
  background-color: $bgcolor--black;
}

.main-section {
  margin-top: -62px !important;
}
</style>
