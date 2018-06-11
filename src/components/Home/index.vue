<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
    <WeUse />
    <Reviews />
  </main>
</template>

<script>
import Banner from './Banner'
import HowItWork from './HowItWork'
import BestPractices from './BestPractices'
import WeUse from './WeUse'
import Reviews from './Reviews'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
