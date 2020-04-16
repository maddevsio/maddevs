<template>
  <div class="outsourcing-content" :class="className">
    <div class="outsourcing-content__text-content_wrapper">
      <h1 class="title">{{ title }}</h1>
      <h2 class="title">{{ subTitle }}</h2>
      <p class="title">{{ paragraph }}</p>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText"/>
  </div>
</template>

<script>
import buttonTrigger from '../ui/button-trigger';

export default {
  props: ['title', 'subTitle', 'paragraph', 'buttonInnerText', 'className'],
  name: 'OutsourcingContent',
  components: {
    buttonTrigger
  },
};
</script>

<style lang="scss" scoped>
  .teams * {
    color: #f2f2f2;;
  }

  .individuals * {
    color: #96969C;
  }
</style>