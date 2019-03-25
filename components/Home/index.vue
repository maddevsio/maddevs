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
import QuickProjectStart from './QuickProjectStart';
import Metrics from './Metrics';
import WeUse from './WeUse';
import Reviews from './Reviews';
import Clients from './Clients';
import Partners from './Partners';
import OpenSource from './OpenSource';
import Speakers from './Speakers';
import OurBlog from './OurBlog';
import Press from './Press';
import Contacts from '../Contacts';
import Associations from './Associations';

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

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .container {
    padding: 0 54px;
  }

  .sec-title {
    font-size: 32px;
  }
}

@media only screen and (max-width: 576px) {
  .sec-title {
    line-height: 1.2;
  }

  .container {
    padding: 0 16px;
  }
}

@media only screen and (max-width: 480px) {
  .sec-title {
    font-size: 28px;
  }
}
</style>

