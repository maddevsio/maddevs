<template>
  <section class="case_container">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Challenges
      </h2>
      <TextParagraph class="m-66_bottom">
        The main challenge for ITC was to coordinate missions and formalise recommendations provided by the coaches. Initially, the project was using a paper-based manual mission report to track their activities with SMEs. R4TCA implementers saw digitalisation as a major opportunity for improvement.
      </TextParagraph>
      <h3
        v-prlx="animationSettingsTitle"
        class="case_title_h4 m-24_bottom"
      >
        Below are examples of issues that digitising the manual resolved:
      </h3>
      <div class="case_cards-container m-96_bottom media-m-48_bottom">
        <div class="case_column">
          <CardTechSolution
            v-for="issue in resolvedIssues.slice(0, 3)"
            v-bind="issue"
            :key="issue.icon"
            folder="itc"
          />
        </div>
        <div
          v-prlx="animationSettingsCards"
          class="case_column"
        >
          <CardTechSolution
            v-for="issue in resolvedIssues.slice(3, 6)"
            v-bind="issue"
            :key="issue.icon"
            folder="itc"
          />
        </div>
      </div>
      <h2 class="case_title_h2 m-24_bottom">
        How our product solves the challenges
      </h2>
    </div>
    <div class="case_img-section background-color-silver m-48_bottom media-m-24_bottom">
      <div v-prlx="animationSettingsImg">
        <div class="case_image-wrap">
          <Picture
            :width="1440"
            :height="440"
            :lazy="false"
            folder="itc"
            file="solves-the-challenges"
            extension="png"
            alt="How our product solves the challenges"
          />
        </div>
      </div>
    </div>
    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Saving efforts: Better reporting and coordination
      </h3>
      <TextParagraph class="m-48_bottom media-m-12_bottom">
        The web application we developed is now ITC’s reliable tool for coordinating EMCI. Both SMEs and coaches track their activities in electronic form, generating valuable data that is analysed and disseminated quickly and conveniently. ITC can monitor mission progress. Planning and implementing the project and missions became significantly easier and faster.
      </TextParagraph>
      <h3 class="case_title_h4 m-12_bottom">
        Saving paper: Fully paperless and eco-friendly alternative
      </h3>
      <TextParagraph>
        Going paperless is an internationally recognised way to make your operations greener and more sustainable. The  digital tool is a long-term solution that can help prevent the extensive use of paper in future projects, too.
      </TextParagraph>
      <TextQuoteBox
        class="m-48_top m-72_bottom media-m-24_top media-m-48_bottom m-auto"
        author="Sergei Kokot, EMCI Lead Coach, Central Asia"
      >
        We at ITC could benefit from digital transformation. The paper-based manual was 200 pages long, and the coach needed to fill out two copies of it every time. Developing a web app to deal with it was a solution that had lots of pluses and not a single minus.
      </TextQuoteBox>
      <h4 class="case_title-statistics case_text-align-center">
        <span
          data-purecounter-start="0"
          data-purecounter-end="400"
          class="purecounter"
        >
          ~400
        </span>
        reams <span class="case_black">or</span>
        <span
          data-purecounter-start="0"
          data-purecounter-end="200"
          data-purecounter-decimals="3"
          class="purecounter"
        >
          200,000
        </span>
        sheets of paper
      </h4>
      <TextParagraph class="case_description-statistics m-96_bottom media-m-48_bottom m-auto case_text-align-center">
        the alternative costs of running a paper-based version of the R4TCA EMCI component
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import Picture from '@/components/Cases/shared/Picture'
import { resolvedIssues } from '@/data/caseITC'

export default {
  name: 'Challenges',
  components: {
    TextParagraph,
    TextQuoteBox,
    CardTechSolution,
    Picture,
  },

  data() {
    return {
      resolvedIssues,
      animationSettingsImg: {
        direction: 'x',
        speed: 0.2,
        fromBottom: true,
        reverse: true,
        mobileMaxWidth: 991,
      },

      animationSettingsTitle: {
        speed: 0.05,
        reverse: true,
        limit: {
          min: -55,
          max: 55,
        },

        mobileMaxWidth: 991,
      },

      animationSettingsCards: {
        reverse: true,
        limit: {
          min: -55,
          max: 55,
        },

        mobileMaxWidth: 991,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_column {
    @include grid(repeat(1, 1fr), repeat(3, max-content), 0, 24px);
  }

  &_title-statistics {
    margin-bottom: 6px;
    @include font('Poppins', 36px, 600);
    line-height: 130%;
    letter-spacing: -0.02em;
    color: $text-color--blue-itc-case;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  &_description-statistics {
    max-width: 390px;
    font-size: 16px;
    color: $text-color--quote-box;
  }

  &_black {
    color: $text-color--black-oil;
  }

  &_image-wrap {
    min-width: 4211px;
    max-width: 4211px;
    min-height: 540px;
    max-height: 540px;
    position: relative;
    left: 50%;
    transform: translateX(-30%);

  }

  @media screen and (max-width: 990px) {
    &_image-wrap {
      left: unset;
      right: 820px;
      transform: none;
    }

    &_img-section {
      max-height: 276px;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 880px) {
    &_cards-container {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_column {
      grid-row-gap: 10px;
    }
  }
}
</style>
