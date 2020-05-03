<template>
  <div class="technologiesItem">
    <h4 class="technologiesItem__title sub-title">{{ title }}</h4>
    <p class="technologiesItem__paragraph paragraph">{{ paragraph }}</p>
    <div class="infrastructure-content" v-if="title === 'Infrastructure'">
      <h4 class="technologiesItem__title sub-title">{{ title }}</h4>
      <p class="technologiesItem__paragraph paragraph">{{ firstParagraph }}</p>
      <div></div>
      <p class="technologiesItem__paragraph paragraph">{{ secondParagraph }}</p>
      <div></div>
    </div>
    <BackendIcons v-if="title === 'Backend'"/>
    <FrontendIcons v-if="title === 'Frontend'"/>
    <MobileIcons v-if="title === 'Mobile'"/>
  </div>
</template>

<script>
import BackendIcons from '@/components/IconsGroup/BackendIcons';
import FrontendIcons from '@/components/IconsGroup/FrontendIcons';
import MobileIcons from '@/components/IconsGroup/MobileIcons';

export default {
  name: 'TechnologiesAndTools',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    },
    firstParagraph: {
      type: String,
      default: 'Paragraph'
    },
    secondParagraph: {
      type: String,
      default: 'Paragraph'
    }
  },
  components: {
    BackendIcons,
    FrontendIcons,
    MobileIcons
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
</style>
