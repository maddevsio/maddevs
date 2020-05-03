<template>
  <div>
    <div class="technologies-item" :class="className">
      <h4 class="technologies-item__title sub-title">{{ title }}</h4>
      <p class="technologies-item__paragraph paragraph">{{ paragraph }}</p>
      <FrontendIcons v-if="title === 'Frontend'" />
      <BackendIcons v-if="title === 'Backend'" />
      <MobileIcons v-if="title === 'Mobile'" />
      <ProjectManagement v-if="title === 'Project Management'"/>
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
    },
    className: {
      type: String,
      default: 'class name'
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

  .technologies-item {
    padding-bottom: 40px;
    
    &__title,
    &__paragraph {
      color: $text-color--grey;
    }
  }

  .backend {
    padding-bottom: 13px;
  }
</style>
