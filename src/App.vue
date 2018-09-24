<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header';
import './assets/styles/index.scss';

export default {
  name: 'App',
  components: { Header }
};
</script>
