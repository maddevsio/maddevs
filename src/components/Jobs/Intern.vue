<template>
  <section id="intern" class="intern">
    <div class="container">
      <h2 class="sec-title">For interns and junior-developers</h2>
      <p>The chance to get into our team is higher if you are constantly contributing to one of our open source projects you liked.</p>
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
