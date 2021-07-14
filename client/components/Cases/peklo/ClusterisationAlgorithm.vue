<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 case_title m-24_bottom">
        Clusterisation algorithm
      </h2>
      <TextParagraph class="case_introduction-paragraph m-24_bottom">
        The clusterisation algorithm was the project’s main challenge and is now its main strength. <br> <span class="case_bold">Here’s how it goes:</span>
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver m-48_bottom media-m-24_bottom p-48_top p-48_bottom media-p-24_top media-p-24_bottom">
      <div class="container_regular">
        <Lottie
          id="clusterisation-algorithm"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
    <div class="container_regular">
      <TextParagraph class="m-12_bottom">
        *The looping-over process is problematic for many reasons. First, human language is messy and hard to codify. Second, phrases can contain different word forms. We also needed to consider that words can be misspelled and typoed. Finally, the system needs to recognise synonyms.
      </TextParagraph>
      <TextParagraph class="m-12_bottom">
        Our first solution was to build parsers for extensive dictionaries having all possible word forms. Peklo Tool’s early version would load the dictionaries into RAM, but later, we switched to a database. The algorithm also uses thesauri and lists of typos and misspellings to interpret synonyms as one token and cluster them together.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        In clusterisation, Peklo Tool’s early version used the Aho–Corasick algorithm to find matches.
      </TextParagraph>
    </div>
    <div class="container_middle m-48_bottom media-m-24_bottom slider">
      <Swiper
        :components="slides"
        :safari-top-bar="false"
        :box-shadow="true"
      />
    </div>
    <div class="container_regular">
      <TextParagraph class="case_bold m-8_bottom">
        Later on, we moved to a more brute-force algorithm:
      </TextParagraph>
      <List class="m-12_bottom">
        <ListItemDot>Split a phrase into tokens</ListItemDot>
        <ListItemDot>Loop over all other phrases</ListItemDot>
        <ListItemDot>Split each of them into tokens</ListItemDot>
        <ListItemDot>Count equal tokens (consider synonyms and prepositions)</ListItemDot>
      </List>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        It’s simpler, faster, and more cache-friendly than the Aho–Corasick algorithm. Most importantly, it’s sufficient for lists of keywords for a contextual advertising campaign.
      </TextParagraph>
      <h4 class="case_title_h4 m-12_bottom">
        Generation of ad texts
      </h4>
      <TextParagraph>
        Another challenge was to automate the process of putting together different ad texts for each group of keywords. It’s an advanced combinatorial problem. We needed to implement an algorithm that would know how to write imperative sentences, what words to use in them, and how to connect those words.
      </TextParagraph>
      <TextQuoteBox
        class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
        author="Oleg Katkov, Software engineer at Mad Devs"
      >
        No ready-made solutions were available anywhere on the Internet, so we built the algorithm from scratch using dynamic programming. It turned out to be quite efficient. It produces impressive results with little resources.
      </TextQuoteBox>
      <TextParagraph class="m-24_bottom media-m-48_bottom">
        After collecting keywords and having them automatically grouped by Peklo Tool, the user can feed a few unique selling propositions to the ad text generation feature.
      </TextParagraph>
      <h5 class="case_title_h5 m-12_bottom">
        Peklo Tool then creates hundreds of ad texts within seconds:
      </h5>
    </div>
    <div class="container_middle case_img-wrapper m-12_bottom media-m-8_bottom">
      <Picture
        :width="1026"
        :height="517"
        file="generation-of-ad-texts"
        alt="Generation of ad texts"
        folder="peklo"
        extension="jpg"
      />
    </div>
    <div class="container_regular">
      <TextParagraph
        class="case_img-alt m-96_bottom media-m-48_bottom"
        color="#a4a8b4"
      >
        The structure of a contextual advertising campaign for a car repair business. Ad texts have been generated automatically based on keyword groups and unique selling propositions.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/peklo/clusterisation-algorithm.json'
import playLottieMixin from '@/mixins/playLottieMixin'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Swiper from '@/components/Cases/shared/Swiper'
import Picture from '@/components/Cases/shared/Picture'
import { slides } from '@/data/casePeklo'

export default {
  name: 'ClusterisationAlgorithm',
  components: {
    TextParagraph,
    Lottie,
    List,
    ListItemDot,
    TextQuoteBox,
    Swiper,
    Picture,
  },

  mixins: [
    playLottieMixin('clusterisation-algorithm', {
      animationData,
      autoplay: false,
      loop: false,
    }),
  ],

  data() {
    return {
      slides,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.case {
  &_lottie  {
    max-width: 546px;
  }

  &_title,
  &_introduction-paragraph {
    text-align: center;
  }

  &_introduction-paragraph {
    @media screen and (max-width: 890px) {
      br {
        display: none;
      }
    }
  }

  &_bold {
    font-weight: 700;
  }

  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  &_img-alt {
    text-align: center;
    font-size: 13px;
    letter-spacing: -0.02em;
  }

  @media screen and (max-width: 768px) {
    &_img-alt {
      font-size: 11px;
    }
  }
}

/deep/ .list-item_dot {
  margin-bottom: 0;
}
</style>
