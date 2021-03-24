<template>
  <div class="godee-case-layout">
    <nuxt />
  </div>
</template>

<script>
import initIntercomHelper from '@/helpers/initIntercom';

export default {
  name: 'GoDeeLayout',
  mounted() {
    const scrollContainer = document.getElementById('case-scroll-container');
    const driftLoader = () => {
      initIntercomHelper();
      scrollContainer.removeEventListener('scroll', driftLoader);
    };
    scrollContainer.addEventListener('scroll', driftLoader);
  },
};
</script>

