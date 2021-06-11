<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Mad Devs and ITC partnership
    </h2>
    <TextParagraph class="case_bold-text m-12_bottom">
      The collaboration between Mad Devs and ITC was mutually enjoyable. Our team was happy to contribute to ITC’s mission, and our partners appreciated Mad Dev’s professionalism.
    </TextParagraph>
    <TextQuoteBox class="m-48_top m-120_bottom media-m-24_top media-m-48_bottom m-auto">
      The views and opinions expressed here are those of the authors and of Mad Devs and do not necessarily reflect the official policy or position of either the International Trade Centre or the European Union. Any content provided by the authors is of their opinion only.
    </TextQuoteBox>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Augustin Baret"
      position="Trade Facilitation Consultant at International Trade Centre"
      file="augustin-baret"
      extension="png"
      alt="Augustin Baret"
      folder="common"
    >
      We appreciate that the team took time to listen to us and to understand our needs. We also liked the professional approach: weekly reports helped us a lot to keep track of progress. We hope we’ll work together again in the future.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'

export default {
  name: 'Partnership',
  components: {
    TextParagraph,
    TextQuoteBox,
    TextQuoteAuthor,
  },
}
</script>
