<template>
  <a :href="this.data.link" class="mnd-button-link" target="_blank" rel="noreferrer">
    {{ this.data.text }}
  </a>
</template>
<script>

export default {
  name: 'Banner',
  props: ['data']
};
</script>
