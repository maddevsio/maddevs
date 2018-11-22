<template>
  <main class="main">
    <Banner />
  </main>
</template>

<script>
import Banner from './Banner';

export default {
  name: 'Jobs',
  props: ['language'],
  data() {
    return {
      description: this.$t('meta-desc'),
    };
  },
  components: {
    Banner,
  },
  head: {
    meta: function () {
      return [
        {name: 'description', content: this.description},
      ];
    }
  },
};
</script>
