<template>
  <div class="technologies-item">
    <h4 class="technologies-item__title sub-title">{{ title }}</h4>
    <p class="technologies-item__paragraph paragraph">{{ paragraph }}</p>
    <FrontendIcons v-if="title === 'Frontend'" />
    <BackendIcons v-if="title === 'Backend'" />
    <MobileIcons v-if="title === 'Mobile'" />
    <ProjectManagement v-if="title === 'Project Management'"/>
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

  .technologies-item {
    padding-bottom: 40px;

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
      padding: 13px 0;
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

  @media only screen and (max-width: 640px) {
    .technologies-backend {
      /deep/.icon-flex_group {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .technologies-item {
      padding-bottom: 25px;
    }
  }
</style>
