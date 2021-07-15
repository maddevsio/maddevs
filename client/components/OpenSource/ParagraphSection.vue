<template>
  <div
    class="paragraph-section"
    data-aos="fade-up"
  >
    <div class="container">
      <p class="paragraph-section__text">
        70+ of Mad Devs' open source projects have been shared with the community via GitHub.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ParagraphSection',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.paragraph-section {
  padding-top: 134px;
  padding-bottom: 196px;
  &__text {
    margin: 0 auto;
    width: 100%;
    max-width: 1028px;
    font-size: 64px;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: -0.013em;
    color: $text-color--green-light;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 72px;
    padding-bottom: 124px;
    &__text {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 52px;
    padding-bottom: 73px;
    &__text {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 40px;
    }
  }
}
</style>
