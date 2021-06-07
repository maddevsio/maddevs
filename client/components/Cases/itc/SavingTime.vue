<template>
  <section class="container_regular">
    <h3 class="case_title_h3 media-m-12_bottom">
      Saving time
    </h3>
    <TextParagraph>
      Instead of filling out hundreds of pages of the paper-based manual, R4TCA coaches can focus on the aspects of their work that truly add value to stakeholders, i.e. coaching and collaborating with SMEs. Running a digital manual is also more convenient to report progress and derive automatic statistics.
    </TextParagraph>
    <TextQuoteBox
      class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
      author="Sandjar Hudaynazarov, EMCI Lead Coach, Central Asia"
    >
      I had concerns that coaches would find it difficult to deal with a digital instrument and that they would be reluctant to switch to it. However, the web app is so user-friendly and intuitive that the coaches got the hang of it easily.
    </TextQuoteBox>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      To help the coaches get the hang of the web application, we also prepared a user manual to guide users through the application’s functionality. The guide features screenshots from the digital manual to make learning easier.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'SavingTime',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>
