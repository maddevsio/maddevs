<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        The SJMC and Mad Devs partnership
      </h2>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The SJMC opened to the public on April 16th, 2018. The entire centre, including its half-sunken building and
        cutting-edge new technology, was developed and deployed by an Australian-based IT vendor. The SJMC and Mad
        Devs partnership has therefore been based on enhancements and preventative maintenance contracts.
      </TextParagraph>
      <TextParagraph>
        After conducting an
        <NuxtLink
          :to="`/services/#it-consulting`"
          class="case_link"
        >
          independent audit
        </NuxtLink> of a previous IT
        vendor, a list of technical debt was formed.
      </TextParagraph>
      <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top">
        The Mad Devs team has successfully accomplished code refactoring as well as closing the technical debt. After
        that, system monitoring, new feature development, and maintenance was placed on Mad Devs shoulders.
      </TextQuoteBox>
    </section>
    <section class="container_full case_full-screen-img">
      <Picture
        :width="1440"
        :height="869"
        folder="sjmc"
        file="sjmc-team"
        extension="jpg"
        alt="The Mad Devs team in Sir John Monash Centre."
      />
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Partnership',
  components: {
    TextParagraph,
    TextQuoteBox,
    Picture,
  },
}
</script>
