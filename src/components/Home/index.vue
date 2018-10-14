<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
    <WeUse />
    <Reviews />
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
    Partners,
    OpenSource,
    Speakers,
    OurBlog,
    Press,
    Associations,
    Contacts
  }
};
</script>
