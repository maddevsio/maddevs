<template>
  <div class="careers">
    <Banner />
    <ProjectsCountries />
    <Benefits />
    <KeyMetrics />
    <div class="careers_white-section">
      <EmployeesBenefits />
      <OpenPositions />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Banner from '@/components/Careers/Banner'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import OpenPositions from '@/components/Careers/OpenPositions'
import Benefits from '@/components/Careers/Benefits'
import KeyMetrics from '@/components/Careers/KeyMetrics'
import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'

export default {
  name: 'Main',
  components: {
    Banner,
    ProjectsCountries,
    Benefits,
    KeyMetrics,
    EmployeesBenefits,
    OpenPositions,
  },

  mounted() {
    // Query to get vacancies and categories
    this.getCareersHome()
  },

  methods: {
    ...mapActions(['getCareersHome']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.careers {
  &_white-section {
    background-color: $bgcolor--white-primary;
  }
}
</style>
