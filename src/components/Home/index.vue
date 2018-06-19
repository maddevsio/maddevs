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
    <Contacts />
  </main>
</template>

<script>
import Banner from './Banner'
import HowItWork from './HowItWork'
import BestPractices from './BestPractices'
import WeUse from './WeUse'
import Reviews from './Reviews'
import Partners from './Partners'
import OpenSource from './OpenSource'
import Speakers from './Speakers'
import Contacts from './Contacts'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Banner': Banner,
    'HowItWork': HowItWork,
    'BestPractices': BestPractices,
    'WeUse': WeUse,
    'Reviews': Reviews,
    'Partners': Partners,
    'OpenSource': OpenSource,
    'Speakers': Speakers,
    'Contacts': Contacts,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
