<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-48_bottom media-m-24_bottom">
      Technology stack
    </h3>
    <ListTechnologies class="m-107_bottom media-m-48_bottom">
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
import { technologies } from '@/data/caseSJMC'

export default {
  name: 'Technologies',
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
