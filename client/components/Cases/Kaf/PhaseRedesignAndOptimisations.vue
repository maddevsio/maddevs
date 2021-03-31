<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">Phase 3: Redesign & optimisations</h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      To reduce traffic while re-streaming movies and TV series, Mad Devs used Nimble Streamer and Nimble Transcoder. As
      the source provided maximum quality, re-streaming of the ‘heavy’ content was overly expensive. To maintain high
      quality while reducing costs, files were split into data packages by Nimble Streamer and sent to the viewer’s
      browser.
    </TextParagraph>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      As all parts of the projects were developed independently during the first two phases, Mad Devs redesigned the
      platform infrastructure to orchestrate all of its services. The project became more organised and cost-effective,
      which was important for further growth.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'

export default {
  name: 'PhaseRedesignAndOptimisations',
  components: {
    TextParagraph,
  },
}
</script>

<style></style>