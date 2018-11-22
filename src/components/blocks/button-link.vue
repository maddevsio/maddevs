<template>
  <a :href="this.data.link" class="mnd-button-link">
    {{ this.data.text }}
  </a>
</template>
<script>

export default {
  name: 'Banner',
  props: ['data']
};
</script>
