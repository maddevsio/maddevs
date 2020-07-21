<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <TechIcon v-for="(icon, i) in icons" :key="i" :class-prefix="icon.prefix" :title="icon.title"/>
    </div>
  </div>
</template>

<script>
import TechIcon from './tech-icon';
export default {
  name: 'FrontendIcons',
  components: {TechIcon},
  data() {
    return {
      icons: [
        {
          title: 'React',
          prefix: 'react'
        },
        {
          title: 'Vue.js',
          prefix: 'vue'
        },
        {
          title: 'Babel',
          prefix: 'babel'
        },
        {
          title: 'Webpack',
          prefix: 'webpack'
        }
      ]
    };}
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-frontend {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>

