<template>
  <main class="main">
    <Banner />
    <Advantages />
    <Growth />
    <Employer />
    <Intern />
    <Employees />
    <Jobs />
    <Team />
    <Contacts />
  </main>
</template>

<script>
import Banner from '@/components/Jobs/Banner';
import Advantages from '@/components/Jobs/Advantages';
import Growth from '@/components/Jobs/Growth';
import Employer from '@/components/Jobs/Employer';
import Intern from '@/components/Jobs/Intern';
import Employees from '@/components/Jobs/Employees';
import Jobs from '@/components/Jobs/Jobs';
import Team from '@/components/Jobs/Team';
import Contacts from '@/components/Contacts';

export default {
  name: 'main-jobs',
  props: ['language'],
  components: {
    Banner,
    Advantages,
    Growth,
    Employer,
    Intern,
    Employees,
    Jobs,
    Team,
    Contacts
  },
  data() {
    return {
      title: this.$t('title-jobs'),
      description: this.$t('meta-desc_jobs'),
      ogUrl: this.$t('og_meta-url_jobs'),
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png' }
      ]
    }
  }
};
</script>
