<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Keyword grouping
    </h2>
    <TextParagraph class="m-24_bottom">
      The heart of Peklo Tool is a smart technology that groups keywords. Performed manually, grouping can take an overwhelmingly long time. It gets virtually unmanageable if a planned contextual advertising campaign uses thousands or tens of thousands of keywords, which they often do.
    </TextParagraph>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <div
        class="case_img-wrapper m-12_bottom media-m-8_bottom"
      >
        <Picture
          :width="817"
          :height="459"
          file="keyword-grouping"
          alt="Keyword grouping"
          folder="peklo"
          extension="jpg"
        />
      </div>
      <TextParagraph
        class="case_img-alt m-56_bottom media-m-32_bottom"
        color="#a4a8b4"
      >
        The “Appliance Repair” niche 379 keywords in 369 ad groups within 0.176 seconds
      </TextParagraph>
    </div>
    <TextParagraph class="m-24_bottom">
      Automating the grouping process was challenging because human language was involved. All the possible spelling options (including typos) for keywords need to be considered. Normally, neural networks and natural language processing (NLP) technologies would be used to handle the linguistic variations. But with them, grouping would’ve been slow, so we found an alternative solution.
    </TextParagraph>
    <div
      class="case_cards"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <Card class="background-color-black-primary-bg">
        <h4 class="case_title_h4 case_card-title m-8_bottom">
          Problem
        </h4>
        <TextParagraph color="#ffffff">
          NLP could cope with grouping, but it would’ve taken several minutes to process a single file with keywords in it
        </TextParagraph>
      </Card>
      <Card class="background-color-gray">
        <h4 class="case_title_h4 case_card-title m-8_bottom">
          Solution
        </h4>
        <TextParagraph color="#ffffff">
          Integration with an extensive dictionary of contextual synonyms in a separate cache
        </TextParagraph>
      </Card>
    </div>
    <TextQuote
      class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom"
      author="Oleg Katkov, Software engineer at Mad Devs"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      Speed was a priority. We wanted to create a tool that could impress the user by grouping keywords instantly. By integrating the dictionaries, we achieved it. The grouping process takes Peklo Tool only a few seconds.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'

export default {
  name: 'KeywordGrouping',
  components: {
    TextParagraph,
    TextQuote,
    Picture,
    Card,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cases/_mixins';
@import '@/assets/styles/_vars';

.case {
  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  &_img-alt {
    text-align: center;
    font-size: 13px;
    letter-spacing: -0.02em;
  }

  &_cards {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_card-title {
    color: $text-color--white;
  }

  @media screen and (max-width: 768px) {
    &_cards {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }

    &_img-alt {
      font-size: 11px;
    }
  }
}
</style>
