<template>
  <div class="ui-link">
    <a
      v-if="disabled"
      :href="null"
    >
      <slot />
    </a>
    <router-link
      v-else
    >
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UILink',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
