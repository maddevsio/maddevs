<template>
  <div class="card-content">
    <h3 class="card-content_title case_title_h5">
      250
    </h3>
    <TextParagraph class="card-content_paragraph m-28_bottom media-m-32_bottom">
      best cafe & restaurants of the city to suit all tastes + delivery of goods from stores and markets, medicines from
      pharmacies, personal correspondence and important documents, urgent packages from hand to hand, and much more.
    </TextParagraph>
    <h3 class="card-content_title case_title_h5">
      2500
    </h3>
    <TextParagraph class="card-content_paragraph m-28_bottom media-m-32_bottom">
      offered dishes on the website to choose from.
    </TextParagraph>
    <h3 class="card-content_title case_title_h5">
      700 entrepreneurs
    </h3>
    <TextParagraph class="card-content_paragraph">
      received help from NF in 4 years and increased their customer base by increasing online sales and providing
      marketing activity.
    </TextParagraph>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'CardNationwideNumbers',
  components: {
    TextParagraph,
  },
}
</script>

<style scoped lang="scss">
.card-content {
  &_title {
    margin-bottom: 4px;
    color: $text-color--black-lighter;
  }

  &_paragraph {
    @include default-text($text-color--black-lighter, 13px, 166%, -0.02em, normal);

    @media screen and (max-width: 768px) {
      @include default-text($text-color--black-lighter, 16px, 150%, -0.02em, normal);
    }
  }
}
</style>
