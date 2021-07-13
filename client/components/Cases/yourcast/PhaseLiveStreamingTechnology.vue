<template>
  <section class="live-streaming-technology">
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-20_bottom">
        Phase 2: Live streaming technology
      </h3>
      <TextParagraph class="m-48_bottom media-m-20_bottom">
        To provide viewers with access to their favourite TV channels, the platform needed to emulate the TV experience.
        To add live-streaming technology, Mad Devs leveraged its existing open-source project, Yourcast.tv.
      </TextParagraph>
    </div>
    <div class="container_full background-color-black-primary case_video-wrapp">
      <video
        v-if="!isIphone"
        id="yourcast-tv"
        loop="true"
        muted="true"
        class="case_yourcast-tv"
      >
        <source
          :src="$getMediaFromS3('/videos/yourcast-tv.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
      <div
        v-else
        class="case_yourcast-tv-fallback"
      >
        <Picture
          :shadow="true"
          :width="735"
          :height="449"
          :lazy="false"
          extension="png"
          folder="yourcast"
          file="macbook-pro"
          alt="OTT-like Online Video Streaming Platform on MacBook Pro Laptop."
        />
      </div>
    </div>
    <div class="container_regular case_posters-wrapp m-60_bottom media-m-48_bottom">
      <ul class="case_posters">
        <p class="case_posters-title">
          Posters:
        </p>
        <li
          v-for="poster in posters"
          :key="poster.title"
          class="case_poster"
        >
          <a
            :href="poster.href"
            class="case_poster-link"
            target="_blank"
          >
            {{ poster.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="container_regular">
      <h4 class="case_title_h3">
        What is Yourcast.tv?
      </h4>
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
          :options="options"
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
import Picture from '@/components/Cases/shared/Picture'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/yourcast/streaming-technology.json'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import playLottieMixin from '@/mixins/playLottieMixin'
import { posters } from '@/data/caseYourcast'

export default {
  name: 'PhaseLiveStreamingTechnology',
  components: {
    TextParagraph,
    TextQuoteBox,
    Lottie,
    Picture,
  },

  mixins: [isIphoneMixin, playLottieMixin('streaming-technology', {
    animationData,
    autoplay: false,
    loop: false,
  })],

  data() {
    return {
      posters,
    }
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

  &_video-wrapp {
    overflow: hidden;
  }

  &_yourcast-tv,
  &_yourcast-tv-fallback {
    display: block;
    margin: auto;
    position: relative;
  }

  &_yourcast-tv {
    width: 100%;
    height: 100%;
    max-width: 859.41px;
    max-height: 525px;
    top: 56px;

    @media screen and (max-width: 870px) {
      top: 6.5vw;
    }
  }

  &_yourcast-tv-fallback {
    max-width: 735px;
    max-height: 449px;
    padding-top: 70px;
    top: 20px;

    @media screen and (max-width: 735px) {
      padding-top: 8vw;
      top: 2.7vw;
    }
  }

  &_posters-wrapp {
    margin-top: 15px;
  }

  &_posters-wrapp,
  &_posters {
    display: flex;
    justify-content: center;
  }

  &_posters {
    max-width: 545px;
    flex-wrap: wrap;
    align-items: center;
  }

  &_poster-link,
  &_posters-title {
    @include font('Inter', 13px, 400);
    margin-right: 3px;
    line-height: 166%;
    letter-spacing: -0.02em;
    color: $text-color--grey-img-description;

    @media screen and (max-width: 360px) {
      font-size: 11px;
    }
  }

  &_poster-link {
    text-align: center;
  }

  &_posters-title {
    margin-top: 2px;
  }
}
</style>
