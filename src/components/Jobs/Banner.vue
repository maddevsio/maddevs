<template>
  <section id="jobs-banner" class="jobs-banner">
    <div class="container jobs-banner_wrap">
      <h1>Our team always need experienced and cool specialists as well as budding juniors and interns</h1>
      <ButtonLink :data="this.button" />
    </div>
  </section>
</template>

<script>
import ButtonLink from '../blocks/button-link';

export default {
  name: 'Banner',
  data() {
    return {
      button: {
        text: 'Send Your CV',
        link: '#'
      }
    };
  },
  components: {
    ButtonLink
  }
};
</script>
