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
        v-bind="technology"
      />
    </ListTechnologies>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListTechnologies from '@/components/Cases/shared/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
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
