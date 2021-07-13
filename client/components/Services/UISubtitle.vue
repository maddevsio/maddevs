<template>
  <h4 class="item-sub-title">
    <slot />
  </h4>
</template>

<script>
export default {
  name: 'UISubtitle',
}
</script>

<style lang="scss" scoped>
.item-sub-title {
  @include font('Poppins', 23px, 600);
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
