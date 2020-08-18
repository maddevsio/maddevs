<template>
  <section class="home">
    <div class="filter">
      <p>Filter by tags:</p>
      <div class="filter-list">
        <input type="radio" id="software-features" name="Tag" class="radio-input">
        <label for="software-features" class="filter-label" @click="getPostsByTag('Software features')">Software features</label>

        <input type="radio" id="integration-of-stripe" name="Tag" class="radio-input">
        <label for="integration-of-stripe" class="filter-label" @click="getPostsByTag('Integration of stripe')">Integration of Stripe</label>
        <button class="reset-filter" @click="resetFilter()" v-if="filterIsActive">Reset filter</button>
      </div>
    </div>
    <div class="posts" v-if="posts && homepageContent">
      <div class="head-content">
        <div class="blog-avatar" :style="{backgroundImage: 'url(' + homepageContent.image + ')'}" />
        <h1 class="blog-title">
          {{ homepageContent.headline }}
        </h1>
        <p class="blog-description">{{ homepageContent.description }}</p>
      </div>
      <div v-if="posts.length !== 0" class="blog-main">
        <section v-for="post in posts" :key="post.id" v-bind:post="post" class="blog-post">
          <blog-widget :post="post"></blog-widget>
        </section>
      </div>
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </div>
  </section>
</template>

<script>
import BlogWidget from '@/components/Blog/BlogWidget.vue';

export default {
  name: 'Blog',
  layout: 'blog',
  components: {
    BlogWidget
  },
  data() {
    return {
      homepageContent: {},
      posts: [],
      filterIsActive: false
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      // Query to get blog home content
      this.getHomePageContent();

      // Query to get posts content to preview
      this.getAllPosts();
    },

    async getAllPosts() {
      const posts = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'post'),
        { orderings : '[my.post.date desc]' }
      );
      this.posts = posts.results;
    },

    async getHomePageContent() {
      const homepageContent = (await this.$prismic.api.getSingle('blog_home')).data;

      this.homepageContent = {
        image: homepageContent.image.url,
        headline: homepageContent.headline[0].text,
        description: homepageContent.description[0].text
      };
    },

    async getPostsByTag(tag) {
      const posts = await this.$prismic.api.query(this.$prismic.predicates.at('document.tags', [tag]));

      if(posts !== null && posts.results.length !== 0) {
        this.posts = posts.results;
        this.filterIsActive = true;
      } else {
        this.posts = [];
      }
    },

    resetFilter() {
      this.filterIsActive = false;
      this.resetRadioInputs();
      this.getAllPosts();
    },

    resetRadioInputs() {
      const radioInput = document.getElementsByClassName('radio-input');

      for(let i=0; i < radioInput.length; i++) {
        if (radioInput[i].checked) {
          radioInput[i].checked = false;
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA

.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 0
  margin-bottom: 3rem

.filter
  width: max-content
  position: absolute;
  top: 20px
  left: 30px;
  text-align: left

.filter-list
  display: grid
  grid-template-columns: repeat(1, max-content)
  grid-gap: 10px
  margin-top: 10px

.radio-input
  display: none

.radio-input:checked + .filter-label, .filter-label:hover
  border-color: #5163ba 
  background-color: #5163ba
  color: #fff

.filter-label
  display: block
  padding: 5px 10px
  border-radius: 4px
  border: 1px solid #96969c
  cursor: pointer
  font-size: 13px
  text-align: center

.reset-filter
  padding: 5px 0
  background-color: #ec1c24
  border: 1px solid #ec1c24
  border-radius: 2px
  color: #fff
  cursor: pointer

.reset-filter:active
  background-color: #cc4247
  border-color: #cc4247

@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>
