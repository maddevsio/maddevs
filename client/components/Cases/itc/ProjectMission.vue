<template>
  <section class="case_container">
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Project mission
      </h2>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        ITC previously implemented EMCI in Sri Lanka and Afghanistan to facilitate export management for SMEs in these countries via business-related training on the ground. The project’s current goal is to support the development of intra-regional and international trade in five Central Asian (CA) countries: Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan.
      </TextParagraph>
    </div>
    <div class="case_full-screen-image background-color-silver m-48_bottom media-m-24_bottom m-auto">
      <img
        width="1440"
        height="540"
        :data-src="require(`@/assets/img/Studies/svg/project-mission.svg`)"
        class="case_project-mission media_lazy"
        alt="Project mission"
      >
    </div>
    <div class="container_regular">
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        It is the trade component of a larger EU-funded programme that aims to support investment, competitiveness, and trade in Central Asia, thus contributing to sustainable and inclusive economic development in the region.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        To boost intra-regional and international trade, ITC trains Export Management Coaches (EMCs), who then deliver on-the-job coaching to offer practical and action-oriented advisory services to local businesses.
      </TextParagraph>
      <h3 class="case_title_h4 m-24_bottom media-m-12_bottom">
        Coaching focuses on five thematic areas
      </h3>
      <div class="case_thematic-areas m-24_bottom media-m-12_bottom">
        <CardThematicArea
          v-for="thematicArea in thematicAreas"
          v-bind="thematicArea"
          :key="thematicArea.title"
        />
        <div class="case_inner-cards">
          <Card class="case_inner-card background-color-pink">
            <h4 class="case_card-title case_title_h4">
              Customs and duties
            </h4>
          </Card>
          <Card class="case_inner-card background-color-blue-itc-darken">
            <h4 class="case_card-title case_title_h4">
              Packaging and labelling
            </h4>
          </Card>
        </div>
      </div>
      <TextParagraph class="case_text-italic m-24_bottom media-m-12_bottom">
        For more information on the R4TCA project, please
        <a
          href="https://www.intracen.org/Ready4Trade/"
          class="case_link"
          target="_blank"
        >
          visit site
        </a>
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        It is the first time that EMCI is running in five countries simultaneously. The growth of the project means more people involved, more activities to coordinate, and more ambitious objectives to pursue.
      </TextParagraph>
      <h4 class="case_title_h4 m-34_bottom">
        ITC’s aims under this programme
      </h4>
      <div class="case_statistics-container m-107_bottom media-m-41_bottom">
        <div class="case_statistics-item">
          <h5 class="case_statistics-item_title">
            <span
              data-purecounter-start="0"
              data-purecounter-end="40"
              class="purecounter"
            >
              40
            </span>
          </h5>
          <TextParagraph
            class="case_statistics-item_description"
            color="#404143"
          >
            SMEs will receive coaching services in each of the five countries
          </TextParagraph>
        </div>
        <div class="case_statistics-item">
          <h5 class="case_statistics-item_title">
            <span
              data-purecounter-start="0"
              data-purecounter-end="50"
              class="purecounter"
            >
              50
            </span>
          </h5>
          <TextParagraph
            class="case_statistics-item_description"
            color="#404143"
          >
            SMEs out of the total that the project will cover will be women-led enterprises
          </TextParagraph>
        </div>
        <div class="case_statistics-item">
          <h5 class="case_statistics-item_title">
            <span
              data-purecounter-start="0"
              data-purecounter-end="200"
              class="purecounter"
            >
              200
            </span>
          </h5>
          <TextParagraph
            class="case_statistics-item_description"
            color="#404143"
          >
            enterprises will receive coaching services overall
          </TextParagraph>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import CardThematicArea from '@/components/Cases/itc/CardThematicArea'
import Card from '@/components/Cases/shared/Card'
import { thematicAreas } from '@/data/caseITC'

export default {
  name: 'ProjectMission',
  components: {
    TextParagraph,
    CardThematicArea,
    Card,
  },

  data() {
    return {
      thematicAreas,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_statistics-container {
    @include grid(repeat(3, 1fr), auto, 0, 0);
  }

  &_thematic-areas {
    @include grid(repeat(2, 1fr), auto, 24px, 24px);

    @media screen and (max-width: 970px) {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }

  &_statistics-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 34px;

    &:nth-child(2) {
      border-left: 1px solid $border-color--black-border-03-opacity;
      border-right: 1px solid $border-color--black-border-03-opacity;
    }

    &_title {
      @include title($text-color--blue-itc-case, 48px, -0.02em)
    }

    &_description {
      font-size: 16px;
      line-height: 135%;
    }
  }

  &_text-italic,
  &_link {
    font-style: italic;
    color: $text-color--black-lighter;
  }

  &_link {
    border-bottom: 2px solid $border-color--black-border-05-opacity;
  }

  &_card-title {
    color: $text-color--white-primary;
  }

  &_inner-cards {
    @include grid(repeat(1, 1fr), auto, 0, 24px);
  }

  &_inner-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &_project-mission {
    width: 100%;
    height: 100%;

    @media screen and (max-width: 530px) {
      min-width: 530px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 880px) {
    &_statistics-container {
      @include grid(repeat(1, 222px), auto, 0, 0);
      justify-content: center;
    }

    &_statistics-item {
      padding: 20px 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &:nth-child(2) {
        position: relative;
        border-left: 0;
        border-right: 0;

        &:before,
        &:after {
          content: '';
          width: 131px;
          height: 1px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: $border-color--black-border-03-opacity;
        }

        &:before {
          top: 0;
        }

        &:after {
          bottom: 0;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    &_thematic-areas,
    &_inner-cards {
      grid-gap: 16px;
    }
  }
}
</style>
