<template>
  <NuxtLink
    v-if="tag"
    :event="disabled ? '' : 'click'"
    :to="link"
    class="post-tag"
    :class="`post-tag--${theme}-theme`"
    data-testid="test-tag"
  >
    {{ tag }}
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

    disabled: {
      type: Boolean,
      default: false,
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
.post-tag {
  white-space: nowrap;
  font-size: 13px;
  line-height: 22px;
  padding: 4px 16px;
  border-radius: 2px;
  transition: 0.2s;
  &--light-theme {
    background-color: $bgcolor--silver;
    color: $text-color--black;
  }
  &--dark-theme {
    background-color: $text-color--quote-box;
    color: $bgcolor--silver;
  }
}
</style>
