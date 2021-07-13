<template>
  <button
    type="button"
    class="ui-link-btn"
  >
    <NuxtLink
      :to="link"
      class="ui-link-btn_link"
    >
      {{ title }}
    </NuxtLink>
  </button>
</template>

<script>

export default {
  name: 'UILinkButton',
  props: {
    link: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-link-btn {
  display: block;
  padding: 15px 31px 15px 28px;
  border: 0;
  border-radius: 4px;
  background-color: $bgcolor--red;
  cursor: pointer;
  box-shadow: none;
  transition: 0.4s;

  &:active {
    background-color: $button-active--red;
  }

  &_link {
    @include font('Inter', 15px, 400);
    line-height: 100%;
    letter-spacing: -0.013em;
    color: $text-color--silver;
    text-decoration: none;
  }
}
</style>
