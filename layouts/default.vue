<template>
  <div>
    <Cookie/>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookie from '@/components/ui/cookie';

export default {
  name: 'Default',
  components: { Header, Footer, Cookie }
};
</script>
