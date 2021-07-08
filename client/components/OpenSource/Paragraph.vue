<template>
  <div class="container">
    <p class="paragraph">
      While we love writing code, nothing excites us more than <span>collaborating</span> with other members of the <span>tech community.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.paragraph {
  margin: 359px 0;
  text-align: center;
  color: $text-color--silver;
  font-weight: 600;
  font-size: 60px;
  line-height: 70px;
  span {
    color: $text-color--red-dark;
  }
}
</style>
