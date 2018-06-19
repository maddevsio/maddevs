<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/styles/index.css";
</style>
