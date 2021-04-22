<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3">
        Route optimization
      </h3>
    </section>
    <section class="container_middle m-24_top media-m-12_top m-48_bottom media-m-24_bottom">
      <div class="case_html-video-wrapper case_box-shadow">
        <div
          v-if="isIphone"
          class="case_video-flex-wrapper"
          data-testid="test-case_video-flex-wrapper"
        >
          <Picture
            :shadow="false"
            :radius="false"
            :width="1026"
            :height="16.45"
            :background="true"
            folder="common"
            file="safari-top-bar-white"
            extension="jpg"
            alt="GoDee: Safari Browser Top Bar White."
          />
          <img
            :src="$getMediaFromS3('/images/Cases/godee/jpg/route-optimization.jpg')"
            class="case_img"
            alt="Route Optimization"
            loading="lazy"
            width="1028"
            height="483.81"
          >
        </div>
        <div
          v-else
          class="case_video-flex-wrapper"
        >
          <Picture
            :shadow="false"
            :radius="false"
            :width="1026"
            :height="16.45"
            :background="true"
            folder="common"
            file="safari-top-bar-white"
            extension="jpg"
            alt="GoDee: Safari Browser Top Bar White."
          />
          <video
            id="route-optimization"
            class="case_html-video"
            width="100%"
            height="100%"
            loop="true"
            muted="true"
          >
            <source
              :src="$getMediaFromS3('/videos/route-optimization.f5a2ff0.mp4')"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    <section class="container_regular">
      <TextParagraph>
        With the help of detailed drivers' performance data, Mad Devs’ Pifia microservice enables route managers to
        optimize ETA (estimated time of arrival). Pifia shows more accurate arrival and departure times with just
        one click.
      </TextParagraph>
      <TextQuoteBox class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto">
        <span
          class="case_text-quote-break m-24_bottom media-m-12_bottom"
        >Examples of early and late departure times:</span>
        <span>If Pifia determines that a minibus is usually late due to increased traffic at 5:35 pm and not 5:30 pm,
          it alerts the route manager to shift the arrival time to 5:35 pm. Five minutes might sound minor, but
          these small optimizations add up.</span>
      </TextQuoteBox>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'RouteOptimisation',
  components: {
    TextParagraph,
    TextQuoteBox,
    Picture,
  },

  props: {
    isIphone: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
