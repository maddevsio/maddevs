<template>
  <section class="container_regular m-48_top m-96_bottom media-m-16_top media-m-48_bottom">
    <TextParagraph>
      Mad Devs developed the Namba Food delivery service from scratch. The apps for couriers, end-users placing orders
      and business owners work as a seamless system, ensuring a smooth delivery process for all types of goods.
    </TextParagraph>
    <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
      Namba Food is a unique delivery service that combines speed, convenience and simplicity.
    </TextQuoteBox>
    <TextParagraph>
      Being first is hard. Namba Food’s success story focuses on how they took a global idea and successfully localised
      and integrated it into the daily lives of Kyrgyzstan's people. Since 2013, the company has been on a mission to
      bring value to both vendors and customers by conveniently delivering goods at the right time.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import TextQuoteBox from '@/components/Cases/TextQuoteBox'

export default {
  name: 'About',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>