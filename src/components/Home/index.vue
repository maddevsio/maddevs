<template>
  <main class="main">
    <Banner />
    <HowItWork />
    <BestPractices />
  </main>
</template>

<script>
import Banner from './Banner'
import HowItWork from './HowItWork'
import BestPractices from './bestPractices'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Banner': Banner,
    'HowItWork': HowItWork,
    'BestPractices': BestPractices
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
