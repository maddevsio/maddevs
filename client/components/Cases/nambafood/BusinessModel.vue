<template>
  <section class="container_regular">
    <h2 class="case_title_h2 case_text-align-center m-24_bottom media-m-12_bottom">
      Multi-directional business model
    </h2>
    <TextParagraph class="m-24_bottom case_text-align-center">
      Namba Food achieves complete synergy by diversifying to multi-directional business models.
    </TextParagraph>
    <Card class="background-color-black">
      <CardNinjaSushi />
    </Card>
    <CardsBusinessModelsGrid />
    <Card class="background-color-silver">
      <h3 class="case_title_h4 m-8_bottom">
        Namba Food API
      </h3>
      <TextParagraph>
        Namba Food API allows businesses to integrate the API into any mobile payment application. As a result,
        end-users can quickly order goods and services without leaving the app using the app’s own payment system. Such
        API benefits businesses because end users use the payment method defined by the mobile app. At the moment, Mbank
        by Commercial Bank Kyrgyzstan and Balance by Beeline, a telecommunication service provider, have successfully
        integrated Namba Food API into their mobile apps.
      </TextParagraph>
    </Card>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import CardsBusinessModelsGrid from '@/components/Cases/nambafood/cards/CardsBusinessModelsGrid'
import CardNinjaSushi from '@/components/Cases/nambafood/cards/CardNinjaSushi'

export default {
  name: 'BusinessModel',
  components: {
    TextParagraph,
    Card,
    CardsBusinessModelsGrid,
    CardNinjaSushi,
  },
}
</script>
