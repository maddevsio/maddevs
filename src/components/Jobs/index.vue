<template>
  <main class="main">
    <Banner />
    <Advantages />
    <Growth />
    <Employer />
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
import Employees from './Employees';
import Jobs from './Jobs';
import Team from './Team';
import Contacts from '../Contacts';

export default {
  name: 'main-jobs',
  props: ['language'],
  data() {
    return {
      description: this.$t('meta-desc'),
    };
  },
  components: {
    Banner,
    Advantages,
    Growth,
    Employer,
    Employees,
    Jobs,
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
