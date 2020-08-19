<template>
  <div class="main-container">
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="/blog">back to list</nuxt-link>
      </div>
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices"/>
    <p class="recommended-title">Recommended posts:</p>
    <div v-if="recommendedPosts.length !== 0" class="recommended-posts-list">
      <section v-for="recommendedPost in recommendedPosts" :key="recommendedPost.id" :post="recommendedPost" class="blog-post">
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
  layout: 'blog',
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
  .main-container {
    padding: 0 20px
  }

  .blog-post {
    width: max-content;
    margin-left: 20px;
    padding: 4px 10px 10px;
    border: 1px solid black;
    border-radius: 3px;


    &:first-child {
      margin-left: 0;
    }
  }

  .blog-error {
    font-weight: bold;
  }

  .recommended-title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .recommended-posts-list {
    display: flex;
    margin-bottom: 30px;
  }
</style>
