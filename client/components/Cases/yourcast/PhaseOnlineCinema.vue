<template>
  <section class="case_phase-online-cinema">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Phase 1: Online cinema
      </h2>
      <TextParagraph class="m-24_bottom">
        Initially, it was decided to create a movie library with previews, duration information, etc. Purchasing videos
        was the easiest part. Pulling a good description for each movie from an external source eliminated the routine
        work related to content management. To address this issue.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver"
    >
      <div class="container_regular">
        <Lottie
          id="online-cinema"
          :options="lottieOptions"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
    <div class="container_regular">
      <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
        Mad Devs integrated the platform with Plex Media Server, which provides free movie descriptions via an API.
      </TextQuote>
      <h3 class="case_title_h3 m-12_bottom">
        TV shows & TV series
      </h3>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        To support the rising demand for content, the platform needed to accommodate TV shows and series. Each
        TV series collection was split into seasons for better navigation. Viewers could track their progress; some
        series were marked as already watched, and the remaining were added to the suggested content. The
        viewer could mark episodes as watched, or the platform did it automatically for them.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import TextQuote from '@/components/Cases/TextQuote'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/yourcast/phase-online-cinema.json'
import playLottie from '@/helpers/playLottie'

export default {
  name: 'PhaseOnlineCinema',
  components: {
    TextParagraph,
    TextQuote,
    Lottie,
  },

  data() {
    return {
      lottieOptions: {
        animationData,
        autoplay: false,
      },
    }
  },

  methods: {
    handleAnimation(animation) {
      playLottie(animation, 'online-cinema')
    },
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_lottie {
      max-width: 467px;
      padding: 26px 0;
    }
  }
</style>
