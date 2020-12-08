<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <img :src="post.data.featured_image.url" alt="" class="blog-post__featured-image">
      <h2 class="post-title">{{ $prismic.asText(post.data.title) }}</h2>
      <p>{{getFirstParagraph(post)}}</p>
      <p class="blog-post-meta">
        <span class="created-at">{{ formattedDate }}</span>
        <span class="tag" v-if="post.tags.length">{{post.tags[0]}}</span>
      </p>
      <post-author :document="post.data" />
    </div>
  </nuxt-link>
</template>

<script>
import linkResolver from '~/plugins/link-resolver.js';
import PostAuthor from './PostAuthor';

export default {
  props: ['post'],
  components: {
    PostAuthor
  },
  data() {
    return {
      link: '',
      formattedDate: ''
    };
  },
  name: 'blog-widget',
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 300;
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
      }
      else {
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
    color: $text-color--white;

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

    &__featured-image {
      max-width: 100%;
      height: auto;
    }

    .post-title {
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -1px;
    }

    .blog-post-meta {
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
