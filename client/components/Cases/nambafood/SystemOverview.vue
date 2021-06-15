<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-12_bottom media-m-48_top case_text-align-center">
        High-level system overview
      </h2>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Namba Food is more than a delivery service website. With a partial vertical integration, it covers the entire
        cycle of ordering goods online. This means that an advanced set of software and hardware was required to
        maintain flawless work for all stakeholders, including end-users, couriers, team operators, and cafe and store
        managers.
      </TextParagraph>
    </section>
    <section class="container_full background-color-silver">
      <div class="container_regular">
        <Lottie
          id="high-level-system-overview"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'
import animationData from '@/assets/lottie/nambafood/high-level-system-overview.json'

export default {
  name: 'SystemOverview',
  components: {
    TextParagraph,
    Lottie,
  },

  mixins: [playLottieMixin('high-level-system-overview', {
    animationData,
    autoplay: false,
    loop: false,
  })],
}
</script>
