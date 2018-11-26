<template>
  <section id="team" class="team">
      <div class="container">
          <h2 class="sec-title">Do you want to be a part of our team? </h2>
          <p>
            If you just like us are passinoate about what you are doing and believe that working hard is the only way to get better and gain relevant experince, write to
            <a href="mailto:hr@maddevs.io" class="">hr@maddevs.io</a>
          </p>
          <ButtonLink :data="this.button" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '../blocks/button-link';

export default {
  name: 'Team',
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
