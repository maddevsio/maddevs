<template>
  <section class="container_regular">
    <TextParagraph class="m-48_top media-m-24_top">
      GoDee is a reliable way to commute in Ho Chi Minh City, Vietnam. Its shuttle buses take express routes that
      link the city’s major districts and popular destinations. GoDee helps riders save time, money and the planet
      due to its lower ecological impact.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
      The app-based system allows users to find a route, select the time, book a seat and pay for the ride online.
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
