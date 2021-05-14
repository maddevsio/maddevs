<template>
  <div class="metrica-card">
    <h3 class="metrica-card_title">
      {{ title }}
    </h3>
    <p class="metrica-card_description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MetricaCard',
  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.metrica-card {
  padding: 22px 27px 30px;
  border-radius: 4px;
  background-color: $bgcolor--silver;

  &_title,
  &_description {
    letter-spacing: -0.013em;
    color: $text-color--black-oil;
  }

  &_title {
    @include font('Inter', 53px, 800);
    line-height: 74px;
  }

  &_description {
    @include font('Inter', 17px, 400);
    line-height: 24px;
  }
}
</style>
