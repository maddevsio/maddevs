<template>
  <div class="card-content">
    <h5 class="card-content_title title_h5">250</h5>
    <TextParagraph class="card-content_paragraph m-28_bottom">
      best cafe & restaurants of the city
      to suit all tastes + delivery of
      goods from stores and
      markets, medicines from
      pharmacies, personal
      correspondence and important
      documents, urgent packages from
      hand to hand, and much more.
    </TextParagraph>
    <h5 class="card-content_title title_h5">2500</h5>
    <TextParagraph class="card-content_paragraph m-28_bottom">
      offered dishes on the website to
      choose from.
    </TextParagraph>
    <h5 class="card-content_title title_h5">700 entrepreneurs</h5>
    <TextParagraph class="card-content_paragraph">
      received help from NF in 4 years
      and  increased their customer
      base by increasing online sales
      and providing marketing activity.
    </TextParagraph>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
export default {
  name: 'CardDeliveryServiceNambafood',
  components: {
    TextParagraph
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-content {
    &_title {
      margin-bottom: 4px;
      color: $text-color--black-lighter;
    }

    &_paragraph {
      @include default_text($text-color--black-lighter, 13px, 166%, -0.02em, normal);
    }
  }
</style>
