<template>
  <main class="main">
    <Banner />
    <Employer />
    <Team />
    <Contacts />
  </main>
</template>

<script>
import Banner from './Banner';
import Employer from './Employer';
import Team from './Team';
import Contacts from '../Contacts';

export default {
  name: 'Jobs',
  props: ['language'],
  data() {
    return {
      description: this.$t('meta-desc'),
    };
  },
  components: {
    Banner,
    Employer,
    Team,
    Contacts
  },
  head: {
    meta: function () {
      return [
        {name: 'description', content: this.description},
      ];
    }
  },
};
</script>
