<template>
  <div class="card-content">
    <div class="card-content_card-description">
      <div class="card-content_description-item">
        <h4 class="case_title_h4 card-content_description-title">Solution: GoDee</h4>
        <TextParagraph class="card-content_paragraph card-content_paragraph-first">
          GoDee’s founders decided to make buses smarter and more user-friendly. They tackled the problem by converting traditional buses into a modern service provider  offering a convenient and predictable ride that’s just one click away.
        </TextParagraph>
        <TextParagraph class="card-content_paragraph">
          An innovative transportation solution that improves commuters’ daily lives, reduces environmental pollution and provides affordable commutes and stress-free service.
        </TextParagraph>
      </div>
    </div>
    <div class="card-content_prices">
      <h2 class="card-content_prices-title">
        $65<span>/ month</span>
      </h2>
      <div class="card-content_price-item">
        <TextParagraph class="card-content_price-heading">
          One trip
        </TextParagraph>
        <TextParagraph class="card-content_price-number">
          $1.29
        </TextParagraph>
      </div>
      <div class="card-content_price-item">
        <TextParagraph class="card-content_price-heading">
          Trips a day
        </TextParagraph>
        <TextParagraph class="card-content_price-number">
          $2
        </TextParagraph>
      </div>
      <div class="card-content_price-item">
        <TextParagraph class="card-content_price-heading">
          Days a month
        </TextParagraph>
        <TextParagraph class="card-content_price-number">
          ~ 25
        </TextParagraph>
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
export default {
  name: 'CardSolutionGoDee',
  components: {
    TextParagraph
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-content {
    display: flex;
    justify-content: space-between;

    &_description-title {
      margin-bottom: 7px;
    }

    &_description-title,
    &_prices-title,
    &_paragraph {
      color: $text-color--white-primary;
    }

    &_prices-title {
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -2px;
      font-family: 'Poppins-Medium';
      margin-bottom: 55px;

      span {
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -1px;
        font-family: 'Poppins-Regular';
      }
    }

    &_paragraph-first {
      margin-bottom: 33px;
    }

    &_card-description {
      max-width: 401.45px;
      padding-right: 40px;
    }

    &_prices {
      width: 273px;
    }

    &_price-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:nth-child(3) {
        border-top: 1px solid $border-color--white-02-opacity;
        border-bottom: 1px solid $border-color--white-02-opacity;
      }
    }

    &_price-heading,
    &_price-number {
      @include default_text($text-color--white-primary, 15px, 44.25px, -0.035em, normal);
    }
  }
</style>
