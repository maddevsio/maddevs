<template>
  <div class="main-container container">
    <div class="outer-container">
      <!-- Template for page title -->
      <h1 class="blog-title title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" class="text-container"/>
    <p class="recommended-title">Recommended posts:</p>
    <div v-if="recommendedPosts.length !== 0" class="recommended-posts-list">
      <section v-for="recommendedPost in recommendedPosts" :key="recommendedPost.id" :post="recommendedPost" class="recommended-post">
        <blog-widget :post="recommendedPost"></blog-widget>
      </section>
    </div>
    <div v-else class="blog-error">
      No recommended Posts published at this time.
    </div>
  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from '~/components/Blog/SlicesBlock.vue';
import BlogWidget from '@/components/Blog/BlogWidget.vue';

export default {
  name: 'post',
  layout: 'default',
  components: {
    SlicesBlock,
    BlogWidget
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    };
  },
  async asyncData({ $prismic, params, error }) {
    let recommendedPosts = [];
    try {
      // Query to get post content
      const post = await $prismic.api.getByUID('post', params.uid);
      // Query to get recomended posts
      if (post.tags.length) {
        recommendedPosts = await $prismic.api.query($prismic.predicates.at('document.tags', post.tags));
        recommendedPosts = recommendedPosts.results.filter(recommendedPost => recommendedPost.uid !== post.uid);
      }
      // Returns data to be used in template
      return {
        document: post.data,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.data.date)),
        recommendedPosts: recommendedPosts
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .main-container {
    padding-top: get-vw(100px);
    background-color: $bgcolor--black;

    span {
      font-size: 1.2vw;
      font-family: 'Hoves-Regular', sans-serif;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: $text-color--white;
    }
  }

  .recommended-post {
    width: max-content;
    margin-left: get-vw(20px);
    padding: get-vw(4px) get-vw(25px) get-vw(10px);
    border: get-vw(1px) solid $border-color--white;
    border-radius: get-vw(3px);


    &:first-child {
      margin-left: 0;
    }
  }

  .blog-error {
    font-weight: bold;
  }

  .recommended-title {
    margin-top: get-vw(13px);
    margin-bottom: get-vw(10px);
    font-size: get-vw(24px);
    font-family: 'Hoves-Regular', sans-serif;
    color: $text-color--white;
  }

  .recommended-posts-list {
    display: flex;
    padding-bottom: get-vw(30px);
  }

  .blog-title {
    color: $text-color--white;
  }
</style>
