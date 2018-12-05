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
import Banner from './Banner';
import Advantages from './Advantages';
import Growth from './Growth';
import Employer from './Employer';
import Intern from './Intern';
import Employees from './Employees';
import Jobs from './Jobs';
import Team from './Team';
import Contacts from '../Contacts';

export default {
  name: 'main-jobs',
  props: ['language'],
  data() {
    return {
      title: this.$t('title-jobs'),
      description: this.$t('meta-desc_jobs'),
      ogUrl: this.$t('og_meta-url_jobs'),
    };
  },
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
  head: {
    title: function() {
      return {
        inner: this.title,
        separator: ' ', // Leave empty separator
        complement: ' ', // Leave empty complement
      };
    },
    meta: function () {
      return [
        {name: 'description', content: this.description},
        // Facebook / Open Graph
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: this.title},
        {property: 'og:description', content: this.description},
        {property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png'},
      ];
    }
  },
};
</script>
