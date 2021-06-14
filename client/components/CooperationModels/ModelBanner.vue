<template>
  <div class="model-banner">
    <h1
      class="model-banner__title"
      v-html="title"
    />
    <p
      v-if="subtitle"
      class="model-banner__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ModelBanner',
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.model-banner {
  padding: 168px 0 108px;
  color: $text-color--white-primary;
  &__title {
    font-size: 60px;
    line-height: 68px;
    letter-spacing: -0.04em;
  }
  &__subtitle {
    margin-top: 67px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.013em;
    font-weight: 600;
  }
}
</style>
