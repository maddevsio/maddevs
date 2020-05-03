<template>
  <div class="technologiesItem">
    <h4 class="technologiesItem__title sub-title">{{ title }}</h4>
    <p class="technologiesItem__paragraph paragraph">{{ paragraph }}</p>
    <div class="infrastructure-content" v-if="title === 'Infrastructure'">
      <h4 class="technologiesItem__title sub-title">{{ title }}</h4>
      <p class="technologiesItem__paragraph paragraph">{{ firstParagraph }}</p>
      <InfrastructureFirstIconsGroup />
      <p class="technologiesItem__paragraph paragraph">{{ secondParagraph }}</p>
      <InfrastructureSecondIconsGroup />
    </div>
    <BackendIcons v-if="title === 'Backend'"/>
    <FrontendIcons v-if="title === 'Frontend'"/>
    <MobileIcons v-if="title === 'Mobile'"/>
    <ProjectManagement v-if="title === 'Project management'"/>
  </div>
</template>

<script>
import BackendIcons from '@/components/IconsGroup/BackendIcons';
import FrontendIcons from '@/components/IconsGroup/FrontendIcons';
import MobileIcons from '@/components/IconsGroup/MobileIcons';
import InfrastructureFirstIconsGroup from '@/components/IconsGroup/InfrastructureFirstIconsGroup';
import InfrastructureSecondIconsGroup from '@/components/IconsGroup/MobileIcons';
import ProjectManagement from '@/components/IconsGroup/ProjectManagement';

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
