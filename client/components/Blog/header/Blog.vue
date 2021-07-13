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
        <PostAuthor
          v-bind="blogAuthor"
          theme="dark"
        />
        <div class="blog-post__date-tag">
          <div class="blog-post__date">
            {{ date }}
          </div>
          <PostTag
            v-if="tags.length"
            :tag="tags[0]"
            theme="dark"
          />
        </div>
      </div>
    </template>
  </CommonHeader>
</template>

<script>
import { mapGetters } from 'vuex'
import PostTag from '@/components/Blog/shared/PostTag'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import CommonHeader from '@/components/Blog/header/Common'

export default {
  name: 'Blog',
  components: {
    PostTag,
    PostAuthor,
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

  computed: {
    ...mapGetters(['blogAuthor', 'blogTag']),
  },
}
</script>

<style scoped lang="scss">
/deep/ .blog-post {
  &__post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 43px;
    text-decoration: none;

    a {
      text-decoration: none;
    }

    /deep/ .blog-post__author-image {
      width: 30px;
      min-width: 30px;
      height: 30px;
    }
  }

  &__date-tag {
    @include font('Inter', 13px, 400);
    display: flex;
    align-items: center;
    line-height: 22px;
    font-weight: 400;

    .blog-post__date {
      color: $text-color--grey-pale;
      margin-right: 24px;
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
        margin-right: 0;
      }
    }
  }
}
</style>
