<template>
  <li class="list-item_dot">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListItemDot',
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/cases/_mixins';

.list-item_dot {
  position: relative;
  margin-bottom: 14px;
  padding-left: 25px;
  @include default_text($text-color--black-cases, 17px, 166%, -0.035em, normal);

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '\2022';
    position: absolute;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    @include default_text($text-color--black-cases, 16px, 150%, -0.02em, normal);
  }
}
</style>
