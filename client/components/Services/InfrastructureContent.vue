<template>
  <div class="content-item">
    <UIItemTitle :itemTitle="title" class="content-item__title" :class="`content-item__title-${className}`"/>
    <UIItemSubTitle :itemSubTitle="subTitle" class="content-item__sub-title" :class="`content-item__sub-title-${className}`"/>
    <UIParagraph :paragraph="paragraph" class="content-item__paragraph" />
  </div>
</template>

<script>
import UIParagraph from '@/components/ui/Services/UIParagraph';
import UIItemTitle from '@/components/ui/Services/UIItemTitle';
import UIItemSubTitle from '@/components/ui/Services/UIItemSubTitle';

export default {
  name: 'InfrastructureContent',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  components: {
    UIItemTitle,
    UIItemSubTitle,
    UIParagraph
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .content-item {
    &__title-first-item {
      width: 463px;
    }

    &__sub-title-first-item {
      width: 310px;
    }

    &__title-second-item, 
    &__sub-title-second-item,
    &__paragraph {
      width: 397px;
    }

    &__sub-title {
      margin-bottom: 8px;
    }

    @media screen and  (max-width: 1280px) {
      &__title-first-item {
        width: 280px;
      }

      &__sub-title-first-item {
        width: 260px;
      }

      &__title-second-item, 
      &__sub-title-second-item,
      &__paragraph {
        width: 315px;
      }
    }

    @media screen and  (max-width: 1023px) {
      &__title, 
      &__sub-title,
      &__paragraph {
        width: 100%;
      }

      &:last-child {
        margin-top: 48px;
      }
    }
  }
</style>
