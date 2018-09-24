<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/index.scss';

export default {
  name: 'App',
  components: {Header, Footer}
};
</script>
