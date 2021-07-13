<template>
  <div class="content-item">
    <div class="content-item__content-wrapper">
      <div class="content-item__text-content">
        <ClientOnly>
          <UITitle class="content-item__title">
            {{ title }}
          </UITitle>
          <UISubtitle class="content-item__sub-title">
            {{ subtitle }}
          </UISubtitle>
          <UIParagraph
            v-for="paragraph in paragraphs"
            :key="paragraph"
            :class="`content-item__paragraph-${type}`"
            class="content-item__paragraph"
            data-testid="test-paragraph"
            v-html="paragraph"
          >
            {{ paragraph }}
          </UIParagraph>
        </ClientOnly>
      </div>
      <SoftwareDevelopmentIcons :icons="icons" />
    </div>
  </div>
</template>

<script>
import UIParagraph from '@/components/Services/UIParagraph'
import UITitle from '@/components/Services/UITitle'
import UISubtitle from '@/components/Services/UISubtitle'
import SoftwareDevelopmentIcons from '@/components/Services/SoftwareDevelopmentIcons'

export default {
  name: 'SoftwareDevelopmentContent',
  components: {
    UITitle,
    UISubtitle,
    UIParagraph,
    SoftwareDevelopmentIcons,
  },

  props: {
    type: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    paragraphs: {
      type: Array,
      default: () => [],
    },

    icons: {
      type: Array,
      default: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
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

  &__paragraph {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 22px;

      @media screen and (min-width: 400px) and (max-width: 991px) {
        margin-bottom: 11px;
      }
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
