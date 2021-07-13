<template>
  <div class="benefit-card">
    <div class="benefit-card__icon-wrapper">
      <img
        :data-src="$getMediaFromS3(`/images/Careers/svg/${icon.name}.svg`)"
        :width="icon.width"
        :height="icon.height"
        :alt="icon.alt"
        class="benefit-card__icon media_lazy"
      >
    </div>
    <p
      class="benefit-card__title"
      v-html="title"
    >
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BenefitCard',
  props: {
    icon: {
      type: Object,
      default: () => {},
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scroped>
.benefit-card {
  padding: 16px;
  background-color: $bgcolor--silver;
  border-radius: 4px;
  &__icon {
    display: block;
    &-wrapper {
      height: 45px;
    }
  }
  &__title {
    line-height: 22px;
    letter-spacing: -0.013em;
    color: $text-color--black-oil;
  }
}
</style>
