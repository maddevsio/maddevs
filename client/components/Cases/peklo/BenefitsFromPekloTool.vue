<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Who benefits from Peklo Tool
    </h2>
    <div
      class="case_cards"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <div class="case_cards-group">
        <Card
          v-for="card in benefitsCards"
          :key="card.title"
          :class="`background-color-${card.color}`"
        >
          <div class="case_card-img">
            <Picture
              :width="396"
              :height="200"
              :file="card.img"
              :alt="card.title"
              folder="peklo"
              extension="png"
            />
          </div>
          <h4 class="case_title_h4 case_card-title m-24_top m-8_bottom">
            {{ card.title }}
          </h4>
          <TextParagraph color="#ffffff">
            {{ card.description }}
          </TextParagraph>
        </Card>
      </div>
      <Card class="background-color-yellow m-96_bottom media-m-48_bottom">
        <h4 class="case_title_h4 m-8_bottom">
          Entrepreneurs
        </h4>
        <TextParagraph>
          Subscription to Peklo Tool pays off after a single contextual advertising campaign. The money saved by automation can significantly exceed the service’s price.
        </TextParagraph>
      </Card>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'
import { benefitsCards } from '@/data/casePeklo'

export default {
  name: 'BenefitsFromPekloTool',
  components: {
    TextParagraph,
    Card,
    Picture,
  },

  data() {
    return {
      benefitsCards,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cases/_mixins';
@import '@/assets/styles/_vars';

.case {
  &_cards {
    @include grid(repeat(1, 1fr), auto, 0, 24px);
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_card-title {
    color: $text-color--white;
  }

  &_card-img {
    min-width: 396px;
    margin: -32px 0 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
      margin: -20px 0 0;
    }

    @media screen and (min-width: 470px) and (max-width: 720px) {
      min-width: 550px
    }
  }

  @media screen and (max-width: 720px) {
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }
}
</style>
