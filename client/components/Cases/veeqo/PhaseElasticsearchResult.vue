<template>
  <section class="container_full background-color-blue m-96_bottom media-m-48_bottom p-48_top media-p-41_top p-28_bottom media-p-38_bottom">
    <div class="container_regular">
      <h3 class="case_title_h2 case_title case_text-align-center m-32_bottom">
        Result
      </h3>
      <div class="case_cards-container m-60_bottom media-m-32_bottom">
        <CardResult
          v-for="result in elasticsearchResults"
          v-bind="result"
          :key="result.title"
          v-prlx="result.animationSettings"
          class="case_result-card"
        />
      </div>
      <TextParagraph class="case_description case_text-align-center">
        Now, Elasticsearch is back to three nodes; in fact, two are enough for normal operation, and the third is there to ensure fail-safety.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import CardResult from '@/components/Cases/veeqo/CardResult'
import { elasticsearchResults } from '@/data/caseVeeqo'

export default {
  name: 'PhaseElasticsearchResult',
  components: {
    TextParagraph,
    CardResult,
  },

  data() {
    return {
      elasticsearchResults,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title,
  &_description {
    color: $text-color--white;
  }

  &_cards-container {
    @include grid(repeat(3, 1fr), auto, 25px, 0);

    @media screen and (max-width: 880px) {
      @include grid(repeat(1, 1fr), auto, 0, 16px);
    }
  }

  &_result-card {
    position: relative;

    &:nth-child(2) {
      top: 20px;
    }

    &:nth-child(3) {
      top: 40px;
    }

    @media screen and (max-width: 880px) {
      &:nth-child(2),
      &:nth-child(3) {
        top: 0;
      }
    }
  }
}

/deep/ .card {
  justify-content: space-between;
}
</style>
