<template>
  <a :href="this.data.link" class="mnd-button-link--black">
    <img :src="this.icon" alt="Icon">
    {{ this.data.text }}
  </a>
</template>
<script>
export default {
  name: 'Banner',
  props: ['data'],
  data() {
    return {
      icon: require('../../assets/img/common/' + this.data.icon)
    };
  },
};
</script>
