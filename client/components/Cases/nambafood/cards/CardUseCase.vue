<template>
  <div class="card-use-case">
    <ClientOnly>
      <h3
        :class="`card-use-case__${classList.uniqueСlass}-title`"
        class="card-use-case__title case_title_h4"
        v-html="title"
      >
        {{ title }}
      </h3>
    </ClientOnly>
    <div
      :class="`card-use-case__${classList.uniqueСlass}-description-wrapper`"
      class="card-use-case__description-wrapper"
    >
      <TextParagraph
        :class="`card-use-case__${classList.uniqueСlass}-paragraph`"
        class="card-use-case__paragraph"
      >
        {{ description }}
      </TextParagraph>
      <div
        :class="`card-use-case__${classList.uniqueСlass}-picture`"
        class="card-use-case__desktop-picture"
      >
        <Picture
          :folder="pictureFolder"
          :file="fileName"
          :extension="fileExtension"
          :alt="alt"
          :lazy="false"
        />
      </div>
      <div
        :class="`card-use-case__${classList.uniqueСlass}-mobile-picture`"
        class="card-use-case__mobile-picture"
      >
        <Picture
          :folder="pictureFolder"
          :file="`${fileName}-mobile`"
          :extension="fileExtension"
          :alt="alt"
          :lazy="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CardUseCase',
  components: {
    TextParagraph,
    Picture,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    pictureFolder: {
      type: String,
      default: '',
    },

    fileName: {
      type: String,
      default: '',
    },

    fileExtension: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    classList: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped lang="scss">
.card-use-case {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &__description-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    margin-bottom: -32px;
    max-height: 192px;
  }

  &__title {
    margin-bottom: 11px;
  }

  &__title,
  &__paragraph {
    color: $text-color--white-primary;
  }

  &__white-card-title,
  &__white-card-paragraph {
    color: $text-color--black-oil;
  }

  &__desktop-picture {
    margin-top: auto;
    position: relative;
    right: -32px;
  }

  &__red-card-picture,
  &__black-card-picture {
    width: 140px;
  }

  &__turquoise-card-picture,
  &__white-card-picture {
    width: 166px;
  }

  &__mobile-picture {
    display: none;
  }

  &__turquoise-card-paragraph {
    padding-bottom: 40px;
  }

  /deep/ span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;

    &__title {
      /deep/ br {
        display: none;
      }
    }

    &__turquoise-card-paragraph {
      padding-bottom: 0;
    }

    &__paragraph {
      margin-bottom: 24px;
    }

    &__desktop-picture {
      display: none;
    }

    &__mobile-picture {
      display: block;
      width: 100%;
      height: auto;
    }

    &__description-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -33px;
    }

    &__black-card-description-wrapper {
      margin-bottom: -7.1vw;
    }

    &__white-card-mobile-picture {
      margin-bottom: -6.4vw;
    }
  }

  @media screen and (max-width: 768px) {
    &__description-wrapper {
      margin-bottom: -21px;
    }

    &__black-card-description-wrapper {
      margin-bottom: -6.6vw;
    }
  }

  @media screen and (max-width: 898px) {
    &__white-card-mobile-picture {
      margin-bottom: -5.9vw;
    }
  }

  @media screen and (max-width: 620px) {
    &__mobile-picture {
      max-width: 320px;
    }

    &__black-card-description-wrapper {
      margin-bottom: -21px;
    }

    &__white-card-mobile-picture {
      margin-bottom: 0;
    }
  }
}
</style>
