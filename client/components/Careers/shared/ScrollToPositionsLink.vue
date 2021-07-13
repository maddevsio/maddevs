<template>
  <NuxtLink
    :to="`/careers/#open-positions`"
    :class="[(show && vacanciesLoaded && vacanciesCount) ? null : 'scroll-to-positions--hidden']"
    class="scroll-to-positions"
    @click.native="scrollToElement('#open-positions')"
  >
    <UnderlinedButton>
      See all {{ vacanciesCount }} open positions
    </UnderlinedButton>
  </NuxtLink>
</template>

<script>
import { mapGetters } from 'vuex'
import UnderlinedButton from '@/components/Careers/shared/UnderlinedButton'
import scrollToElementMixin from '@/mixins/scrollToElementMixin'

export default {
  name: 'ScrollToPositionsLink',
  components: {
    UnderlinedButton,
  },

  mixins: [scrollToElementMixin],

  data() {
    return {
      show: true,
      positionsSectionEl: null,
    }
  },

  computed: {
    ...mapGetters(['vacancies', 'vacanciesLoaded']),

    vacanciesCount() {
      return (this.vacancies && this.vacancies.length) || 0
    },
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
        this.show = offsetTop > 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll-to-positions {
  cursor: pointer;
  border: 0px solid;
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
