<template>
  <section id="jobs-banner" class="jobs-banner">
    <div class="container jobs-banner_wrap">
      <h1>{{ $t('jobs-banner-title') }}</h1>
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
        link: 'mailto:hr@maddevs.io'
      }
    };
  },
  components: {
    ButtonLink
  }
};
</script>
