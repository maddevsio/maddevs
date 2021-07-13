<template>
  <div class="card-content">
    <h3 class="card-content_title case_title_h5">
      Restaurant Talisman
    </h3>
    <TextParagraph class="card-content_paragraph">
      Restaurant Talisman successfully develops in market of Bishkek city. In 2018, directorship of the restaurant
      decided to actively promote in delivery.
    </TextParagraph>
    <TextParagraph class="card-content_paragraph m-24_top m-24_bottom media-m-48_top">
      By using NambaFood software only in a month, they got positive growth.
    </TextParagraph>
    <div class="card-content_statistics">
      <div class="card-content_statistics-item">
        <TextParagraph class="card-content_paragraph card-content_statistics-heading">
          IT expenses
        </TextParagraph>
        <TextParagraph class="card-content_statistics-number">
          0<span>$</span>
        </TextParagraph>
      </div>
      <div class="card-content_statistics-item">
        <TextParagraph
          class="card-content_paragraph card-content_statistics-heading card-content_statistics-heading-increase-sales"
        >
          Increase in <br>
          sales
        </TextParagraph>
        <TextParagraph class="card-content_statistics-number">
          +236<span>%</span>
        </TextParagraph>
      </div>
      <div class="card-content_statistics-item">
        <TextParagraph class="card-content_paragraph card-content_statistics-heading">
          Increase in <br>
          amount of orders
        </TextParagraph>
        <TextParagraph class="card-content_statistics-number">
          +142<span>%</span>
        </TextParagraph>
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'CardRestaurantTalisman',
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
  }

  &_statistics-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    &:nth-child(1) {
      padding-top: 0;
    }

    &:nth-child(2) {
      border-top: 1px solid $border-color--grey-cases;
      border-bottom: 1px solid $border-color--grey-cases;
    }

    &:nth-child(3) {
      padding-bottom: 0;
    }
  }

  &_statistics-number {
    @include title($text-color--black-lighter, 21.25px, -0.02em);

    span {
      @include default-text($text-color--black-lighter, 17px, 28.22px, -0.035em, normal);
    }
  }

  @media screen and (max-width: 768px) {
    &_paragraph {
      @include default-text($text-color--black-lighter, 16px, 150%, -0.02em, normal);
    }

    &_statistics-heading {
      @include default-text($text-color--black-lighter, 13px, 166%, -0.02em, normal);

      br {
        display: none;
      }
    }
  }

  @media screen and (max-width: 325px) {
    &_statistics-heading {
      br {
        display: block;
      }
    }

    &_statistics-heading-increase-sales {
      br {
        display: none;
      }
    }
  }
}
</style>
