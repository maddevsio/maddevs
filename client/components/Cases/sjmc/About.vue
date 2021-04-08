<template>
  <section
    id="case-first-section"
    class="container_regular m-48_top m-96_bottom media-m-16_top media-m-48_bottom"
  >
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      The Sir John Monash Centre (SJMC) tells Australia’s story of the Western Front during the First World War in
      the words of those who served.
    </TextParagraph>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      There is much to learn from the Great War, however, ordinary history books often only explain events on a
      surface level. In contrast, using interactive multimedia installations and technologies, the 480-square metre
      interpretive centre takes visitors on a journey in the footsteps of ordinary soldiers who experienced
      extraordinary events.
    </TextParagraph>
    <TextParagraph>
      The SJMC’s technology enables each visitor to personalise their experience as they learn about the Australian
      soldiers’ stories. Visitors are "fully immersed" in a way that is not seen anywhere else.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
      World-class BYOD technology delivers an enhanced understanding of the nature and context of the Australian
      contribution to the First World War.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'About',
  components: {
    TextParagraph,
    TextQuote,
  },
}
</script>
