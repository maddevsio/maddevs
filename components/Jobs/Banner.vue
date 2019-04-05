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

<style lang="scss" scoped>
.jobs-banner {
  width: 100%;
  min-height: 610px;
  background-image: url(../../assets/img/Jobs/jpg/Banner/banner@2x.jpg);
  background-size: cover;
  background-position: center;
  &_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 160px;
    padding-bottom: 60px;
    h1 {
      max-width: 795px;
      font-size: 52px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      font-weight: normal;
      line-height: 1.33;
      letter-spacing: -0.4px;
      color: #fff;
      text-align: center;
      margin-bottom: 60px;
    }
  }
}
</style>

