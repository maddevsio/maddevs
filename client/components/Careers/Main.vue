<template>
  <div class="careers">
    <Banner />
    <ProjectsCountries />
    <Benefits />
    <KeyMetrics />
    <div class="careers_white-section">
      <EmployeesBenefits />
      <OpenPositions />
      <CTABanner />
    </div>
    <ScrollToPositionsLink />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Banner from '@/components/Careers/Banner'
import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import Benefits from '@/components/Careers/Benefits'
import KeyMetrics from '@/components/Careers/KeyMetrics'
import EmployeesBenefits from '@/components/Careers/EmployeesBenefits'
import OpenPositions from '@/components/Careers/OpenPositions'
import CTABanner from '@/components/Careers/CTABanner'
import ScrollToPositionsLink from '@/components/Careers/shared/ScrollToPositionsLink'

export default {
  name: 'Main',
  components: {
    Banner,
    ProjectsCountries,
    Benefits,
    KeyMetrics,
    EmployeesBenefits,
    OpenPositions,
    CTABanner,
    ScrollToPositionsLink,
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
.careers {
  &_white-section {
    background-color: $bgcolor--white-primary;
  }
}
</style>
