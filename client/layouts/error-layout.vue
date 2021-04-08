<template>
  <div class="error-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'

export default {
  name: 'ErrorLayout',
  components: {
    Header,
    Footer,
  },
}
</script>
