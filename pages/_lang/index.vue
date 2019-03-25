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
      title: 'Index - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'Home page Nuxt.js ' }
      ]
    }
  }
}
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

