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
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  components: {
    Lottie,
  },

  mixins: [initLazyLoadMixin, playLottieMixin('404-code', {
    animationData,
    autoplay: true,
  })],

  layout: 'error-layout',
}
</script>

<style lang="scss" scoped>
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
    position: relative;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 166%;
    letter-spacing: -0.035em;
    text-decoration: none;
    color: $text-color--white-primary;

    &:before {
      content: '';
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KICA8ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+CiAgICA8ZyBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj4KICAgICAgPHBhdGggZD0iTTU3LjEgMTAzLjNMMTcuOCA2NE0xNy44IDY0bDM5LjMtMzkuMyIvPgogICAgPC9nPgogICAgPHBhdGggZD0iTTE3LjggNjRoMTAwLjQiLz4KICA8L2c+Cjwvc3ZnPgo=) no-repeat;
      width: 15px;
      height: 15px;
      position: absolute;
      left: -22px;
      top: 6px;
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

      &::before {
        width: 14px;
        height: 14px;
        left: -21px;
        top: 5px;
      }
    }
  }
}
</style>
