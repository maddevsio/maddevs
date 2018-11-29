<template>
  <section id="intern" class="intern">
    <div class="container">
      <h2 class="sec-title">{{ $t('interns-title') }}</h2>
      <p>{{ $t('interns-desc') }}</p>
      <ButtonLinkBlack :data="{text: $t('btn-link--black'), icon: 'github-light.svg', link: 'https://github.com/maddevsio'}" />
    </div>
  </section>
</template>

<script>
import ButtonLinkBlack from '../blocks/button-link--black';

export default {
  name: 'Intern',
  components: {
    ButtonLinkBlack
  }
};
</script>
