<template>
  <div class="card-content">
    <img
      v-if="iconName"
      :data-src="require(`@/assets/img/Studies/svg/${iconName}.svg`)"
      :alt="iconName"
      width="51.94"
      height="51.94"
      class="card-content_icon img_lazy"
    >
    <h4 class="case_title_h4 card-content_title">
      {{ title }}
    </h4>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardGoDeeFeature',
  props: {
    iconName: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.card-content {
  &_title {
    margin-bottom: 10px;
  }

  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 13px;
  }

  @media screen and (max-width: 768px) {
    &_title,
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
