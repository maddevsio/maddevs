<template>
  <div class="godee-case-layout">
    <nuxt />
  </div>
</template>

<script>
import initIntercom from '@/helpers/intercom'

export default {
  name: 'GodeeLayout',

  mounted() {
    this.loadIntercomScript()
  },

  methods: {
    loadIntercomScript() {
      const scrollContainer = document.getElementById('case-scroll-container')
      const scriptLoader = () => {
        initIntercom()
        scrollContainer.removeEventListener('scroll', scriptLoader)
      }
      scrollContainer.addEventListener('scroll', scriptLoader)
    },
  },
}
</script>

