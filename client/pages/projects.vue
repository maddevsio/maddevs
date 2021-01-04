<template>
  <main class="main">
    <ProjectsBanner />
    <CaseStudies />
    <Customers />
    <OpenSource />
  </main>
</template>

<script>
import ProjectsBanner from '@/components/Banner/ProjectsBanner';
import CaseStudies from '@/components/About/CaseStudies';
import Customers from '@/components/Projects/Customers';
import OpenSource from '@/components/Projects/OpenSource';

export default {
  name: 'main-projects',
  components: {
    ProjectsBanner,
    CaseStudies,
    Customers,
    OpenSource
  },
  data() {
    return {
      title: 'Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects',
      description: 'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',
      ogUrl: 'https://maddevs.io/projects'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/projects/'
        }
      ]
    };
  }
};
</script>
