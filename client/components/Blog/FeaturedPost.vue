<template>
  <nuxt-link :to="link" class="featured-post">
    <div class="row featured-post__wrapper">
      <div class="col-12 col-lg-6 featured-post__main">
        <h1 class="featured-post__title">{{ $prismic.asText(post.data.title) }}</h1>
        <p class="featured-post__paragraph">{{ getFirstParagraph() }}</p>
        <div class="featured-post__data d-flex justify-content-between">
          <post-author :document="post.data" />
          <div class="featured-post__meta">
            <post-tag v-if="post.tags.length" :tag="post.tags[0]" theme="dark" />
            <span class="created-at">{{ formattedDate }}</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 featured-post__image-wrapper">
        <img
          :src="post.data.featured_image.url"
          :alt="post.data.featured_image.alt"
          :width="post.data.featured_image.dimensions.width"
          :height="post.data.featured_image.dimensions.height"
          class="featured-post__image"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import PostAuthor from '@/components/Blog/PostAuthor'
import PostTag from '@/components/Blog/PostTag'
import linkResolver from '@/plugins/link-resolver.js'

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
  },

  computed: {
    formattedDate() {
      const date = this ? this.post.data.date : ''

      return Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(date))
    },

    link() {
      return linkResolver(this.post)
    },
  },

  methods: {
    getFirstParagraph() {
      const textLimit = 200
      const slices = this.post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.forEach(slice => {
        if (!haveFirstParagraph && slice.slice_type === 'text') {
          slice.primary.text.forEach(block => {
            if (block.type === 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text
              haveFirstParagraph = true
            }
          })
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      return firstParagraph.length > textLimit
        ? `${limitedText.substr(0, limitedText.lastIndexOf(' '))}...`
        : firstParagraph
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/_vars';

.featured-post {
  color: $text-color--white-primary;
  text-decoration: none;
  display: block;

  &__wrapper {
    margin: 95px 0;
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

    /deep/ .blog-post__author-image {
      width: 40px;
      height: 40px;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    .created-at {
      margin-left: 24px;
      color: $text-color--grey;
    }
  }

  &__image-wrapper {
    text-align: right;
    margin-top: 0;

    img {
      max-width: 90%;
      height: auto;
      vertical-align: middle;
    }
  }
}

@media only screen and (max-width: 991px) {
  .featured-post {
    &__wrapper {
      margin-top: 0;
      margin-bottom: 36px;
    }

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

      /deep/ .blog-post__author-image {
        width: 30px;
        height: 30px;
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
      }
    }
  }
}
</style>
