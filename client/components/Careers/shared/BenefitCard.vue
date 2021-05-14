<template>
  <div class="benefit-card__item">
    <div class="benefit-card__item-icon-wrapper">
      <img
        :data-src="$getMediaFromS3(`/images/Careers/svg/${icon.name}.svg`)"
        :width="icon.width"
        :height="icon.height"
        class="benefit-card__item-icon media_lazy"
      >
    </div>
    <p
      class="benefit-card__item-title"
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
@import '@/assets/styles/_vars.scss';

.benefit-card {
  &__item {
    padding: 16px;
    background-color: $bgcolor--silver;
    border-radius: 4px;
    &-icon {
      &-wrapper {
        height: 45px;
      }
      display: block;
    }
    &-title {
      line-height: 22px;
      letter-spacing: -0.013em;
      color: $text-color--black-oil;
    }
  }
}
</style>
