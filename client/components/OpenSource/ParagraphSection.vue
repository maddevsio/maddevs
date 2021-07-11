<template>
  <div class="container">
    <p class="paragraph-section">
      While we love writing code, nothing excites us more than <span>collaborating</span> with other members of the <span>tech community.</span>
    </p>
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
  padding: 360px 0;
  color: $text-color--silver;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  line-height: 70px;
  letter-spacing: -0.013em;
  span {
    color: $text-color--red-dark;
  }

  @media screen and (max-width: 1024px) {
    padding: 195px 0;
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 128px 0;
    font-size: 28px;
    line-height: 40px;
  }
}
</style>
