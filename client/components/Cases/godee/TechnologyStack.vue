<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
      Technology stack
    </h3>
    <ListTechnologies class="m-96_bottom media-m-48_bottom case_list-technologies-godee">
      <ListTechnologiesItem
        v-for="technology in technologies"
        :key="technology.name"
        v-bind="technology"
      />
    </ListTechnologies>
  </section>
</template>

<script>
import ListTechnologies from '@/components/Cases/shared/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
import { technologies } from '@/data/caseGodee'

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

<style>

</style>
