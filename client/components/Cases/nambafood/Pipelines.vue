<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-96_top m-12_bottom media-m-48_top">
        Pipelines
      </h3>
      <TextParagraph class="m-24_bottom">
        At Mad Devs, we widely use pipelines. The deployment stage has been automated for the staging server, and
        deployment on the production server is done manually. The pipeline for the Namba Food system is displayed below.
      </TextParagraph>
    </section>
    <section class="container_full background-color-silver case_pipelines-image-desktop">
      <section class="container_full case_full-screen-image">
        <Picture
          :lazy="true"
          folder="nambafood"
          file="pipelines"
          extension="jpg"
          alt="Namba Food: Automated Deployment Stage Scheme."
        />
      </section>
    </section>
    <section class="container_full case_pipelines-image-mobile">
      <section class="container_full case_full-screen-image">
        <Picture
          :lazy="true"
          folder="nambafood"
          file="pipelines-mobile"
          extension="jpg"
          alt="Namba Food: Automated Deployment Stage Scheme."
        />
      </section>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Pipelines',
  components: {
    Picture,
    TextParagraph,
  },
}
</script>

<style></style>
