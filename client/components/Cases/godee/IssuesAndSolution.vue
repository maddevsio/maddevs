<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Issues and solution
    </h2>
    <TextParagraph>
      Transportation has become a major issue in Vietnam cities due to the rapid increase (36%) in urbanization.
      With its slow, unairconditioned, overcrowded public transport, commuters living in the suburbs were left
      with only 3 other alternatives: personal cars, motorbikes and taxis.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'IssuesAndSolution',
  components: {
    TextParagraph,
  },
}
</script>
