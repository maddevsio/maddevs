<template>
  <div
    :class="theme"
    class="featured-post"
  >
    <div class="row featured-post__wrapper">
      <div class="col-12 col-lg-6 featured-post__main">
        <NuxtLink :to="to || link">
          <Component
            :is="titleTag"
            :title="$prismic.asText(post.data.title)"
            class="featured-post__title"
          >
            {{ shortTitle }}
          </Component>
          <p class="featured-post__paragraph">
            {{ firstParagraph }}
          </p>
        </NuxtLink>
        <div class="featured-post__data d-flex justify-content-between">
          <PostAuthor
            v-bind="author"
            :theme="theme"
          />
          <div class="featured-post__meta">
            <PostTag
              v-if="post.tags && post.tags.length"
              :tag="tag || post.tags[0]"
              :theme="theme"
            />
            <span class="created-at">{{ formattedDate }}</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 featured-post__image-wrapper">
        <NuxtLink
          :to="to || link"
          class="featured-post__image"
        >
          <img
            :data-src="post.data.featured_image.url"
            :alt="post.data.featured_image.alt"
            :width="post.data.featured_image.dimensions.width"
            :height="post.data.featured_image.dimensions.height"
            class="img_lazy"
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import PostTag from '@/components/Blog/shared/PostTag'
import linkResolver from '@/plugins/link-resolver'
import getFirstParagraph from '@/helpers/getFirstParagraph'
import formatDate from '@/helpers/formatDate'
import textEllipsis from '@/helpers/textEllipsis'

export default {
  name: 'FeaturedPost',
  components: {
    PostAuthor,
    PostTag,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },

    to: {
      type: String,
      default: '',
    },

    titleTag: {
      type: String,
      default: 'h2',
    },

    author: {
      type: Object,
      required: true,
    },

    tag: {
      type: String,
      default: null,
    },

    theme: {
      type: String,
      default: 'dark',
    },
  },

  computed: {
    formattedDate() {
      const { date } = this.post.data
      return formatDate(date)
    },

    link() {
      return linkResolver(this.post)
    },

    shortTitle() {
      const limit = 50
      const title = this.$prismic.asText(this.post.data.title)
      return textEllipsis(title, { limit })
    },

    firstParagraph() {
      const limit = 200
      const slices = this.post.data.body
      return getFirstParagraph(slices, limit)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/_vars';
.featured-post {
  &.dark {
    * {
      color: $text-color--white-primary;
    }
  }
  &.light {
    * {
      color: $text-color--black;
    }
    /deep/ .blog-post {
      &__author-name {
        color: $text-color--black;
      }
    }
  }
  a {
    text-decoration: none;
  }
  &__wrapper {
    align-items: center;
  }
  &__main {
    margin-top: 0;
  }
  &__title {
    font-size: 52px;
    line-height: 130%;
    margin-bottom: 15px;
    letter-spacing: -2px;
    font-family: 'Poppins-Medium', sans-serif;
  }
  &__paragraph {
    font-size: 17px;
    line-height: 28px;
    letter-spacing: -0.035em;
    margin-bottom: 44px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
  &__data {
    display: flex;
    justify-content: space-between;
    /deep/ .blog-post__author-name {
      color: $text-color--white-primary;
    }
    /deep/ .blog-post {
      &__author-image,
      &__none-image {
        width: 40px;
        min-width: 40px;
        height: 40px;
      }
    }
  }
  &__meta {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    .created-at {
      white-space: nowrap;
      margin-left: 24px;
      color: $text-color--grey;
    }
  }
  &__image-wrapper {
    margin-top: 0;
    a {
      display: block;
    }
    img {
      margin-left: auto;
      display: block;
      width: 100%;
      max-width: 90%;
      height: auto;
      vertical-align: middle;
    }
  }
}
@media only screen and (max-width: 991px) {
  .featured-post {
    &__main {
      padding: 0;
      margin-top: 0;
      order: 2;
    }
    &__paragraph {
      margin-bottom: 38px;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
    &__data {
      display: block;
      /deep/ .blog-post__author {
        margin-bottom: 16px;
      }
      /deep/ .blog-post {
        &__author-image,
        &__none-image {
          width: 30px;
          min-width: 30px;
          height: 30px;
        }
      }
    }
    &__title {
      font-size: 35px;
    }
    &__meta {
      justify-content: space-between;
      /deep/ .post-tag {
        padding: 8px 16px;
        line-height: 22px;
        margin-left: 0;
      }
    }
    &__image-wrapper {
      padding: 0;
      order: 1;
      margin-bottom: 17px;
      margin-top: 0;
      text-align: center;
      img {
        max-width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
