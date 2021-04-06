<template>
  <NuxtLink
    :to="link"
    :class="{ 'latest-post': isRecentPost }"
  >
    <div class="blog-post">
      <img
        :src="post.data.featured_image.url"
        :alt="post.data.featured_image.alt"
        class="blog-post__image"
        width="400"
        height="217"
      >
      <div>
        <h2
          class="blog-post__title blog-post__title--short"
          :title="$prismic.asText(post.data.title)"
        >
          {{ shortTitle }}
        </h2>
        <h2
          class="blog-post__title blog-post__title--very-short"
          :title="$prismic.asText(post.data.title)"
        >
          {{ veryShortTitle }}
        </h2>
        <h2
          class="blog-post__title blog-post__title--full"
          :title="$prismic.asText(post.data.title)"
        >
          {{ $prismic.asText(post.data.title) }}
        </h2>
        <p
          class="blog-post__paragraph"
          data-testid="test-blog-post"
        >
          {{ firstParagraph }}
        </p>
        <div class="blog-post__meta">
          <span class="created-at">{{ formattedDate }}</span>
          <span
            v-if="post.tags.length"
            class="tag"
          >{{ post.tags[0] }}</span>
        </div>
        <PostAuthor :document="post.data" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import linkResolver from '@/plugins/link-resolver.js'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import getFirstParagraph from '@/helpers/getFirstParagraph'
import textEllipsis from '@/helpers/textEllipsis'

export default {
  name: 'RecommendedBlogWidget',
  components: {
    PostAuthor,
  },

  props: {
    isRecentPost: {
      type: Boolean,
      default: () => false,
    },

    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    link() {
      return linkResolver(this.post)
    },

    formattedDate() {
      return Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(
        new Date(this.post.data.date),
      )
    },

    firstParagraph() {
      const limit = 150
      const slices = this.post.data.body
      return getFirstParagraph(slices, limit)
    },

    shortTitle() {
      const limit = 55
      const title = this.$prismic.asText(this.post.data.title)
      return textEllipsis(title, { limit })
    },

    veryShortTitle() {
      const limit = 45
      const title = this.$prismic.asText(this.post.data.title)
      return textEllipsis(title, { limit })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

.blog-post {
  color: $text-color--black;
  text-decoration: none;

  p {
    margin-top: 5px;
  }

  p,
  span {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    opacity: 0.8;
  }

  span {
    letter-spacing: -0.02em;
  }

  a {
    text-decoration: none;
  }

  &__image {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  &__featured-image {
    max-width: 100%;
    height: auto;
  }

  &__title {
    font-size: 21px;
    line-height: 130%;
    letter-spacing: -0.02em;
    font-family: 'Poppins-Medium', sans-serif;
    display: -webkit-box;
    max-width: 100%;
    margin: 0 auto;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 54px;
    &--short {
      display: block;
      @media screen and (max-width: 1196px) {
        display: none;
      }
    }
    &--very-short {
      display: none;
      @media screen and (max-width: 1196px) {
        display: block;
      }
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    &--full {
      display: none;
      height: auto;
      @media screen and (max-width: 991px) {
        display: block;
      }
    }
  }

  &__paragraph {
    font-size: 16px;
    line-height: 166%;
    letter-spacing: -0.035em;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  &__meta {
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    .created-at {
      margin-right: 24px;
      color: $text-color--grey;
    }

    .tag {
      background-color: $bgcolor--silver;
      padding: 4px 16px;
      transition: 0.2s;
      line-height: 22px;
    }
  }
}
</style>
