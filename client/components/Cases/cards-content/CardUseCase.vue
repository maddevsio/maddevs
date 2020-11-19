<template>
  <div class="case_card-use-case">
    <h4 
      class="case_card-use-case__title title_h4" 
      :class="`case_card-use-case__${classList.uniqueСlass}-title`"
    >
      {{title}}
    </h4>
    <div class="case_card-use-case__description-wrapper">
      <TextParagraph 
        class="case_card-use-case__paragraph" 
        :class="`case_card-use-case__${classList.uniqueСlass}-paragraph`"
      >
        {{description}}
      </TextParagraph>
      <div 
        :class="`case_card-use-case__${classList.uniqueСlass}-image`"
      >
        <Picture
          :pictureFolder="pictureFolder"
          :fileName="fileName"
          :fileNameRetina="fileNameRetina"
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
    fileNameRetina: {
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

  .case_card-use-case {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: -35px;

    &__description-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__title {
      margin-bottom: 11px;
    }

    &__title,
    &__paragraph {
      color: $text-color--white;
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
      bottom: -25px;
    }
  }
</style>
