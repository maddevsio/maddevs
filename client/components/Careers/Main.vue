<template>
  <div class="careers">
    <div class="careers__content--dark-theme">
      <Banner />
      <ProjectsCountries />
    </div>
    <div class="careers__content--white-theme">
      <OpenPositions />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Careers/Banner'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import OpenPositions from '@/components/Careers/OpenPositions'

export default {
  name: 'Main',
  components: {
    Banner,
    ProjectsCountries,
    OpenPositions,
  },

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.careers__content {
  &--white-theme {
    background-color: $bgcolor--white-primary;
  }
}
</style>
