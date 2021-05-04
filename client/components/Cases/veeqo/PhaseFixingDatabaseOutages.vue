<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Phase 1: Fixing database outages
    </h2>
    <Card class="background-color-silver">
      <p class="case_card-name">
        Challenge
      </p>
      <h4 class="case_title_h4 m-8_bottom">
        Regular outage
      </h4>
      <TextParagraph>
        Without any detectable load spikes, the database would often reach maximum processor performance and deny service as the queries piled up in the query queue. To get the system up and running again, workers had to be manually restarted every time.
      </TextParagraph>
    </Card>
    <Card class="background-color-blue-light">
      <p class="case_card-name">
        Effect on users
      </p>
      <h4 class="case_title_h4 m-8_bottom">
        Degraded user services
      </h4>
      <TextParagraph>
        Users had limited access to services: they couldn't view contents, place orders, or manage their settings.
      </TextParagraph>
    </Card>
    <TextQuoteBox class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto">
      “We needed better monitoring and metrics collection to detect the true reason for the outage. We don’t sweep these things under the rug. We go for root causes.”
    </TextQuoteBox>
    <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
      Solution
    </h3>
    <TextParagraph class="m-24_top">
      As a result, we spent $180 on launching PgBouncers on two c4.large instances behind NLB and saved about 10X  the sum in the customer’s monthly costs by: Freeing up about 40 GB of RAM, Postponing the need to upgrade the RDS instance until about 6 months later.
    </TextParagraph>
    <h2 class="case_title_h2 m-48_bottom media-m-41_bottom case_text-align-center">
      Result
    </h2>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'PhaseFixingDatabaseOutages',
  components: {
    TextParagraph,
    Card,
    TextQuoteBox,
  },
}
</script>
