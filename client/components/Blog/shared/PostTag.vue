<template>
  <NuxtLink
    v-if="tag"
    :to="link"
  >
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
import linkResolver from '@/plugins/link-resolver.js'
import convertStringToSlug from '@/helpers/convertStringToSlug'

export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      default: '',
    },

    theme: {
      type: String,
      default: 'light',
    },
  },

  computed: {
    link() {
      return linkResolver({ type: 'tag', uid: convertStringToSlug(this.tag) })
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
