<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Phase 4: Video on demand
    </h2>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      Video on Demand (VoD) functionality was added to the platform in 2019. To adapt it to the most current VoD
      standards, Mad Devs leveraged Nimble Streamer and Nimble Transcoder. The viewers received access to the
      present-day VoD experience, enabling on-the-go movie ordering and MD5 hotlink protection.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'PhaseVideoOnDemand',
  components: {
    TextParagraph,
  },
}
</script>
