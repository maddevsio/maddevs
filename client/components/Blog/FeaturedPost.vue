<template>
  <nuxt-link :to="link" class="featured-post">
    <div class="row featured-post__wrapper">
      <div class="col-12 col-lg-6 featured-post__main">
        <h1 class="featured-post__title">{{ $prismic.asText(post.data.title) }}</h1>
        <p class="featured-post__paragraph">{{ getFirstParagraph() }}</p>
        <div class="featured-post__data d-flex justify-content-between">
          <post-author :document="post.data"/>
          <div class="featured-post__meta">
            <post-tag :tag="post.tags[0]" theme="dark" v-if="post.tags.length"/>
            <span class="created-at">{{ formattedDate }}</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 featured-post__image-wrapper">
        <img :src="post.data.featured_image.url" alt="" class="featured-post__image">
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import PostAuthor from './PostAuthor';
import PostTag from './PostTag';
import linkResolver from '@/plugins/link-resolver.js';

export default {
  name: 'FeaturedPost',
  components: {
    PostAuthor,
    PostTag
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    getFirstParagraph () {
      const textLimit = 200;
      const slices = this.post.data.body;
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
  computed: {
    formattedDate: function(){
      const vm = this;

      if(vm === undefined) {
        return '';
      }

      return Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(vm.post.data.date));
    },
    link: function () {
      return linkResolver(this.post);
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/_vars';

  .featured-post {
    color: $text-color--white-primary;
    text-decoration: none !important;
    display: block;

    &__wrapper {
      margin: 96px 0;
      align-items: center;
    }

    &__title {
      font-size: 52px;
      line-height: 67px;
      margin-bottom: 15px;
    }

    &__paragraph {
      font-size: 17px;
      line-height: 28px;
      margin-bottom: 44px;
    }

    &__data {
      display: flex;
      justify-content: space-between;

      /deep/ .blog-post__author-name {
        color: $text-color--white-primary;
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-family: 'Inter-Regular', sans-serif;

      .created-at {
        margin-left: 24px;
        color: $text-color--grey
      }
    }

    &__image-wrapper {
      text-align: right;

      img {
        max-width: 90%;
        height: auto;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .featured-post__main {
      order: 2;

      .featured-post__paragraph {
        margin-bottom: 38px;
      }

      .featured-post__data {
        display: block;

        .featured-post__meta {
          justify-content: space-between;

          /deep/ .post-tag {
            padding: 8px 16px;
            line-height: 22px;
            margin-left: 0;
          }
        }

        /deep/ .blog-post__author {
          margin-bottom: 16px;
        }


      }
    }

    .featured-post__image-wrapper {
      order: 1;
      margin-bottom: 16px;
      text-align: center;

      img  {
        max-width: 100%;
      }
    }
  }
</style>
