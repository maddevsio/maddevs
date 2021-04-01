<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Stable & Scalable solution
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Transportation and logistics software has zero tolerance to downtime. Imagine hundreds of passengers not
      being able to book their tickets, drivers not knowing where to pick up/drop off passengers or operators
      seeing empty screens.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      GoDee’s microservice architecture and the quality of the solution make it easy for each Mad Devs developer
      to deploy new features without causing spikes in downtime. On top of this, 75% of code is covered by various
      tests and has detailed documentation and pull requests. GoDee's business model greatly benefits from
      economies of scale. Thus, increased demand from Ho Chi Minh citizens is backed up by GoDee's unchanging low
      cost for infrastructure.
    </TextParagraph>
    <h2 class="case_title_h2 m-12_bottom">
      Impact
    </h2>
    <TextParagraph class="m-24_bottom">
      GoDee faced the challenge of changing people’s habits. To grow the user base, we needed to create an
      extremely helpful and hassle-free solution that offers an alternative to expensive taxis and inconvenient
      motorbikes. It was also key that it be predictable, affordable and ‘green’ by design.
    </TextParagraph>
    <Card class="background-color-orange m-118_bottom media-m-48_bottom">
      <CardGoDeeImpact />
    </Card>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import CardGoDeeImpact from '@/components/Cases/godee/cards/CardGoDeeImpact'

export default {
  name: 'InfrastructureScheme',
  components: {
    TextParagraph,
    Card,
    CardGoDeeImpact,
  },
}
</script>

<style>

</style>
