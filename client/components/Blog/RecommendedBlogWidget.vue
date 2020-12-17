<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <div class="blog-post__cover-image" :style="`background-image: url(${post.data.featured_image.url})`"/>
      <div>
        <h2 class="blog-post__title">{{ $prismic.asText(post.data.title) }}</h2>
        <p class="blog-post__paragraph">{{getFirstParagraph(post)}}</p>
        <div class="blog-post__meta">
          <span class="created-at">{{ formattedDate }}</span>
          <span class="tag" v-if="post.tags.length">{{post.tags[0]}}</span>
        </div>
        <post-author :document="post.data" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import linkResolver from '@/plugins/link-resolver.js';
import PostAuthor from '@/components/Blog/PostAuthor';
export default {
  name: 'RecommendedBlogWidget',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    PostAuthor
  },
  data() {
    return {
      link: '',
      formattedDate: ''
    };
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 140;
      const slices = post.data.body;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == 'text') {
          slice.primary.text.forEach(function(block){
            if (block.type == 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    this.link = linkResolver(this.post);
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.post.data.date));
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_vars';

  .blog-post {
    color: $text-color--black;
    text-decoration: none;

    p {
      margin-top: 5px;
    }

    p, span {
      font-family: 'Poppins-Regular', sans-serif;
    }

    span {
      letter-spacing: -0.02em;
    }

    a {
      text-decoration: none;
    }

    &__cover-image {
      height: 220px;
      background-position: center;
      background-size: cover;
      margin-bottom: 16px;
    }

    &__featured-image {
      max-width: 100%;
      height: auto;
    }

    &__title {
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -1px;
    }

    &__meta {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-size: 13px;
      font-family: 'Inter-Regular', sans-serif;

      .created-at {
        margin-right: 40px;
        color: $text-color--grey
      }

      .tag {
        background-color: $bgcolor--silver;
        padding: 4px 16px;
        transition: 0.2s;
      }
    }
  }
</style>
