<template>
  <h3 class="item-title">
    <slot />
  </h3>
</template>

<script>
export default {
  name: 'UITitle',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.item-title {
  margin-bottom: 24px;
  font-size: 40px;
  font-family: 'Poppins-Bold', sans-serif;
  line-height: 120%;
  letter-spacing: -1px;
  color: $text-color--white;

  @media screen and (max-width: 1280px) {
    margin-bottom: 14px;
    font-size: 27px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 25px;
  }
}
</style>
