<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'UIParagraph',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.paragraph {
  @include font('Inter', 16px, 400);
  line-height: 24px;
  letter-spacing: -0.02em;
  color: $remote-tech-staff-sub-title-grey;

  /deep/ span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
}
</style>
