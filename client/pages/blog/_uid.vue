<template>
  <div class="main-container">
    <div class="outer-container">
      <!-- Template for page title -->
      <h1 class="blog-title title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
      <div class="share-links">
        <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" target="_blank" class="share-link">Share on Linkedin</a>
        <a :href="`http://twitter.com/share?text=${title}?&url=${url}`" target="_blank" class="share-link">Share on Twitter</a>
      </div>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" class="text-container"/>
    <div v-if="recommendedPosts.length !== 0">
      <p class="recommended-title">Recommended posts:</p>
      <div class="recommended-posts-list">
        <section v-for="recommendedPost in recommendedPosts" :key="recommendedPost.id" :post="recommendedPost" class="recommended-post">
          <blog-widget :post="recommendedPost"></blog-widget>
        </section>
      </div>
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
  data() {
    return {
      title: '',
      description: '',
      url: '',
      ogImage: '',
      ogUrl: 'https://maddevs.io'
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.ogImage }
      ]
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

        if (recommendedPosts.length > 3) {
          recommendedPosts = recommendedPosts.slices(1, 4);
        }
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
  },
  mounted() {
    if (this.document.title.length !== 0) {
      this.title = this.document.title[0].text;
    }

    if (this.document.subtitle.length !== 0) {
      this.description = this.document.subtitle[0].text;
    }

    if (this.document.og_image.url) {
      this.ogImage = this.document.og_image.url;
    } else {
      this.ogImage = 'https://maddevs.io/Open-Graph.png';
    }
    this.url = window.location.href;
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .main-container {
    padding: get-vw(150px) get-vw(250px) 0;
    background-color: $bgcolor--black;

    span {
      display: block;
      margin-bottom: get-vw(45px);
      font-size: 1.2vw;
      font-family: 'Hoves-Regular', sans-serif;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: $text-color--white;
    }
  }

  .recommended-post {
    width: 30%;
    height: max-content;
    margin-left: get-vw(20px);
    padding: get-vw(10px);
    border-radius: get-vw(3px);
    background: $bgcolor--grey-light;
    transition: 0.2s;


    &:first-child {
      margin-left: 0;
    }

    &:hover {
      background: #d7d7d7;
    }
  }

  .blog-error {
    font-weight: bold;
  }

  .recommended-title {
    margin-top: get-vw(65px);
    margin-bottom: get-vw(30px);
    font-size: get-vw(32px);
    font-family: 'Hoves-Bold', sans-serif;
    color: $text-color--white;
  }

  .recommended-posts-list {
    display: flex;
    padding-bottom: get-vw(30px);
  }

  .blog-title {
    font-size: get-vw(55px);
    color: $text-color--white;
  }

  .share-link {
    padding: get-vw(5px) get-vw(10px);
    background-color: $bgcolor--white;
    border-radius: get-vw(2px);
    font-family: 'Hoves-Regular', sans-serif;
    font-size: 1.1vw;
    color: $text-color--black;
    transition: 0.2s;

    &:hover {
      background-color: $bgcolor--grey-light;
    }

    &:active {
      background-color: $bgcolor--grey;
    }
  }

  /deep/ span {
    display: block;
    margin-bottom: 15px;
  }

  /deep/ a {
    text-decoration: none;
  }

  /deep/ .post-title,
  /deep/ .blog-post-meta,
  /deep/ span,
  /deep/ p {
    color: $text-color--black;
  }
</style>
