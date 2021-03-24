<template>
  <div class="content-item col-xl-4 col-lg-4">
    <div class="content-item__content-wrapper">
      <div class="content-item__text-content">
        <client-only>
          <UIItemTitle :item-title="title" class="content-item__title" />
          <UIItemSubTitle :item-sub-title="subTitle" class="content-item__sub-title" />
          <UIParagraph
            :paragraph="firstParagraph"
            :class="`content-item__paragraph-${title.toLowerCase()}`"
            class="content-item__paragraph content-item__paragraph-first"
            v-html="firstParagraph"
          />
          <UIParagraph
            :paragraph="secondParagraph"
            class="content-item__paragraph content-item__paragraph-second"
            v-html="secondParagraph"
          />
        </client-only>
      </div>
      <SoftwareDevelopmentIcons :icons="icons" />
    </div>
  </div>
</template>

<script>
import UIParagraph from '@/components/ui/Services/UIParagraph'
import UIItemTitle from '@/components/ui/Services/UIItemTitle'
import UIItemSubTitle from '@/components/ui/Services/UIItemSubTitle'
import SoftwareDevelopmentIcons from '@/components/Services/SoftwareDevelopmentIcons'

export default {
  name: 'SoftwareDevelopmentContent',
  components: {
    UIItemTitle,
    UIItemSubTitle,
    UIParagraph,
    SoftwareDevelopmentIcons,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    subTitle: {
      type: String,
      default: '',
    },

    firstParagraph: {
      type: String,
      default: '',
    },

    secondParagraph: {
      type: String,
      default: '',
    },

    icons: {
      type: Array,
      default: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.content-item {
  &__content-wrapper {
    height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    background-color: $bgcolor--white;
    @media screen and (max-width: 400px) {
      height: calc(100% - 56px);
      padding: 32px 20px 24px;
    }
  }

  &__title,
  &__sub-title,
  &__paragraph {
    color: $text-color--black-lighter;
  }

  &__sub-title {
    margin-bottom: 8px;

    @media screen and (min-width: 400px) and (max-width: 1023px) {
      margin-bottom: 13px;
    }
  }

  &__paragraph-first {
    margin-bottom: 30px;
  }

  &__paragraph-second {
    margin-bottom: 22px;

    @media screen and (min-width: 400px) and (max-width: 991px) {
      margin-bottom: 11px;
    }
  }

  &__paragraph-frontend {
    @media screen and (min-width: 992px) and (max-width: 1070px) {
      width: 183px;
      line-height: 25px;
    }
  }
}
</style>
