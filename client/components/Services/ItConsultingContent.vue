<template>
  <div class="it-consulting-item col-xl-4 col-lg-4">
    <div class="it-consulting-item__text-content">
      <client-only>
        <UIItemTitle :item-title="title" class="it-consulting-item__title" v-html="title" />
        <UIItemSubTitle
          :item-sub-title="subTitle"
          :class="`it-consulting-item__sub-title-${className}`"
          class="it-consulting-item__sub-title"
          v-html="subTitle"
        />
        <UIParagraph :paragraph="paragraph" class="it-consulting-item__paragraph" />
      </client-only>
    </div>
  </div>
</template>

<script>
import UIParagraph from '@/components/ui/Services/UIParagraph'
import UIItemTitle from '@/components/ui/Services/UIItemTitle'
import UIItemSubTitle from '@/components/ui/Services/UIItemSubTitle'

export default {
  name: 'ItConsultingContent',
  components: {
    UIItemTitle,
    UIItemSubTitle,
    UIParagraph,
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

    paragraph: {
      type: String,
      default: '',
    },

    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.it-consulting-item {
  &__text-content {
    height: calc(100% - 64px);
    padding: 32px;
    background-color: $bgcolor--white;

    @media screen and (max-width: 330px) {
      padding: 29px;
    }
  }

  &__title,
  &__sub-title,
  &__paragraph {
    color: $text-color--black;
  }

  &__title {
    @media only screen and (max-width: 991px) {
      /deep/ br {
        display: none;
      }
    }
  }

  &__sub-title {
    margin-bottom: 8px;

    @media screen and (max-width: 1023px) {
      margin-bottom: 13px;
    }
  }

  &__sub-title-third-item {
    @media only screen and (min-width: 1400px) {
      width: 333px;
    }
  }
}
</style>
