<template>
  <section class="container_full background-color-blue p-48_top media-p-41_top p-56_bottom media-p-41_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title case_text-align-center">
        Result
      </h2>
      <TextParagraph class="case_description case_text-align-center m-12_top m-66_bottom media-m-41_bottom">
        We call it a win-win situation between the development team <br> and the customer’s business.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ContinuousIntegrationResult',
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

  &_no-wrap {
    white-space: nowrap;
  }
}
</style>
