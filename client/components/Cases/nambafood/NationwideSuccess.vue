<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
      Nationwide success and day-to-day improvements
    </h2>
    <TextParagraph>
      Launched in 2013, Namba Food became a fully self-supported service in just two years. Due to Namba Food’s vision
      and understanding of its target audience, we were able to
      <nuxt-link :to="`/services#software-development`" class="case_link">build a product</nuxt-link> that truly solves
      this customer’s problems. The year-over-year growth rate is hugely impressive.
    </TextParagraph>
    <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
      As the number of businesses using Namba Food continues to increase,
      <span class="case_blockquote-box_text-modificator"
        >the service's yearly growth rate is about 50% for both revenue and deliveries made.</span
      >
    </TextQuoteBox>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      In 2017, Namba Food won a prestigious all-country award for the Best Online Service in Kyrgyzstan at a KIT forum.
    </TextParagraph>
    <div class="case_nationwide-cards m-72_bottom media-m-48_bottom">
      <Card class="background-color-silver">
        <CardDeliveryServiceNambafood />
      </Card>
      <Card class="background-color-silver case_restaurant-talisman-card">
        <CardRestaurantTalisman />
      </Card>
      <Card class="background-color-silver">
        <CardNationwideNumbers />
      </Card>
    </div>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Aziza Anarbekova"
      position="Co-Founder, Namba Food"
      file="aziza-anarbekova"
      extension="png"
      alt="Aziza Anarbekova Namba Food Delivery Service Co-Founder."
      folder="nambafood"
    >
      “Thanks to our close collaboration, we saw a notable increase in the return on investment, as the number of orders
      grew by 53% YoY. The Mad Devs Team always surpasses expectations and stays open to suggestions. The team's
      competency and dedication enabled the prolonged partnership between our companies.”
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Card from '@/components/Cases/shared/Card'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'
import CardDeliveryServiceNambafood from '@/components/Cases/nambafood/cards/CardDeliveryServiceNambafood'
import CardRestaurantTalisman from '@/components/Cases/nambafood/cards/CardRestaurantTalisman'
import CardNationwideNumbers from '@/components/Cases/nambafood/cards/CardNationwideNumbers'

export default {
  name: 'NationwideSuccess',
  components: {
    TextParagraph,
    TextQuoteBox,
    Card,
    TextQuoteAuthor,
    CardDeliveryServiceNambafood,
    CardRestaurantTalisman,
    CardNationwideNumbers,
  },
}
</script>

<style></style>