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
import ButtonLinkBlack from '@/components/ui/button-link--black';

export default {
  name: 'Intern',
  components: {
    ButtonLinkBlack
  }
};
</script>

<style lang="scss" scoped>
.intern {
  margin-top: 120px;
  background-color: #e8e8e8;
  padding: 60px 0;

  p {
    max-width: 710px;
    font-size: 28px;
    color: #000;
    font-family: 'MADEEvolveSans-regular', sans-serif;
    line-height: 1.5;
    margin: 30px auto 0;
    text-align: center;
  }
}
</style>

