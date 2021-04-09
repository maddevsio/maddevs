<template>
  <NuxtLink :to="`/blog/category/${tagUID}`">
    <div
      :class="theme"
      class="post-tag"
    >
      <span
        data-testid="test-tag"
        class="tag"
      >{{ tag }}</span>
    </div>
  </NuxtLink>
</template>

<script>
import convertStringToSlug from '@/helpers/convertStringToSlug'

export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },

    theme: {
      type: String,
      default: 'light',
    },
  },

  computed: {
    tagUID() {
      return convertStringToSlug(this.tag)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/_vars';

.post-tag {
  border-radius: 2px;
  padding: 4px 16px;
  transition: 0.2s;

  &.light {
    background-color: $bgcolor--silver;
    color: $text-color--black;
  }

  &.dark {
    background-color: $text-color--quote-box;
    color: $bgcolor--silver;
  }

  .tag {
    line-height: 22px;
    font-size: 13px;
  }
}
</style>
