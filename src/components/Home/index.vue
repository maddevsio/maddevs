<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
    <Services />
    <WeUse />
    <Clients />
    <Reviews />
    <Partners />
    <OpenSource />
    <Speakers />
    <!-- <OurBlog :language="language"/> -->
    <Press />
    <Associations />
    <Contacts />
  </main>
</template>

<script>
import Banner from './Banner';
import HowItWork from './HowItWork';
import BestPractices from './BestPractices';
import Services from './Services';
import WeUse from './WeUse';
import Reviews from './Reviews';
import Clients from './Clients';
import Partners from './Partners';
import OpenSource from './OpenSource';
import Speakers from './Speakers';
import OurBlog from './OurBlog';
import Press from './Press';
import Contacts from './Contacts';
import Associations from './Associations';

export default {
  name: 'Home',
  props: ['language'],
  data() {
    return {
      description: this.$t('meta-desc'),
    };
  },
  components: {
    Banner,
    HowItWork,
    BestPractices,
    Services,
    WeUse,
    Reviews,
    Clients,
    Partners,
    OpenSource,
    Speakers,
    OurBlog,
    Press,
    Associations,
    Contacts
  },
  head: {
    meta: function () {
      return [
        {name: 'description', content: this.description},
        // Facebook / Open Graph
        {property: 'og:url', content: 'https://maddevs.io'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'Mad Devs'},
        {property: 'og:description', content: this.description},
        {property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.jpg'},
      ];
    }
  },
};
</script>
