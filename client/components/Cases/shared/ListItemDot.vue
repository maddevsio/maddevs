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
.list-item_dot {
  position: relative;
  margin-bottom: 14px;
  padding-left: 25px;
  @include default-text($text-color--black-oil, 17px, 166%, -0.035em, normal);

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '\2022';
    position: absolute;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    @include default-text($text-color--black-oil, 16px, 150%, -0.02em, normal);
  }
}
</style>
