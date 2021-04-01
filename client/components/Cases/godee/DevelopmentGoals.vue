<template>
  <section
    ref="cardsRootElem"
    class="container_regular"
  >
    <h3
      ref="developmentGoalsTitle"
      class="case_title_h2 m-24_bottom case_text-align-center"
    >
      Development goals
    </h3>
    <div
      ref="cardsContainer"
      class="case_development-goals p-96_bottom media-p-48_bottom"
    >
      <div
        ref="cardsLeftColumn"
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
      mainElement: null,
      currentScroll: 0,
      previousScroll: 0,
      translateY: null,
      scrollSpeed: 5,
      cardsContainerHeight: null,
      newHeight: null,
      paddingBottom: 96,
      headerHeight: 62,
    }
  },

  computed: {
    leftColumnGoals() {
      return this.developmentGoals.slice(0, 2)
    },

    rightColumnGoals() {
      return this.developmentGoals.slice(2)
    },
  },

  mounted() {
    this.cardsContainerHeight = this.$refs.cardsContainer.getBoundingClientRect().height
    this.mainElement = document.querySelector('#case-scroll-container')
    this.mainElement.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      // На разрешении экрана 880 происходит перестройка секции и анимация не должна больше отрабатывать
      const BREAKPOINT = 880

      if (!this.mainElement) return null
      if (window.innerWidth <= BREAKPOINT) return this.setDefaultStylesForCards()

      this.currentScroll = this.mainElement.scrollTop
      if (this.currentScroll > this.previousScroll) this.handleScrollDown()
      else this.handleScrollUp()

      this.previousScroll = this.currentScroll
      return null
    },

    getColumnOffset(ref, rootBounding) {
      if (!ref) return 0
      return Math.abs(ref.getBoundingClientRect().bottom - rootBounding.bottom)
    },

    handleScrollDown() {
      const rootBounding = this.$refs.cardsRootElem.getBoundingClientRect()
      // Получаем расстояние снизу отностильно родителя и переводим число в положительное
      const leftColumnOffsetBottom = this.getColumnOffset(this.$refs.cardsLeftColumn, rootBounding)
      const rightColumnOffsetBottom = this.getColumnOffset(this.$refs.cardsRightColumn, rootBounding)

      if (rootBounding.top - this.headerHeight >= 0 || leftColumnOffsetBottom <= rightColumnOffsetBottom) return

      this.translateY = (rootBounding.top - this.headerHeight) / this.scrollSpeed
      this.$refs.cardsRightColumn.style.transform = `translateY(${this.translateY}px)`
      this.$refs.developmentGoalsTitle.style.transform = `translateY(${this.translateY}px)`
      this.newHeight = this.cardsContainerHeight - Math.abs(this.translateY - this.paddingBottom)
      this.$refs.cardsContainer.style.height = `${this.newHeight}px`
    },

    handleScrollUp() {
      const rootBounding = this.$refs.cardsRootElem.getBoundingClientRect()
      const translateY = (rootBounding.top - this.headerHeight) / this.scrollSpeed

      if (rootBounding.top - this.headerHeight > 0 || translateY <= this.translateY) return

      this.$refs.cardsRightColumn.style.transform = `translateY(${translateY}px)`
      this.$refs.developmentGoalsTitle.style.transform = `translateY(${translateY}px)`

      if (this.cardsContainerHeight <= this.newHeight) return
      this.$refs.cardsContainer.style.height = `${(this.newHeight += 3)}px`
    },

    setDefaultStylesForCards() {
      this.cardsContainerHeight = this.$refs.cardsContainer.getBoundingClientRect().height
      this.$refs.cardsRightColumn.style.transform = 'translateY(0px)'
      this.$refs.developmentGoalsTitle.style.transform = 'translateY(0px)'
      this.$refs.cardsContainer.style.height = '100%'
    },
  },
}
</script>
