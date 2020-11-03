<template>
  <h4 class="item-sub-title">{{ itemSubTitle }}</h4>
</template>

<script>
export default {
  name: 'UIItemSubTitle',
  props: {
    itemSubTitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/vars';

  .item-sub-title {
    font-size: 23px;
    font-family: 'Poppins-Regular', sans-serif;
    line-height: 136%;
    letter-spacing: -1px;
    color: $remote-tech-staff-sub-title-grey;

    /deep/ span {
      white-space: nowrap;
    }

    @media screen and (max-width: 1280px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 834px) {
      font-size: 18px;
    }
  }
</style>
