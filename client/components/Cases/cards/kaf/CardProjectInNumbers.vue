<template>
  <div class="card-content">
    <div class="card-content_column-item">
      <p class="card-content_title">7500</p>
      <TextParagraph color="#ffffff"> viewers in the database </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">6000+</p>
      <TextParagraph color="#ffffff"> active / current viewers </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">500</p>
      <TextParagraph color="#ffffff"> viewers per day </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">280–300</p>
      <TextParagraph color="#ffffff"> concurrent viewers </TextParagraph>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProjectInNumbers',
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/cases/_mixins';

.card-content {
  display: flex;
  justify-content: space-between;

  &_column-item {
    width: 100%;
    max-width: 193px;
    text-align: center;
  }

  &_title {
    font-family: 'Poppins-Medium', sans-serif;
    font-size: 48px;
    line-height: 62.4px;
    letter-spacing: -0.02em;
    color: $text-color--white-primary;
  }
}
</style>
