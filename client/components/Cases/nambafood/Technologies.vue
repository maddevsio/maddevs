<template>
  <section class="container_regular">
    <TextParagraph class="m-24_top media-m-48_top">
      Monitoring also helps Mad Devs to prevent service timeouts. When the load grows, we can track spikes, estimate the
      severity of an issue and quickly resolve it.
    </TextParagraph>
    <h3 class="case_title_h3 m-96_top m-48_bottom media-m-72_top media-m-24_bottom">
      Technologies used for the Namba Food project
    </h3>
    <ListTechnologies>
      <ListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        :tech-name="technology.name"
        :class-name="technology.className"
      />
    </ListTechnologies>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import ListTechnologies from '@/components/Cases/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem'
import { technologies } from '@/data/caseNambafood'

export default {
  name: 'Technologies',
  components: {
    TextParagraph,
    ListTechnologies,
    ListTechnologiesItem,
  },

  data() {
    return {
      technologies,
    }
  },
}
</script>

<style></style>