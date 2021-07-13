<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Phase 1: Fixing database outages
    </h2>
    <div class="case_cards-container">
      <Card class="background-color-silver">
        <TextParagraphUppercase class="case_card-name m-10_bottom media-m-8_bottom">
          Challenge
        </TextParagraphUppercase>
        <h3 class="case_title_h4 m-10_bottom media-m-8_bottom">
          Regular outage
        </h3>
        <TextParagraph>
          Without any detectable load spikes, the database would often reach maximum processor performance and deny service as the queries piled up in the query queue. To get the system up and running again, workers had to be manually restarted every time.
        </TextParagraph>
      </Card>
      <Card class="background-color-blue-light">
        <TextParagraphUppercase class="case_card-name m-10_bottom media-m-8_bottom">
          Effect on users
        </TextParagraphUppercase>
        <h3 class="case_title_h4 m-10_bottom media-m-8_bottom">
          Degraded user services
        </h3>
        <TextParagraph>
          Users had limited access to services: they couldn't view contents, place orders, or manage their settings.
        </TextParagraph>
      </Card>
    </div>
    <TextQuoteBox
      class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto"
      author="Andrew Sapozhnikov, Head of DevOps at Mad Devs"
    >
      “We needed better monitoring and metrics collection to detect the true reason for the outage. We don’t sweep these things under the rug. We go for root causes.”
    </TextQuoteBox>
    <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
      Solution
    </h3>
    <div class="case_solution-cards">
      <CardTechSolution
        v-for="solution in techSolutions"
        v-bind="solution"
        :key="solution.icon"
        folder="veeqo"
      />
    </div>
    <TextParagraph class="m-48_top m-48_bottom media-m-24_bottom">
      As a result, we spent $180 on launching PgBouncers on two c4.large instances behind NLB and saved about 10X  the sum in the customer’s monthly costs by: Freeing up about 40 GB of RAM, Postponing the need to upgrade the RDS instance until about 6 months later.
    </TextParagraph>
    <img
      :data-src="$getMediaFromS3('/images/Cases/veeqo/svg/pg-bouncer-diagram.svg')"
      width="818"
      height="560"
      alt="PgBouncers Diagram."
      class="case_pg-bouncer-diagram media_lazy m-48_bottom"
    >
    <h3 class="case_title_h2 case_title-result m-48_bottom media-m-41_bottom">
      Result
    </h3>
    <FixingDatabaseOutagesResult class="m-96_bottom media-m-48_bottom" />
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import TextParagraphUppercase from '@/components/Cases/shared/TextParagraphUppercase'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import FixingDatabaseOutagesResult from '@/components/Cases/veeqo/FixingDatabaseOutagesResult'
import { techSolutions } from '@/data/caseVeeqo'

export default {
  name: 'PhaseFixingDatabaseOutages',
  components: {
    TextParagraph,
    Card,
    TextQuoteBox,
    TextParagraphUppercase,
    CardTechSolution,
    FixingDatabaseOutagesResult,
  },

  data() {
    return {
      techSolutions,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 25px, 0);
  }

  &_solution-cards {
    @include grid(repeat(2, 1fr), auto, 25px, 25px);
  }

  &_title-result {
    text-align: center;
  }

  &_pg-bouncer-diagram {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 880px) {
    &_cards-container,
    &_solution-cards {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_title-result {
      text-align: left;
    }
  }
}
</style>
