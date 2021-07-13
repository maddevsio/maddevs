<template>
  <div class="it-consulting-item">
    <div class="it-consulting-item__text-content">
      <ClientOnly>
        <UITitle
          class="it-consulting-item__title"
          v-html="title"
        >
          {{ title }}
        </UITitle>
        <UISubtitle
          :class="`it-consulting-item__sub-title-${className}`"
          class="it-consulting-item__sub-title"
          v-html="subtitle"
        >
          {{ subtitle }}
        </UISubtitle>
        <UIParagraph class="it-consulting-item__paragraph">
          {{ paragraph }}
        </UIParagraph>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import UIParagraph from '@/components/Services/UIParagraph'
import UITitle from '@/components/Services/UITitle'
import UISubtitle from '@/components/Services/UISubtitle'

export default {
  name: 'ItConsultingContent',
  components: {
    UITitle,
    UISubtitle,
    UIParagraph,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
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
