<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <h2 class="post-title title-md">
        {{ $prismic.asText(post.data.title) }}
      </h2>
      <p class="blog-post-meta">
        <span class="created-at">{{ formattedDate }}</span>
      </p>
      <p>{{ getFirstParagraph(post) }}</p>
    </div>
  </nuxt-link>
</template>

<script>
import linkResolver from '~/plugins/link-resolver.js'

export default {
  name: 'BlogWidget',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      link: '',
      formattedDate: '',
    }
  },

  created() {
    this.link = linkResolver(this.post)
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(
      new Date(this.post.data.date),
    )
  },

  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300
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
  color: $text-color--white;

  p {
    margin-top: 5px;
  }

  p,
  span {
    font-family: 'Poppins-Regular', sans-serif;
  }

  span {
    font-size: 17px;
    line-height: 129%;
    letter-spacing: -0.02em;
  }

  a {
    text-decoration: none;
  }
}

.post-title {
  font-size: 32px;
  letter-spacing: -1px;
}

.blog-post-meta {
  margin-bottom: 10px;
}
</style>
