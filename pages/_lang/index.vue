<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
    <Services />
    <QuickProjectStart />
    <!-- <Metrics /> -->
    <WeUse />
    <Clients />
    <Reviews />
    <Partners />
    <OpenSource />
    <Speakers />
    <!-- <OurBlog :languageeeeee="language"/> -->
    <Press />
    <Associations />
    <Contacts />
  </main>
</template>

<script>
import Banner from '@/components/Home/Banner';
import HowItWork from '@/components/Home/HowItWork';
import BestPractices from '@/components/Home/BestPractices';
import Services from '@/components/Home/Services';
import QuickProjectStart from '@/components/Home/QuickProjectStart';
import Metrics from '@/components/Home/Metrics';
import WeUse from '@/components/Home/WeUse';
import Reviews from '@/components/Home/Reviews';
import Clients from '@/components/Home/Clients';
import Partners from '@/components/Home/Partners';
import OpenSource from '@/components/Home/OpenSource';
import Speakers from '@/components/Home/Speakers';
import OurBlog from '@/components/Home/OurBlog';
import Press from '@/components/Home/Press';
import Contacts from '@/components/Contacts';
import Associations from '@/components/Home/Associations';

export default {
  name: 'Home',
  props: ['language'],
  data() {
    return {
      title: this.$t('title-home'),
      description: this.$t('meta-desc_home'),
      ogUrl: this.$t('og_meta-url_home'),
    };
  },
  components: {
    Banner,
    HowItWork,
    BestPractices,
    Services,
    QuickProjectStart,
    Metrics,
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
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
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
}
</script>