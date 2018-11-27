<template>
  <section id="intern" class="intern">
    <div class="container">
      <h2 class="sec-title">{{ $t('interns-title') }}</h2>
      <p>{{ $t('interns-desc') }}</p>
      <ButtonLinkBlack :data="this.button" />
    </div>
  </section>
</template>

<script>
import ButtonLinkBlack from '../blocks/button-link--black';

export default {
  name: 'Intern',
  data() {
    return {
      button: {
        link: 'https://github.com/maddevsio',
        text: 'Mad Devs on GitHub',
        icon: 'github-light.svg'
      }
    };
  },
  components: {
    ButtonLinkBlack
  }
};
</script>
