<template>
  <div class="infrastructure-optimisation__content">
    <div class="infrastructure-optimisation__content_wrapper">
      <h1 class="infrastructure-optimisation__title title" v-if="title === 'Up to savings on infrastructure'">
        <span class="infrastructure-optimisation__title-image-wrapp">
          Up to
          <img src="#" alt="image">
        </span>
        savings on <br> infrastructure
      </h1>
      <h1 class="infrastructure-optimisation__title title" v-else>{{ title }}</h1>
      <h2 class="infrastructure-optimisation__sub-title sub-title">{{ subTitle }}</h2>
      <p class="infrastructure-optimisation__paragraph paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfrastructureContent',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
</style>