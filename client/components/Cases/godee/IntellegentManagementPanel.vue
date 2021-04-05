<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h2 m-96_top media-m-48_top m-12_bottom">
        Intelligent management panel
      </h3>
      <TextParagraph>
        GoDee's rapid growth since its early stages required easy-to-scale business processes and automated route
        management. Although, in theory, everything can be done with an army of sales representatives and route
        operators, GoDee wanted to automate routine operations so it could expand to other cities and countries.
      </TextParagraph>
      <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
        One manager and one customer support representative can manage more than ~2500 trip requests per month and
        ~25,000 passengers per month.
      </TextQuoteBox>
      <h3 class="case_title_h3 m-12_bottom">
        Smart route planning
      </h3>
      <TextParagraph class="case_paragraph--bold">
        How can we create profitable yet convenient user routes?
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Let users send <span class="case_red-text">trip requests</span> and tell you what works for them. This
        feature was available initially through the MVP phase, and it enables GoDee route managers to build
        effective routes by understanding real commuter demand.
      </TextParagraph>
      <TextParagraph>
        Inside the transportation application, users can submit a trip request with pick-up and drop-off locations
        at the desired time. The request is added to the list on the managers' dashboard.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <div class="case_image-wrapper m-48_top media-m-24_top m-60_bottom media-m-24_bottom case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-white"
          extension="jpg"
          alt="GoDee: Safari Browser Top Bar White."
        />
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="672"
          folder="godee"
          file="godee-admin-panel"
          extension="jpg"
          alt="GoDee: Bus Transit App Admin Panel."
        />
      </div>
      <CardGoDeePrimsAlgorithm class="m-48_bottom media-m-24_bottom" />
      <div class="case_html-video-wrapper m-48_top media-m-24_top m-60_bottom media-m-24_bottom case_box-shadow">
        <div
          v-if="isIphone"
          data-testid="test-video-flex-wrapper"
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
            :src="getMediaFromS3('/images/Cases/godee/jpg/trip-request-map.jpg')"
            class="case_img"
            alt="Trip Request Map"
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
            id="trip-request-map"
            class="case_html-video case_trip-request-video"
            width="100%"
            height="100%"
            loop="true"
            muted="true"
          >
            <source
              :src="getMediaFromS3('/videos/map-stops.mp4')"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Picture from '@/components/Cases/shared/Picture'
import CardGoDeePrimsAlgorithm from '@/components/Cases/godee/cards/CardGoDeePrimsAlgorithm'

export default {
  name: 'IntellegentManagementPanel',
  components: {
    TextParagraph,
    TextQuoteBox,
    Picture,
    CardGoDeePrimsAlgorithm,
  },

  props: {
    isIphone: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
