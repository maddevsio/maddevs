<template>
  <blockquote class="case_blockquote-author m-auto">
    <slot />
    <div class="case_blockquote-author__author-info m-24_top">
      <div class="case_blockquote-author__photo m-auto">
        <Picture
          :folder="folder"
          :file="file"
          :extension="extension"
          :alt="author"
          :width="71"
          :height="71"
        />
      </div>
      <TextParagraph class="case_blockquote-author__name">
        {{ author }}
      </TextParagraph>
      <p class="case_blockquote-author__position">
        {{ position }}
      </p>
    </div>
  </blockquote>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'TextQuoteAuthor',
  components: {
    Picture,
    TextParagraph,
  },

  props: {
    author: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    folder: {
      type: String,
      default: '',
    },

    file: {
      type: String,
      default: '',
    },

    extension: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.case_blockquote-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @include italic-text($text-color--black-oil, 30px, 166%, -0.02em);

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
    @include default-text($text-color--grey-opacity-40-percent, 13px, 21.58px, -2%, normal);
  }

  @media screen and (max-width: 768px) {
    @include italic-text($text-color--black-oil, 21px, 150%, -0.02em);

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
