<template>
  <CommonHeader
    :title="title"
    :subtitle="subtitle"
    :cover-image-url="featuredImage.url"
    :cover-image-alt-text="featuredImage.alt"
    :cover-image-width="featuredImage.dimensions.width"
    :cover-image-height="featuredImage.dimensions.height"
  >
    <template #afterTitle>
      <div class="blog-post__post-info">
        <!-- <PostAuthor :document="document" /> -->
        <div class="blog-post__date-tag">
          <div class="blog-post__date">
            {{ date }}
          </div>
          <div
            v-if="tags && tags.length"
            class="blog-post__tag"
          >
            {{ tags[0] }}
          </div>
        </div>
      </div>
    </template>
  </CommonHeader>
</template>

<script>
// import PostAuthor from '@/components/Blog/shared/PostAuthor'
import CommonHeader from '@/components/Blog/header/Common'

export default {
  name: 'Blog',
  components: {
    // PostAuthor,
    CommonHeader,
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

    featuredImage: {
      type: Object,
      default: () => {},
    },

    tags: {
      type: Array,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';

/deep/ .blog-post {
  &__post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 43px;

    /deep/ .blog-post__author-image {
      width: 30px;
      height: 30px;
    }
  }

  &__date-tag {
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 22px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    .blog-post__date {
      color: $text-color--grey-pale;
    }

    .blog-post__tag {
      color: $text-color--white-transparent;
      background: #404143;
      border-radius: 2px;
      padding: 4px 16px;
      margin-left: 24px;
    }
  }
}

@media screen and (max-width: 1024px) {
  /deep/ .blog-post {
    &__post-info {
      padding: 0 24px;
      display: block;
    }

    &__date-tag {
      justify-content: space-between;
      margin-top: 19px;

      .blog-post__date {
        order: 2;
      }

      .blog-post__tag {
        order: 1;
        margin-left: 0;
      }
    }
  }
}
</style>
