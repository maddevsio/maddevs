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
  name: 'MobileIcons',
  components: {TechIcon},
  data() {
    return {
      icons: [
        {
          title: 'Kotlin',
          prefix: 'kotlin'
        },
        {
          title: 'Java',
          prefix: 'java'
        },
        {
          title: 'Objective-C',
          prefix: 'objective'
        },
        {
          title: 'Swift',
          prefix: 'swift'
        }
      ]
    };}
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-mobile {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      .icon-flex_group {
        &:first-child {
          .icon-item {
            &:first-child {
              padding-right: 86px;
            }
          }
        }

        &:last-child {
          flex-direction: row-reverse;
          justify-content: flex-end;

          .icon-item {
            &:last-child {
              padding-right: 87px;
            }
          }
        }
      }
    }
  }
</style>
