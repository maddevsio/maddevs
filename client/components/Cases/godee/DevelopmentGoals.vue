<template>
  <section
    class="container_regular"
  >
    <h3
      v-prlx="animationSettingsTitle"
      class="case_title_h2 m-24_bottom case_text-align-center"
    >
      Development goals
    </h3>
    <div
      ref="container"
      class="case_development-goals p-96_bottom media-p-48_bottom"
    >
      <div
        class="case_development-goals-left-column"
      >
        <Card
          v-for="goal in leftColumnGoals"
          :key="goal.title"
          class="background-color-silver"
        >
          <CardGoDeeFeature
            :title="goal.title"
            :icon-name="goal.icon"
          >
            <TextParagraph
              v-for="(paragraph, i) in goal.paragraphs"
              :key="paragraph"
              :class="goal.paragraphs.length === 2 && i === 0 ? 'm-24_bottom media-m-12_bottom' : ''"
            >
              {{ paragraph }}
            </TextParagraph>
          </CardGoDeeFeature>
        </Card>
      </div>
      <div
        ref="cardsRightColumn"
        v-prlx="animationSettingsCards"
        class="case_development-goals-right-column"
      >
        <Card
          v-for="goal in rightColumnGoals"
          :key="goal.title"
          class="background-color-silver"
        >
          <CardGoDeeFeature
            :title="goal.title"
            :icon-name="goal.icon"
          >
            <TextParagraph
              v-for="(paragraph, i) in goal.paragraphs"
              :key="paragraph"
              :class="goal.paragraphs.length === 2 && i === 0 ? 'm-24_bottom media-m-12_bottom' : ''"
            >
              {{ paragraph }}
            </TextParagraph>
          </CardGoDeeFeature>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import CardGoDeeFeature from '@/components/Cases/godee/cards/CardGoDeeFeature'
import { developmentGoals } from '@/data/caseGodee'

export default {
  name: 'DevelopmentGoals',
  components: {
    TextParagraph,
    Card,
    CardGoDeeFeature,
  },

  data() {
    return {
      developmentGoals,
      mobileResolution: 1025,
      animationSettingsCards: {
        reverse: true,
        limit: {
          min: -151,
          max: 151,
        },

        mobileMaxWidth: 1025,
      },

      animationSettingsTitle: {
        reverse: true,
        limit: {
          min: -151,
          max: 151,
        },

        mobileMaxWidth: 1025,
      },
    }
  },

  computed: {
    leftColumnGoals() {
      return this.developmentGoals.slice(0, 2)
    },

    rightColumnGoals() {
      return this.developmentGoals.slice(2)
    },

    isMobile() {
      if (window.screen.width <= this.mobileResolution) return true
      return false
    },
  },

  mounted() {
    if (!this.isMobile) window.addEventListener('scroll', this.scrollHandler)
  },

  methods: {
    scrollHandler() {
      const { transform } = this.$refs.cardsRightColumn.style
      const translateY = this.getNumberFromString(transform) // Get number without translateY() wrapper

      this.calcContainerPadding(translateY)
    },

    calcContainerPadding(translateY) {
      this.$refs.container.style.marginBottom = `-${translateY}px`
    },

    getNumberFromString(string) {
      if (typeof string === 'string' && string.length > 0) return parseInt(string.replace(/[^0-9]/g, ''), 10)
      return 0
    },
  },
}
</script>
