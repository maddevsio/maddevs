<template>
  <div class="open-source">
    <Banner />
    <FeaturedProjects />
    <div class="careers_white-section">
      <Boilerplates />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/OpenSource/Banner'
import FeaturedProjects from '@/components/OpenSource/FeaturedProjects'
import Boilerplates from '@/components/OpenSource/Boilerplates'
import CTABanner from '@/components/OpenSource/CTABanner'

export default {
  name: 'Main',
  components: {
    Banner,
    FeaturedProjects,
    Boilerplates,
    CTABanner,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.open-source {
  &_white-section {
    background-color: $bgcolor--white-primary;
  }
}
</style>
