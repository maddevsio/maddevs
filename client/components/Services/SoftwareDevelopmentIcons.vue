<template>
  <ul class="icons-list">
    <li
      v-for="(icon, i) in icons"
      :key="i"
      :class="icon.name"
      class="icons-list__icon-item"
    >
      <img
        :data-src="require(`@/assets/img/Home/svg/technologies/${icon.name}.svg`)"
        :alt="icon.alt"
        width="26"
        height="26"
        class="img_lazy"
      >
      <span>{{ icon.alt }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SoftwareDevelopmentIcons',
  props: {
    icons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.icons-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px 1px;

  &__icon-item {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: opacity 0.2s linear;
    background-color: $software-icon-background;

    img {
      width: 26px;
      height: 26px;
      display: block;
    }

    span {
      @include font('Inter', 10px, 400);
      white-space: nowrap;
      line-height: 13px;
      letter-spacing: -0.02em;
      margin-top: 9px;
      width: 100%;
      text-overflow: ellipsis;
      text-align: center;
      color: $software-icon-text-color;

      @media only screen and (min-width: 1999px) and (max-width: 1240px) {
        font-size: 9px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media only screen and (max-width: 740px) {
    &__icon-item {
      height: 54px;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        margin-top: 8px;
        margin-bottom: -3px;
        font-size: 8px;
      }
    }
  }

  @media only screen and (max-width: 660px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
