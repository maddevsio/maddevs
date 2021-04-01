<template>
  <section
    class="container_full p-104_top p-100_bottom media-p-41_top media-p-24_bottom background-color-black-godee"
  >
    <section class="container_regular case_real-time-eta">
      <div class="case_real-time-eta-text-content">
        <h2 class="case_title_h2 m-24_bottom media-m-8_bottom case_real-time-eta-title">
          Real-time ETA
        </h2>
        <TextParagraph
          class="m-24_bottom media-m-12_bottom"
          color="#a0a0a1"
        >
          In addition, Pifia shows in real time the approximate late/early departures.
        </TextParagraph>
        <TextParagraph
          class="m-24_bottom media-m-12_bottom"
          color="#a0a0a1"
        >
          Thus passengers who are waiting for the ride always know whether the bus is coming late and how long it
          will take.
        </TextParagraph>
        <TextParagraph color="#a0a0a1">
          The information is displayed on their mobile application.
        </TextParagraph>
      </div>
      <div class="case_phone-wrapper-eta-section">
        <Picture
          :shadow="false"
          :lazy="true"
          :width="358.96"
          :height="694.62"
          :background="false"
          folder="godee"
          file="real-time-eta-phone"
          extension="png"
          alt="GoDee: Bus Transit App in Vietnam."
        />
      </div>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'RealTimeETA',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>
