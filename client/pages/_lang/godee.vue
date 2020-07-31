<template>
  <main class="main">
    <Banner />
    <AboutGoDee />
    <IssuesAndSolution />
    <Result />
    <Collaboration />
  </main>
</template>

<script>
import Banner from '@/components/GoDee/Banner';
import AboutGoDee from '@/components/GoDee/AboutGoDee';
import IssuesAndSolution from '@/components/GoDee/IssuesAndSolution';
import Result from '@/components/GoDee/Result';
import Collaboration from '@/components/GoDee/Collaboration';

export default {
  name: 'GoDee',
  components: {
    Banner,
    AboutGoDee,
    IssuesAndSolution,
    Result,
    Collaboration
  },
  data() {
    return {
      title: 'Mad Devs: Software & Mobile App Development Company',
      description: '',
      ogUrl: 'https://maddevs.io/godee'
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';

  .main {
    background-color: $bgcolor--white;
  }
</style>

