<template>
  <section class="live-streaming-technology">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-20_bottom">
        Phase 2: Live streaming technology
      </h2>
      <TextParagraph class="m-48_bottom media-m-20_bottom">
        To provide viewers with access to their favourite TV channels, the platform needed to emulate the TV experience.
        To add live-streaming technology, Mad Devs leveraged its existing open-source project, Yourcast.tv.
      </TextParagraph>
      <h3 class="case_title_h3">
        What is Yourcast.tv?
      </h3>
      <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
        Yourcast.tv by Mad Devs is used to create TV-like streams using YouTube video content. All you need is to create a
        list of YouTube videos that you want to stream. The streaming starts a few seconds after you save your list of
        videos.
        <span class="case_blockquote-box_text-modificator"> Read more about Yourcast.TV. </span>
      </TextQuoteBox>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The customer purchased access to several popular TV channels streamed online, and Mad Devs added additional code
        to start re-streaming the channels using Yourcast.TV. As a result, the platform’s viewers received a selection of
        TV channel streams on their devices. HBO, Showtime and other TV channels were seamlessly added to the list of
        available options.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        Technically, Django was used for storing stream entries for the Live TV service. The admin created the entries
        that the platform’s Live TV service then pulled down from Django.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver m-96_bottom media-m-48_bottom"
    >
      <div class="container_regular">
        <Lottie
          id="streaming-technology"
          :options="lottieOptions"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/yourcast/streaming-technology.json'
import playLottie from '@/helpers/playLottie'

export default {
  name: 'PhaseLiveStreamingTechnology',
  components: {
    TextParagraph,
    TextQuoteBox,
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
      playLottie(animation, 'streaming-technology')
    },
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_lottie {
      max-width: 562px;
      padding: 107px 0;

      @media screen and (max-width: 480px) {
        padding: 60px 0;
      }
    }
  }
</style>
