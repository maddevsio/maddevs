<template>
  <blockquote class="case_blockquote-author m-auto">
    <slot></slot>
    <div class="case_blockquote-author__author-info m-24_top">
      <div class="case_blockquote-author__photo m-auto">
        <Picture
          :picture-folder="pictureFolder"
          :file-name="fileName"
          :file-extension="fileExtension"
          :alt="alt"
          :lazy-loading="true"
        />
      </div>
      <TextParagraph class="case_blockquote-author__name">{{ authorName }}</TextParagraph>
      <p class="case_blockquote-author__position">{{ authorPosition }}</p>
    </div>
  </blockquote>
</template>

<script>
import Picture from '@/components/Cases/Picture'
import TextParagraph from '@/components/Cases/TextParagraph'

export default {
  name: 'TextQuoteAuthor',
  components: {
    Picture,
    TextParagraph,
  },

  props: {
    authorName: {
      type: String,
      default: '',
    },

    authorPosition: {
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
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/cases/_mixins';

.case_blockquote-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @include italic_text($text-color--black-cases, 30px, 166%, -0.02em);

  &::before {
    content: '';
    width: 408px;
    height: 1px;
    position: absolute;
    top: 0;
    background-color: $border-color--grey-20-percent;
  }

  &__photo {
    width: 71px;
    height: 70px;
    margin-bottom: 4px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
  }

  &__position {
    @include default_text($text-color--grey-cases, 13px, 21.58px, -2%, normal);
  }

  @media screen and (max-width: 768px) {
    @include italic_text($text-color--black-cases, 21px, 150%, -0.02em);

    &::before {
      width: 327px;
    }
  }

  @media screen and (max-width: 370px) {
    &::before {
      width: 100%;
    }
  }
}
</style>
