<template>
  <div class="paragraph-section">
    <div class="container">
      <p
        v-for="paragraph in paragraphTexts"
        :key="paragraph"
        class="paragraph-section__text"
        :class="`paragraph-section__text--${i}`"
        data-aos="fade-up"
        :data-aos-anchor="(i > 0) ? `paragraph-section__text--${i - 1}` : null"
        v-html="paragraph"
      />
    </div>
  </div>
</template>

<script>
import { paragraphTexts } from '@/data/openSourceTexts'

export default {
  name: 'ParagraphSection',
  data() {
    return {
      paragraphTexts,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.paragraph-section {
  padding: 120px 0;
  &__text {
    margin: 0 auto;
    width: 100%;
    max-width: 860px;
    font-size: 42px;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: -0.013em;
    color: $text-color--silver;
    text-align: center;
    margin-bottom: 80px;
    &:nth-child(1) {
      /deep/ span {
        color: $text-color--red-dark;
      }
    }
    &:nth-child(2) {
      /deep/ span {
        color: $text-color--green;
      }
    }
    &:nth-child(3) {
      /deep/ span {
        color: $text-color--yellow;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 195px 0;
    &__text {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 128px 0;
    &__text {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 520px) {
    &__text {
      /deep/ br {
        display: none;
      }
    }
  }
}
</style>
