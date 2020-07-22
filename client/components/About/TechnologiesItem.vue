<template>
  <div class="technologies-item">
    <h4 class="technologies-item__title sub-title">{{ title }}</h4>
    <p class="technologies-item__paragraph paragraph">{{ paragraph }}</p>
    <div class="icons-list">
      <div class="icon-flex_group">
        <TechIcon v-for="(icon, i) in icons" :key="i" :class-prefix="icon.prefix" :title="icon.title"/>
      </div>
    </div>
  </div>
</template>

<script>


import TechIcon from '../IconsGroup/tech-icon';
export default {
  name: 'TechnologiesItem',
  components: {TechIcon},
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    },
    icons: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .technologies-item {
    padding-bottom: 3vw;

    &__title,
    &__paragraph {
      color: $text-color--grey;
    }

    /deep/.icon-flex_group {
      display: flex;
      flex-wrap: wrap;
    }

    /deep/.icon-item {
      padding-bottom: 15px;
      padding-right: 15px;
    }

    /deep/.icons-list {
      padding: 1.1vw 0;
    }
  }

  .backend {
    padding-bottom: 13px;
  }

  @media only screen and (max-width: 1440px) {
    .technologies-project-management {
      .paragraph {
        padding-right: 65px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .technologies-project-management {
      .paragraph {
        padding-right: 5px;
      }
    }

    .technologies-backend {
      /deep/.icon-flex_group {
        flex-direction: column;
        flex-wrap: initial;
      }
    }
  }

  @media only screen and (max-width: 940px) {
    .technologies-item,
    .technologies-backend {
      /deep/.icon-flex_group {
        flex-direction: row;
      }
    }
  }

  @media only screen and (max-width: 745px) {

  }

  @media only screen and (max-width: 640px) {
    .technologies-backend {
      /deep/.icon-flex_group {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    .technologies-item {
      /deep/.icons-list {
        padding: 3.1vw 0;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .technologies-item {
      padding-bottom: 25px;
    }
  }
</style>
