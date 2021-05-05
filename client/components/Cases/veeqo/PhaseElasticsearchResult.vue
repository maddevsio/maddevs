<template>
  <section class="container_full background-color-blue m-96_bottom media-m-48_bottom p-48_top media-p-41_top p-28_bottom media-p-38_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title case_text-align-center">
        Result
      </h2>
      <TextParagraph class="case_description case_text-align-center">
        Now, Elasticsearch is back to three nodes; in fact, two are enough for normal operation, and the third is there to ensure fail-safety.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'PhaseElasticsearchResult',
  components: {
    TextParagraph,
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.case {
  &_title,
  &_description {
    color: $text-color--white;
  }
}
</style>
