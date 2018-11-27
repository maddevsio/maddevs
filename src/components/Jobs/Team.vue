<template>
  <section id="team" class="team">
      <div class="container">
          <h2 class="sec-title">{{ $t('team-title') }}</h2>
          <p>
            {{ $t('team-desc') }}
            <a href="mailto:hr@maddevs.io">hr@maddevs.io</a>
          </p>
          <ButtonLink :data="{text: $t('btn-link--red'), link: 'mailto:hr@maddevs.io'}" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '../blocks/button-link';

export default {
  name: 'Team',
  components: {
    ButtonLink
  }
};
</script>
