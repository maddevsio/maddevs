<template>
  <div class="case_card-use-case">
    <h4 class="case_card-use-case__title title_h4">{{title}}</h4>
    <div class="case_card-use-case__description">
      <TextParagraph>{{description}}</TextParagraph>
      <div class="case_card-use-case__image">
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
    // justify-content: space-between;

    &__title {
      margin-bottom: 11px;
    }

    &__description {
        display: flex;
        flex: 2;
    }

    &__image {
      position: relative;
      right: -32px;
      bottom: -42px;
      margin-top: auto;
    }
  }
</style>
