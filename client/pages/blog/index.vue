<template>
  <section class="home container">
    <div class="head-content">
      <h1 class="blog-title title">
        {{ homepageContent.headline }}
      </h1>
      <p class="blog-description title-md">{{ homepageContent.description }}</p>
    </div>
    <div class="body-content">
      <div class="posts" v-if="posts && homepageContent">
        <div v-if="posts.length !== 0" class="blog-main">
          <section v-for="post in posts" :key="post.id" v-bind:post="post" class="blog-post-wrapper">
            <blog-widget :post="post"></blog-widget>
          </section>
        </div>
        <div v-else class="blog-main">
          <p>No Posts published at this time.</p>
        </div>
      </div>
      <div class="filter">
        <p class="filter-title paragraph">Filter by tags:</p>
        <ul class="filter-list" v-for="(tag, i) in tags" :key="i">
          <li class="filter-item">
            <input type="radio" :id="tag.inputId" name="Tag" class="radio-input">
            <label :for="tag.inputId" class="filter-label" @click="getPostsByTag(tag.tagName)">{{ tag.tagName }}</label>
          </li>
        </ul>
        <button class="reset-filter" @click="resetFilter()" v-if="filterIsActive">Reset filter</button>
      </div>
    </div>
  </section>
</template>

<script>
import BlogWidget from '@/components/Blog/BlogWidget.vue';

export default {
  name: 'Blog',
  layout: 'default',
  components: {
    BlogWidget
  },
  data() {
    return {
      homepageContent: {},
      posts: [],
      tags: [],
      filterIsActive: false,
      metaTitle: 'Blog',
      description: '',
      ogUrl: 'https://maddevs.io/blog'
    };
  },
  created() {
    this.getContent();
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:title', content: this.metaTitle },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: this.metaTitle },
        { property: 'twitter:description', content: this.description },
        { property: 'twitter:image:src', content: 'https://maddevs.io/Open-Graph.png' },
        { property: 'twitter:url', content: this.ogUrl }
      ]
    };
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
      this.tags = this.getTagsFromPosts(posts.results);
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

      for(let i = 0; i < radioInput.length; i++) {
        if (radioInput[i].checked) {
          radioInput[i].checked = false;
        }
      }
    },

    getTagsFromPosts(posts) {
      let totalTags = [];
      let tagsObjectList = [];

      posts.forEach(post => {
        totalTags = totalTags.concat(post.tags);
      });

      // Remove duplicates
      totalTags = totalTags.filter((tag, i) => i === totalTags.indexOf(tag));

      // Create objects list and
      totalTags.forEach(tag => {
        tagsObjectList.push({
          tagName: tag,
          inputId: tag.toLowerCase().replace(/\s/g , '-') // Replaced space on the dash
        });
      });
      return tagsObjectList;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/_vars'

.home
  max-width: 1680px;
  display: flex
  flex-direction: column
  margin: auto;
  padding-top: 100px
  background-color: $bgcolor--black

  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 0 auto

.head-content
  margin: 60px auto;

.body-content
  display: flex
  justify-content: space-between

.blog-title
  font-size: 76px

.blog-title,
.filter-title,
.filter-label,
.reset-filter
  color: $text-color--white

.filter-title
  font-family: 'Poppins-Bold', sans-serif

.blog-description
  margin: 10px 0
  color: $text-color--grey
  text-align: center
  font-size: 46px

.blog-main
  width: 85%;
  display: flex
  flex-direction: column

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

.blog-post-wrapper
  margin: 0
  padding-bottom: 50px

  a
    text-decoration: none

.filter
  min-width: 150px;

.filter-list
  display: grid
  grid-template-columns: repeat(1, 100%)
  grid-gap: 10px
  margin-top: 10px

.radio-input
  display: none

.radio-input:checked + .filter-label, .filter-label:hover
  border-color: $border-color--red
  color: $text-color--red

.filter-label,
.reset-filter
  font-size: 14px
  border-radius: 2px
  cursor: pointer


.filter-label
  display: block
  padding: 7px
  box-shadow: none
  background-color: transparent
  border: 1px solid $border-color--grey
  transition: 0.2s
  text-align: center
  font-family: 'Poppins-Regular', sans-serif

.reset-filter
  width: 100%;
  margin-top: 10px;
  padding: 8px 7px
  font-family: 'Poppins-Bold', sans-serif
  background-color: $bgcolor--red
  border: none

.reset-filter:active
  background-color: #cc4247
  border-color: #cc4247
</style>
