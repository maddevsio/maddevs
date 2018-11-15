<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
    <WeUse />
    <Reviews />
    <Clients />
    <Partners />
    <OpenSource />
    <Speakers />
    <OurBlog :language="language"/>
    <Press />
    <Associations />
    <Contacts />
  </main>
</template>

<script>
import Banner from './Banner';
import HowItWork from './HowItWork';
import BestPractices from './BestPractices';
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
  components: {
    Banner,
    HowItWork,
    BestPractices,
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
    meta: [
      {name: 'description', content: 'Mad Devs is a full stack team for development and administration of IT projects. We specialize in projects requiring the individual technical solutions.'},
      // Facebook / Open Graph
      {property: 'fb:app_id', content: '123456789'},
      {property: 'og:url', content: 'https://maddevs.io'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Mad Devs'},
      {property: 'og:description', content: 'Mad Devs is a full stack team for development and administration of IT projects. We specialize in projects requiring the individual technical solutions.'},
      {property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.jpg'},
    ],
  }
};
</script>
