<template>
  <ul class="icons-list">
    <li 
      class="icons-list__icon-item" 
      v-for="(icon, i) in icons"
      :key="i"
      :class="icon.className"
    >
      <span>{{ icon.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SoftwareDevelopmentIcons',
  props: {
    icons: {
      type: Array,
      default: Function
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/_techIcons';

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
      transition: opacity .2s linear;
      background-color: $software-icon-background;

      &::before {
        content: '';
        width: 26px;
        height: 26px;
        display: block;
      }
  
      span {
        white-space: nowrap;
        font-family: 'Poppins-Regular', sans-serif;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-top: 9px;
        width: 100%;
        text-overflow: ellipsis;
        text-align: center;
        color: $software-icon-text-color;
      }
    }

    @media only screen and (max-width: 1199px) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media only screen and (max-width: 660px) {
      &__icon-item {
        height: 54px;

        &::before {
          width: 20px;
          height: 20px;
        }
  
        span {
          margin-top: 8px;
          font-size: 8px;
        }
      }
    }

    @media only screen and (max-width: 540px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
