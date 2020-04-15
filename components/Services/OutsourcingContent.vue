<template>
  <div class="outsourcing-content">
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
  props: ['title', 'subTitle', 'paragraph', 'buttonInnerText'],
  name: 'OutsourcingContent',
  components: {
    buttonTrigger
  },
};
</script>

<style lang="scss" scoped>
  
</style>