<template>
  <section class="case_container">
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Collecting data for analysis
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The real challenge with paper-based documentation that includes hundreds of Initial Approach Questionnaires was not only related to the time it took to draft it. It was also about what happened to the data collected. There were no plans to digitise the inputs. Technically, all the reports would eventually sit in the NPM's offices and collect dust.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Instead, a unified regional data collection platform made adding, storing, processing, and sharing data possible, convenient, and accessible for subsequent analysis.
      </TextParagraph>
    </div>
    <div class="container_middle case_img-wrap m-96_bottom media-m-48_bottom">
      <Picture
        :width="1026"
        :height="554"
        :lazy="true"
        folder="itc"
        file="data-collection"
        extension="png"
        alt="Collecting data for analysis"
      />
    </div>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Platform developed locally
      </h3>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        The R4TCA project is funded by the EU, with the overarching goal of facilitating economic development in the Central Asian region. Therefore, choosing Mad Devs, a development team whose developers are located in the region was all but natural. With that, ITC contributed to the growing innovative, export-oriented software development sector.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Sustainability
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Sustainability is one of the key paradigms of the R4TCA project. Digital transformation efforts initiated by the ITC have greatly contributed to sustainability through innovative efforts by Mad Devs in a twofold format.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The initial sustainability round transpires into the minimum estimated savings of paper alone amounted to at least 80 boxes or 400 reams of paper.  This perfectly aligns with the EU sustainability and environmental protection goals.
      </TextParagraph>
      <TextParagraph>
        However, the sustainability wave does not dissipate with the above. The augmented and customized versions of the digital platform would enhance and contribute to sustainability in the subsequent global initiatives, too.
      </TextParagraph>
      <TextQuote
        class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom"
        author="Edwin Johan Santana Gaarder, International Consultant"
      >
        We consider the development of this digital manual to be not an expense, but an investment. The automation of reporting means that the project can be replicated and that its mission is easier to achieve.
      </TextQuote>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CollectingDataForAnalysis',
  components: {
    TextParagraph,
    TextQuote,
    Picture,
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_img-wrap {
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
    }
  }
</style>
