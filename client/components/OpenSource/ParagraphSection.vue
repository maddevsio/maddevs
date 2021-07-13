<template>
  <div class="paragraph-section">
    <div class="container">
      <p
        v-for="paragraph in paragraphTexts"
        :key="paragraph"
        class="paragraph-section__text"
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
  padding: 360px 0;
  &__text {
    font-size: 60px;
    font-weight: 600;
    line-height: 70px;
    letter-spacing: -0.013em;
    color: $text-color--silver;
    text-align: center;
    margin-bottom: 40px;
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
    }
  }
}
</style>
