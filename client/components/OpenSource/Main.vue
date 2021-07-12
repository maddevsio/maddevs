<template>
  <div class="open-source">
    <Banner />
    <ParagraphSection />
    <FeaturedProjects />
    <div class="open-source--bg-white">
      <Boilerplates />
      <CTABanner />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/OpenSource/Banner'
import ParagraphSection from '@/components/OpenSource/ParagraphSection'
import FeaturedProjects from '@/components/OpenSource/FeaturedProjects'
import Boilerplates from '@/components/OpenSource/Boilerplates'
import CTABanner from '@/components/OpenSource/CTABanner'

export default {
  name: 'Main',
  components: {
    Banner,
    ParagraphSection,
    FeaturedProjects,
    Boilerplates,
    CTABanner,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.open-source {
  color: $text-color--white-primary;
  &--bg-white {
    background-color: $bgcolor--white-primary;
    color: $text-color--black-oil;
  }
}
</style>
