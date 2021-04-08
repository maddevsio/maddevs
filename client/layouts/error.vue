<template>
  <div class="error-page container">
    <Lottie
      id="404-code"
      class="error-page_lottie"
      :options="options"
      @animCreated="handleAnimation"
    />
    <h1 class="error-page_title">
      The page you were looking for doesn’t exist.
    </h1>
    <NuxtLink
      to="/"
      class="error-page_link"
    >
      Back to our site
    </NuxtLink>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/error/404.json'
import playLottieMixin from '@/mixins/playLottieMixin'

export default {
  components: {
    Lottie,
  },

  mixins: [playLottieMixin('404-code', {
    animationData,
    autoplay: true,
  })],

  layout: 'error-layout',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars';
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 250px;
  padding-bottom: 282px;

  &_lottie {
    height: 12.1vw !important;
    max-width: 821px;
    max-height: 170px;
    min-height: 56px;
  }

  &_title {
    max-width: 610px;
    margin-top: 40px;
    margin-bottom: 55px;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -1px;
    text-align: center;
    color: $text-color--white;
  }

  &_link {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 166%;
    letter-spacing: -0.035em;
    text-decoration: none;
    color: $text-color--white-primary;

    &:before {
      content: '←';
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 880px) {
    padding-top: 150px;
    padding-bottom: 90px;

    &_title {
      max-width: 327px;
      margin-top: 31px;
      margin-bottom: 65px;
      font-size: 27px;
      line-height: 142%;
      letter-spacing: -1px;
    }

    &_link {
      font-size: 16px;
      line-height: 150%;

      &:before {
        font-size: 29px;
      }
    }
  }
}
</style>
