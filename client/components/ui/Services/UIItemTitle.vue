<template>
  <h3 class="item-title">{{ itemTitle }}</h3>
</template>

<script>
export default {
  name: 'UIItemTitle',
  props: {
    itemTitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/vars';

  .item-title {
    font-size: 40px;
    font-family: 'Poppins-Bold', sans-serif;
    line-height: 120%;
    letter-spacing: -1px;
    color: $text-color--white;

    @media screen and (max-width: 1280px) {
      font-size: 38px;
    }
  }
</style>
