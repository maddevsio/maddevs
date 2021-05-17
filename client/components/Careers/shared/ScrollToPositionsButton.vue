<template>
  <NuxtLink
    to="#open-positions"
    :class="[hidden ? 'scroll-to-positions--hidden' : null]"
    class="scroll-to-positions"
  >
    <UnderlinedButton>Scroll to open positions</UnderlinedButton>
  </NuxtLink>
</template>

<script>
import UnderlinedButton from '@/components/Careers/shared/UnderlinedButton'

export default {
  name: 'ScrollToPositionsButton',
  components: {
    UnderlinedButton,
  },

  data() {
    return {
      hidden: false,
      positionsSectionEl: null,
    }
  },

  mounted() {
    this.positionsSectionEl = document.getElementById('open-positions')
    this.handleButtonVisibility()
    window.addEventListener('scroll', this.handleButtonVisibility)
  },

  methods: {
    handleButtonVisibility() {
      if (this.positionsSectionEl) {
        const sectionRect = this.positionsSectionEl.getBoundingClientRect()
        const offsetTop = sectionRect.top - window.innerHeight
        this.hidden = offsetTop < 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.scroll-to-positions {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: $bgcolor--black;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  z-index: 9;
  transition: all 0.2s;
  &--hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
