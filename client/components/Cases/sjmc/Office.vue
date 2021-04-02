<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Custom small-scale version of the SJMC in Mad Devs’ office
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        As thousands of kilometres separate the SJMC and Mad Devs’ office, a unique approach to the engineering
        partnership was required.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        After purchasing the required equipment and reading code and documentation, in one month after understanding
        the complexity of the SJMC, Mad Devs’ DevOps and back-end engineers built a custom small-scale version of the
        SJMC complex multimedia environment. Thus, testing and deploying new content and changes in the Brain was made
        possible even kilometres away from the real SJMC.
      </TextParagraph>
    </section>
    <section class="container_full case_full-screen-slider">
      <Swiper
        :components="swiperOfficeTeam"
        :safari-top-bar="false"
        :box-shadow="false"
      />
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Swiper from '@/components/Cases/shared/Swiper'
import { swiperOfficeTeam } from '@/data/caseSJMC'

export default {
  name: 'Office',
  components: {
    TextParagraph,
    Swiper,
  },

  data() {
    return {
      swiperOfficeTeam,
    }
  },
}
</script>
