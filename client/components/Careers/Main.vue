<template>
  <div class="careers">
    <Banner />
    <ProjectsCountries />
    <Benefits />
  </div>
</template>

<script>
import Banner from '@/components/Careers/Banner'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import Benefits from '@/components/Careers/Benefits'

export default {
  name: 'Main',
  components: {
    Banner,
    ProjectsCountries,
    Benefits,
  },

}
</script>
