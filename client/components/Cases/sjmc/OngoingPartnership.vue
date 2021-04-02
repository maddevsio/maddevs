<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Ongoing partnership
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      According to the internal CSAT survey, 98% of Mad Devs' customers find the company's service great value for
      money, and most of them stay with us for 3+ years. The SJMC is no exception.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      We are honoured to extend our partnership to improve the SJMC visitors' experience by introducing the iPadOS
      application for children. This application will offer engaging content which allows children to discover the
      centre and its resources through a series of educational games. Moreover, Mad Devs is going to develop a
      sophisticated content management system that is eventually going to simplify the deployment of new content and
      will enable the managers of the SJMC themselves to make the required changes with ease.
    </TextParagraph>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Wade Bartlett"
      position="Former Technical and Operations Director, Sir John Monash Centre"
      file="wade-bartlett"
      extension="png"
      alt="Wade Bartlett: Former Technical and Operations Director, Sir John Monash Centre."
      folder="sjmc"
    >
      The Sir John Monash Centre operates within a bespoke multimedia framework, which requires high-level technical
      expertise to deliver the Centre's visitor experience. Mad Devs provide outstanding levels of support and
      development services across our multimedia and IT platforms, systems and languages. Always available to
      provide assistance when needed, Mad Devs are a highly-valued part of our wider operations.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'

export default {
  name: 'OngoingPartnership',
  components: {
    TextParagraph,
    TextQuoteAuthor,
  },
}
</script>
