<template>
  <nuxt-link :to="link" :class="{ 'latest-post': isRecentPost }">
    <div class="blog-post">
      <img :src="post.data.featured_image.url" :alt="post.data.featured_image.alt" class="blog-post__image" />
      <div>
        <h2 class="blog-post__title" :title="$prismic.asText(post.data.title)">
          {{ $prismic.asText(post.data.title) }}
        </h2>
        <p class="blog-post__paragraph" data-testid="test-blog-post">{{ getFirstParagraph(post) }}</p>
        <div class="blog-post__meta">
          <span class="created-at">{{ formattedDate }}</span>
          <span v-if="post.tags.length" class="tag">{{ post.tags[0] }}</span>
        </div>
        <post-author :document="post.data" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import linkResolver from '@/plugins/link-resolver.js'
import PostAuthor from '@/components/Blog/PostAuthor'

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
  },

  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 150
      const slices = post.data.body
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

      if (firstParagraph.length > textLimit) {
        return `${limitedText.substr(0, limitedText.lastIndexOf(' '))}...`
      }
      return firstParagraph
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_vars';

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
