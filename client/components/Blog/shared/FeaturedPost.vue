<template>
  <div
    :class="`featured-post--${theme}-theme`"
    class="featured-post"
  >
    <div class="featured-post__wrapper">
      <div class="featured-post__info-wrapper">
        <NuxtLink
          :to="link"
          class="featured-post__info"
        >
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
        <div class="featured-post__meta-wrapper">
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
            <span class="featured-post__date">{{ formattedDate }}</span>
          </div>
        </div>
      </div>
      <div class="featured-post__image-wrapper">
        <NuxtLink
          :to="link"
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
.featured-post {
  &--dark-theme {
    * {
      color: $text-color--white-primary;
    }
  }
  &--light-theme {
    * {
      color: $text-color--black;
    }
  }
  a {
    text-decoration: none;
  }
  &__wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    @media only screen and (max-width: 992px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
  &__info-wrapper{
    margin-top: 0;
  }
  &__title {
    @include font('Poppins', 52px, 600);
    line-height: 130%;
    margin-bottom: 15px;
    letter-spacing: -2px;
  }
  &__paragraph {
    @include font('Inter', 17px, 400);
    line-height: 28px;
    letter-spacing: -0.035em;
    margin-bottom: 44px;
  }
  &__meta {
    @include font('Inter', 13px, 400);
    display: flex;
    align-items: center;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      /deep/ .post-author {
        margin-right: 24px;
        &__image,
        &__none-image {
          width: 40px;
          min-width: 40px;
          height: 40px;
        }
      }
    }
  }
  &__date {
    white-space: nowrap;
    margin-left: 24px;
    color: $text-color--grey;
  }
  &__image {
    display: block;
    width: 90%;
    margin-left: auto;
    img {
      display: block;
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    &-wrapper {
      margin-top: 0;
    }
  }
}
@media only screen and (max-width: 991px) {
  .featured-post {
    &__info-wrapper {
      order: 1;
      padding: 0;
    }
    &__title {
      font-size: 35px;
    }
    &__paragraph {
      margin-bottom: 38px;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
    &__meta {
      justify-content: space-between;
      .post-tag {
        padding: 8px 16px;
        line-height: 22px;
        margin-left: 0;
      }
      &-wrapper {
        display: block;
        /deep/ .post-author {
          margin-right: 0;
          margin-bottom: 16px;
          &__image,
          &__none-image {
            width: 30px;
            min-width: 30px;
            height: 30px;
          }
        }
      }
    }
    &__image {
      width: 100%;
      margin: 0;
      &-wrapper {
        order: 0;
        padding: 0;
        margin-bottom: 17px;
      }
    }
  }
}
</style>
