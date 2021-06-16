<template>
  <section>
    <section class="container_regular">
      <h3 class="text-center case_title_h3 m-107_top m-24_bottom media-m-48_top">
        Website and mobile app infrastructure scheme
      </h3>
    </section>
    <section class="container_full background-color-silver">
      <div class="container_regular">
        <Lottie
          id="website-and-mobile-apps"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </section>
    <section class="container_regular">
      <TextParagraph class="m-24_top">
        A local hosting provider is used to host the infrastructure. When a system receives a request from the client,
        it is handled by the Nginx proxy. When the Mad Devs team deploys a new version, we use the Nginx Gen server. The
        Nginx proxy sends requests to the website, which is in turn connected to the MySQL database, and Redis serves as
        an in-memory key-value storage.
      </TextParagraph>
      <TextParagraph class="m-24_top media-m-12_top">
        All our services run in Docker containers, which simplifies the process of infrastructure maintenance and
        monitoring.
      </TextParagraph>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'
import animationData from '@/assets/lottie/nambafood/website-and-mobile-apps.json'

export default {
  name: 'InfrastructureSchema',
  components: {
    TextParagraph,
    Lottie,
  },

  mixins: [playLottieMixin('website-and-mobile-apps', {
    animationData,
    autoplay: false,
    loop: false,
  })],
}
</script>

<style scoped lang="scss">
  .case {
    &_lottie {
      max-width: 455px;
      padding: 55px 0;
      position: relative;
      left: 45px;

      @media screen and (max-width: 768px) {
        padding: 35px 0;
      }

      @media screen and (max-width: 576px) {
        max-width: 230px;
        padding: 20px 0;
        left: 16px;
      }
    }
  }

  .text-center {
    text-align: center;
  }
</style>
