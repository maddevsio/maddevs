<template>
  <div class="careers">
    <Banner />
    <ProjectsCountries />
  </div>
</template>

<script>
import Banner from '@/components/Careers/Banner'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'

export default {
  name: 'Main',
  components: {
    Banner,
    ProjectsCountries,
  },

}
</script>
