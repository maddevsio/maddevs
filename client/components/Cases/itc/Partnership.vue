<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Mad Devs and ITC partnership
    </h2>
    <TextParagraph class="case_bold-text m-12_bottom">
      The collaboration between Mad Devs and ITC was mutually enjoyable. Our team was happy to contribute to ITC’s mission, and our partners appreciated Mad Dev’s professionalism.
    </TextParagraph>
    <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
      The views and opinions expressed here are those of the authors and of Mad Devs and do not necessarily reflect the official policy or position of either the International Trade Centre or the European Union. Any content provided by the authors is of their opinion only.
    </TextQuoteBox>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'Partnership',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>
