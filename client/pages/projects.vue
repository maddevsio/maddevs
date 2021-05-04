<template>
  <main class="main">
    <ProjectsBanner />
    <CaseStudies type="projects" />
    <Customers />
    <OpenSource />
  </main>
</template>

<script>
import ProjectsBanner from '@/components/core/banners/ProjectsBanner'
import CaseStudies from '@/components/core/CaseStudies'
import Customers from '@/components/Projects/Customers'
import OpenSource from '@/components/Projects/OpenSource'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainProjects',
  components: {
    ProjectsBanner,
    CaseStudies,
    Customers,
    OpenSource,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('projects'))
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
