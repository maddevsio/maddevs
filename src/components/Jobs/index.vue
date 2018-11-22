<template>
  <main class="main">
    <Banner />
    <Advantages />
    <Employer />
    <Team />
    <Contacts />
  </main>
</template>

<script>
import Banner from './Banner';
import Advantages from './Advantages';
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
    Advantages,
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
