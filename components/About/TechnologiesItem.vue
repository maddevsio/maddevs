<template>
  <div>
    <div class="technologiesItem">
      <h4 class="technologiesItem__title sub-title">{{ title }}</h4>
      <p class="technologiesItem__paragraph paragraph">{{ paragraph }}</p>
      <BackendIcons v-if="title === 'Backend'"/>
      <FrontendIcons v-if="title === 'Frontend'"/>
      <MobileIcons v-if="title === 'Mobile'"/>
      <ProjectManagement v-if="title === 'Project management'"/>
    </div>
  </div>
</template>

<script>
import BackendIcons from '@/components/IconsGroup/BackendIcons';
import FrontendIcons from '@/components/IconsGroup/FrontendIcons';
import MobileIcons from '@/components/IconsGroup/MobileIcons';
import ProjectManagement from '@/components/IconsGroup/ProjectManagement';

export default {
  name: 'TechnologiesItem',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    }
  },
  components: {
    BackendIcons,
    FrontendIcons,
    MobileIcons,
    ProjectManagement
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
</style>
