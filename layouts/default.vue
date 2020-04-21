<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'Default',
  components: { Header }
};
</script>
