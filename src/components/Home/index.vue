<template>
  <main class="main">
    <Banner />
    <HowItWork />
  </main>
</template>

<script>
import Banner from './Banner'
import HowItWork from './HowItWork'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Banner': Banner,
    'HowItWork': HowItWork
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
