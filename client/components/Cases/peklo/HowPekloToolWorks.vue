<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom">
        How Peklo Tool works
      </h2>
      <TextParagraph class="m-24_bottom">
        In digital marketing, “contextual advertising” refers to a method of targeting ads based on what content users access. Advertisers use keywords to make sure that the users who see certain ads can actually be interested in buying the product.
      </TextParagraph>
    </div>
    <div
      class="case_iframe-wrapper m-48_bottom m-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <iframe
        src="https://www.youtube.com/embed/RYAUgOba-wg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="case_iframe"
      />
    </div>
    <div class="container_regular">
      <h4 class="case_title_h4 m-24_bottom media-m-12_bottom">
        Here’s how Peklo Tool increases the efficacy of contextual advertising:
      </h4>
      <div
        class="case_cards-list m-96_bottom media-m-48_bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <Card
          v-for="card in howPekloToolWorksCards"
          :key="card.title"
          :class="`case_card background-color-${card.color}`"
        >
          <h5 class="case_title_h5 case_card-title">
            {{ card.title }}
          </h5>
          <TextParagraph class="case_card-description">
            {{ card.description }}
          </TextParagraph>
          <img
            :width="card.iconWidth"
            :height="card.iconHeight"
            :data-src="$getMediaFromS3(`/images/Cases/peklo/svg/${card.icon}.svg`)"
            :alt="card.title"
            class="case_card-icon media_lazy"
          >
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import { howPekloToolWorksCards } from '@/data/casePeklo'

export default {
  name: 'HowPekloToolWorks',
  components: {
    TextParagraph,
    Card,
  },

  data() {
    return {
      howPekloToolWorksCards,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cases/_mixins';

.case {
  &_cards-list {
    @include grid(repeat(1, 1fr), auto, 0, 24px);

    @media screen and (max-width: 890px) {
      grid-row-gap: 16px;
    }
  }

  &_card {
    position: relative;
  }

  &_card-title {
    margin-bottom: 5px;
  }

  &_card-description {
    max-width: 498px;
  }

  &_card-icon {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &_iframe-wrapper {
    width: 1046px;
    height: 588px;
  }

  &_iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1046px) {
    &_iframe-wrapper {
      position: relative;
      padding-bottom: 56.25%;
      width: 100%;
      height: 100%;
    }

    &_iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 890px) {
    &_card-description {
      max-width: 100%;
    }

    &_card-icon {
      display: none;
    }
  }
}
</style>
