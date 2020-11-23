<template>
  <blockquote class="case_blockquote-author m-auto">
    <slot></slot>
    <div class="case_blockquote-author__author-info m-24_top">
      <!-- Заменю на тег Picture как только подготовят реальную фотографию автора  -->
      <div class="case_blockquote-author__photo m-auto"></div>
      <p class="case_blockquote-author__name">{{authorName}}</p>
      <p class="case_blockquote-author__position">{{authorPosition}}</p>
    </div>
  </blockquote>
</template>

<script>
import Picture from '@/components/Cases/Picture';
export default {
  name: 'TextQuoteAuthor',
  components: {
    Picture
  },
  props: {
    authorName: {
      type: String,
      default: ''
    },
    authorPosition: {
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
      width: 70px;
      height: 70px;
      margin-bottom: 4px;
      border-radius: 100%;
      background-color: gainsboro;
    }

    &__position {
      @include default_text($text-color--grey-cases, 13px, 21.58px, -2%, normal);
    }
  }
</style>
