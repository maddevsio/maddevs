<template>
  <section class="case_redesign-and-optimisations">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Phase 3: Redesign & optimisations
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        To reduce traffic while re-streaming movies and TV series, Mad Devs used Nimble Streamer and Nimble Transcoder. As
        the source provided maximum quality, re-streaming of the ‘heavy’ content was overly expensive. To maintain high
        quality while reducing costs, files were split into data packages by Nimble Streamer and sent to the viewer’s
        browser.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        As all parts of the projects were developed independently during the first two phases, Mad Devs redesigned the
        platform infrastructure to orchestrate all of its services. The project became more organised and cost-effective,
        which was important for further growth.
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver">
      <div class="container_regular">
        <Lottie
          id="redesign-and-optimisations"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
    <TextParagraph class="m-104_bottom media-m-48_bottom case_text-align-center case_lottie-description">
      Full Platform Architecture:
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/yourcast/phase-redesign-and-optimisations.json'
import playLottieMixin from '@/mixins/playLottieMixin'

export default {
  name: 'PhaseRedesignAndOptimisations',
  components: {
    TextParagraph,
    Lottie,
  },

  mixins: [playLottieMixin('redesign-and-optimisations', {
    animationData,
    autoplay: false,
    loop: false,
  })],
}
</script>

<style lang="scss" scoped>
  .case {
    &_lottie {
      max-width: 470px;
      padding-top: 68px;
      padding-bottom: 60px;

      @media screen and (max-width: 480px) {
        padding-top: 40px;
        padding-bottom: 34px;
      }
    }

    &_lottie-description {
      margin-top: 12px;
      font-size: 13px;
      line-height: 166%;
      letter-spacing: -0.02em;
      color: $text-color--grey-img-description;
    }
  }
</style>
