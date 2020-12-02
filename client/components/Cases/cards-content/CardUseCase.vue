<template>
  <div class="card-use-case">
    <h4 class="card-use-case__title case_title_h4" :class="`card-use-case__${classList.uniqueСlass}-title`">
      {{title}}
    </h4>
    <div class="card-use-case__description-wrapper">
      <TextParagraph class="card-use-case__paragraph" :class="`card-use-case__${classList.uniqueСlass}-paragraph`">
        {{description}}
      </TextParagraph>
      <div :class="`card-use-case__${classList.uniqueСlass}-image`" class="card-use-case__desktop-picture">
        <Picture
          :pictureFolder="pictureFolder"
          :fileName="fileName"
          :fileExtension="fileExtension"
          :alt="alt"
        />
      </div>
      <div :class="`card-use-case__${classList.uniqueСlass}-image-mobile`" class="card-use-case__mobile-picture">
        <Picture
          :pictureFolder="pictureFolder"
          :fileName="`${fileName}-mobile`"
          :fileExtension="fileExtension"
          :alt="alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';
export default {
  name: 'CardUseCase',
  components: {
    TextParagraph,
    Picture
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    pictureFolder: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    },
    fileExtension: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    classList: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-use-case {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: -35px;
    position: relative;

    &__description-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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
      color: $text-color--black-cases;
    }

    &__red-card-image,
    &__black-card-image,
    &__turquoise-card-image,
    &__white-card-image {
      position: relative;
      right: -33px;
    }

    &__red-card-image,
    &__black-card-image {
      height: 198px;
      width: 140px;
    }

    &__turquoise-card-image,
    &__white-card-image {
      width: 166px;
    }

    &__turquoise-card-image {
      height: 158px;
    }

    &__white-card-image {
      height: 166px;
      bottom: -23px;
    }

    &__mobile-picture {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      margin-bottom: 0;
      text-align: center;

      &__paragraph {
        margin-bottom: 24px;
      }

      &__desktop-picture {
        display: none;
      }

      &__mobile-picture {
        width: 100%;
        height: auto;
        display: block;
      }

      &__white-card-image-mobile,
      &__black-card-image-mobile {
        margin-bottom: -40px;
      }

      &__turquoise-card-image-mobile,
      &__red-card-image-mobile {
        margin-bottom: -35px;
      }

      &__description-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }

    @media screen and (max-width: 835px) {
      &__mobile-picture {
        max-width: 387px;
        margin-bottom: -40px;
      }
    }
  }
</style>
