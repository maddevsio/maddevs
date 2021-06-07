<template>
  <section class="container_regular m-48_top media-m-24_top">
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      The digital manual is a web-application developed by Mad Devs under the Ready4Trade-Central Asia project, which is a project funded by the European Union and implemented by the International Trade Center (ITC) in the Central Asian region.
    </TextParagraph>
    <TextParagraph>
      The goal of the partnership was to improve the implementation of the Export Management Coaching Initiative (EMCI), a programme where expert coaches in the field of export management train the owners of local small and medium-sized enterprises (SMEs) on how to best optimise business processes and expand trade capacity.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
      The web application improved reporting and coordination by giving the coaches a convenient tool to collect, process, and report data
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
