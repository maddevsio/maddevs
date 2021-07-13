<template>
  <div class="content-item">
    <UITitle
      :class="`content-item__title-${className}`"
      class="content-item__title"
    >
      {{ title }}
    </UITitle>
    <UISubtitle
      :class="`content-item__sub-title-${className}`"
      class="content-item__sub-title"
    >
      {{ subtitle }}
    </UISubtitle>
    <UIParagraph class="content-item__paragraph">
      {{ paragraph }}
    </UIParagraph>
  </div>
</template>

<script>
import UIParagraph from '@/components/Services/UIParagraph'
import UITitle from '@/components/Services/UITitle'
import UISubtitle from '@/components/Services/UISubtitle'

export default {
  name: 'InfrastructureOptimisationContent',
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

  @media screen and (max-width: 1280px) {
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

  @media screen and (max-width: 1023px) {
    &__title,
    &__sub-title,
    &__paragraph {
      width: 100%;
    }

    &__sub-title {
      margin-bottom: 13px;
    }

    &:last-child {
      margin-top: 48px;
    }
  }
}
</style>
