<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-12_bottom">
      Minimum viable product MVP
    </h3>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Before investing a considerable amount of money in building software, hiring personnel and acquiring
      minibuses, GoDee wanted to
      <NuxtLink
        :to="`/services/#software-development`"
        class="case_link"
      >
        develop an MVP
      </NuxtLink> to understand
      the market fit potential.
    </TextParagraph>
    <TextParagraph class="m-24_bottom">
      Although services such as GoDee exist in other parts of the world, simulating these programs in Ho Chi Minh
      City was pointless because the city’s commuting culture is quite different. That’s why user feedback was
      crucial to its improvement and key to its current rapid growth.
    </TextParagraph>
    <div class="case_minimum-viable-product-cards">
      <Card class="background-color-silver">
        <CardGoDeeFeature
          title="Live chat feature"
          icon-name="live-chat"
        >
          <TextParagraph>
            Over the time period of three months, our integrated live chat feature collected extensive feedback
            from users to make white-collar workers’ commutes easier.
          </TextParagraph>
        </CardGoDeeFeature>
      </Card>
      <Card class="background-color-silver">
        <CardGoDeeFeature
          title="Trip request"
          icon-name="trip-request"
        >
          <TextParagraph>
            This feature enabled GoDee to analyse the actual demand for travel to various Ho Chi Minh City
            districts.
          </TextParagraph>
        </CardGoDeeFeature>
      </Card>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import CardGoDeeFeature from '@/components/Cases/godee/cards/CardGoDeeFeature'

export default {
  name: 'Mvp',
  components: {
    TextParagraph,
    Card,
    CardGoDeeFeature,
  },
}
</script>
