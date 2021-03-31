<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">Technology stack</h2>
    <ListTechnologies class="m-96_bottom media-m-48_bottom">
      <ListTechnologiesItem
        v-for="(technologie, i) in technologies"
        :key="i"
        :tech-name="technologie.techName"
        :class-name="technologie.className"
      />
    </ListTechnologies>
  </section>
</template>

<script>
import ListTechnologies from '@/components/Cases/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem'
import { technologies } from '@/data/kafCase'

export default {
  name: 'TechnologyStack',
  components: {
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
