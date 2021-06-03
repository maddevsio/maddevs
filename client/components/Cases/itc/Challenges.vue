<template>
  <section class="case_container">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Challenges
      </h2>
      <TextParagraph class="m-48_bottom">
        The main challenge for ITC was to coordinate missions and formalise recommendations provided by the coaches. Initially, the project was using a paper-based manual cum mission report to track their activities with SMEs. R4TCA implementers saw digitalisation as a major opportunity for improvement.
      </TextParagraph>
      <h4 class="case_title_h4 m-24_bottom">
        Below are examples of issues that digitising the manual resolved:
      </h4>
      <div class="case_cards-container m-96_bottom media-m-48_bottom">
        <div class="case_column">
          <CardTechSolution
            v-for="issue in resolvedIssues.slice(0, 3)"
            v-bind="issue"
            :key="issue.icon"
            folder="itc"
          />
        </div>
        <div class="case_column">
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
    <div class="container_full background-color-silver m-48_bottom media-m-24_bottom" />
    <div class="container_regular">
      <h4 class="case_title_h4 m-12_bottom">
        Saving efforts: Better reporting and coordination
      </h4>
      <TextParagraph class="m-48_bottom media-m-12_bottom">
        The web application we developed is now ITC’s reliable tool for coordinating EMCI. Both SMEs and coaches track their activities in electronic form, generating valuable data that is analysed and disseminated quickly and conveniently. ITC can monitor mission progress. Planning and implementing the project and missions became significantly easier and faster.
      </TextParagraph>
      <h4 class="case_title_h4 m-12_bottom">
        Saving paper: Fully paperless and eco-friendly alternative
      </h4>
      <TextParagraph>
        Going paperless is an internationally recognised way to make your operations greener and more sustainable. The  digital tool is a long-term solution that can help prevent the extensive use of paper in future projects, too.
      </TextParagraph>
      <TextQuoteBox
        class="m-48_top m-72_bottom media-m-24_top media-m-48_bottom m-auto"
        author="Sergei Kokot, EMCI Lead Coach, Central Asia"
      >
        We at ITC could benefit from digital transformation. The paper-based manual was 200 pages long, and the coach needed to fill out two copies of it every time. Developing a web app to deal with it was a solution that had lots of pluses and not a single minus.
      </TextQuoteBox>
      <h2 class="case_title-statistics case_text-align-center">
        ~400 reams <span>or</span> 200,000 sheets of paper
      </h2>
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
import { resolvedIssues } from '@/data/caseITC'

export default {
  name: 'Challenges',
  components: {
    TextParagraph,
    TextQuoteBox,
    CardTechSolution,
  },

  data() {
    return {
      resolvedIssues,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/cases/_mixins';

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

    span {
      color: $text-color--black-oil;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  &_description-statistics {
    max-width: 390px;
    font-size: 16px;
    color: $text-color--quote-box;
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
