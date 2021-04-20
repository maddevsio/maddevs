<template>
  <div class="container_full background-color-black m-48_bottom case_black-section">
    <div class="case_black-section-content">
      <section class="container_regular">
        <h2
          :style="{ color: '#ffffff' }"
          class="case_title_h2 case_text-align-center m-48_bottom p-78_top media-m-8_bottom media-p-38_top"
        >
          Android application for couriers
        </h2>
        <TextParagraph
          color="#ffffff"
          class="case_text-align-center m-56_bottom media-m-16_bottom"
        >
          The Android app for couriers enables them to receive new orders assigned to them by operators via the control
          panel. After a courier is assigned to the order, their app receives a push notification and displays the order
          pick-up location. After getting the notification, the courier picks up the order from a cafe or a shop and
          heads to the client.
        </TextParagraph>
      </section>
      <section class="container_middle case_couriers-android-app-wrapper">
        <Picture
          :width="1230"
          :height="771"
          folder="nambafood"
          file="couriers-android-app"
          extension="png"
          alt="Namba Food: Courier App for Android."
        />
      </section>
      <div class="case_black-gradient" />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CouriersApplication',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>
