<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Trips Monitor
      </h3>
      <TextParagraph>
        The Trips Monitor feature enables operators to track every bus in real time and collect data on late or
        early arrivals. More importantly, the operator can contact drivers or passengers quickly if necessary.
      </TextParagraph>
    </section>
    <section class="container_middle m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
      <div class="case_html-video-wrapper case_box-shadow">
        <div
          v-if="isIphone"
          class="case_video-flex-wrapper"
        >
          <Picture
            :shadow="false"
            :lazy="true"
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
            src="../../../assets/img/Cases/godee/jpg/trip-monitor.jpg"
            class="case_img"
            alt="Trip Monitor"
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
            :lazy="true"
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
            id="trip-monitor"
            class="case_html-video"
            width="100%"
            height="100%"
            loop="true"
            muted="true"
          >
            <source
              :src="getPathTripMonitorVideo"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    <section class="container_regular">
      <TextParagraph class="m-12_bottom">
        The Trips Monitor dashboard displays the following information:
      </TextParagraph>
      <ListNumberedBox class="m-96_bottom media-m-48_bottom">
        <ListNumberedItemBox
          v-for="info in tripsMonitorInfo"
          :key="info"
        >
          {{ info }}
        </ListNumberedItemBox>
      </ListNumberedBox>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import Picture from '@/components/Cases/shared/Picture'
import { tripsMonitorInfo } from '@/data/caseGodee'

export default {
  name: 'TripsMonitor',
  components: {
    TextParagraph,
    ListNumberedBox,
    ListNumberedItemBox,
    Picture,
  },

  props: {
    isIphone: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      tripsMonitorInfo,
    }
  },

  computed: {
    getPathTripMonitorVideo: () => `${process.env.awsUrl}/trip-monitor.f4a33e6.mp4`,
  },
}
</script>

<style>

</style>
