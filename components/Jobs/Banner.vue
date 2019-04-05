<template>
  <section id="jobs-banner" class="jobs-banner">
    <div class="container jobs-banner_wrap">
      <h1>{{ $t('jobs-banner-title') }}</h1>
      <ButtonLink :data="{text: $t('btn-link--red'), link: 'mailto:hr@maddevs.io'}" />
    </div>
  </section>
</template>

<script>
import ButtonLink from '@/components/ui/button-link';

export default {
  name: 'Banner',
  components: {
    ButtonLink
  }
};
</script>
