<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-104_top media-m-48_top m-12_bottom">
        Mobile applications
      </h2>
      <TextParagraph class="m-48_bottom">
        The world-class BYOD technology solution ensures that visitors are immersed in soldiers' personal histories.
      </TextParagraph>
    </section>
    <section class="container_full background-color-black-section">
      <div class="container_full case_full-screen-img">
        <Picture
          :lazy="true"
          folder="sjmc"
          file="mobile-applications"
          extension="jpg"
          alt="The SJMC Mobile Applications."
        />
      </div>
    </section>
    <section class="container_regular">
      <TextQuoteBox class="m-auto m-48_top m-48_bottom">
        As soon as visitors enter the site, the SJMC’s mobile applications, with the help of advanced positioning
        algorithms proactively cache content, cue up relevant multimedia, and guide visitors through the stories of
        Australian soldiers.
      </TextQuoteBox>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        On an annual basis, approximately 60,000 visitors move throughout the centre. 150 Bluetooth beacons determine
        the location of each smartphone to deliver the right content at the right time.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The gallery's small size and the volume and density of signal traffic from visitors is a challenge that was
        solved using a complex, layered positioning algorithm that was developed to help deal with the unique
        challenges of SJMC’s physical environment.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        When visitors move around the centre, the app will continually refresh a list of the content that is available
        nearby and allow them to create their own experience.
      </TextParagraph>
    </section>
    <section class="container_regular">
      <Picture
        :lazy="true"
        folder="sjmc"
        file="sjmc-map"
        extension="jpg"
        alt="Sir Jonh Monash Centre Map."
      />
      <p class="case_image-description m-8_top">
        Sir Jonh Monash Centre Site
      </p>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'MobileApplications',
  components: {
    TextParagraph,
    TextQuoteBox,
    Picture,
  },
}
</script>
