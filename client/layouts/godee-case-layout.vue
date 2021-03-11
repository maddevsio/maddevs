<template>
  <div class="godee-case-layout">
    <nuxt/>
  </div>
</template>

<script>
import initDriftHelper from '@/helpers/initDrift';

export default {
  name: 'GoDeeLayout',
  mounted() {
    const scrollContainer = document.getElementById('scroll-container');
    let driftLoader = () => {
      initDriftHelper();
      scrollContainer.removeEventListener('scroll', driftLoader);
    };
    scrollContainer.addEventListener('scroll', driftLoader);
  }
};
</script>

