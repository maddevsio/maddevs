<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-96_top m-12_bottom media-m-48_top">Grafana — Docker containers’ monitoring service</h3>
      <TextParagraph class="m-48_bottom">
        To monitor the stability of Namba Food software, Mad Devs has integrated Grafana. It allows our developers to
        keep track of services in Docker containers. Grafana shows how the load in the project is balanced, including
        disk space consumed, memory allocated, swap, load, container uptime and other parameters.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <Picture
        :box-shadow="true"
        :lazy-loading="true"
        picture-folder="nambafood"
        file-name="grafana"
        file-name-retina="grafana@2x"
        file-extension="jpg"
        alt="Namba Food: Software Stability Monitoring with Grafana."
      />
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'Grafana',
  components: {
    Picture,
    TextParagraph,
  },
}
</script>

<style></style>