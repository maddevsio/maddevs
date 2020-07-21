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
  name: 'BackendIcons',
  components: {TechIcon},
  data() {
    return {
      icons: [
        {
          title: 'Python',
          prefix: 'python'
        },
        {
          title: 'Golang',
          prefix: 'golang'
        },
        {
          title: 'JavaScript',
          prefix: 'javascript'
        },
        {
          title: 'PHP',
          prefix: 'php'
        },
        {
          title: 'Node.js',
          prefix: 'node-js'
        },
        {
          title: 'Ruby',
          prefix: 'ruby'
        }
      ]
    };}
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-backend {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(2, 160px);
      }

      .icon-flex_group {
        flex-direction: column;

        &:last-child {
          flex-direction: row;
          flex-wrap: nowrap;

          .icon-item {
            &:last-child {
              padding-left: 63px;
            }
          }
        }
      }
    }
  }
</style>
