<template>
  <section class="home">
    <div class="body-content">
      <div v-if="posts.length">
        <featured-post :post="featuredPost" v-if="featuredPost" class="container"/>
      </div>
      <div class="latest-posts" v-if="posts && homepageContent">
        <div class="container">
          <div v-if="recentPosts.length !== 0" class="latest-posts__wrapper">
            <section v-for="post in recentPosts" :key="post.id" :post="post" class="latest-posts__single-post">
              <div class="single-post__wrapper">
                <recommended-blog-widget :post="post"/>
              </div>
            </section>
          </div>
        </div>
      </div>
<!--      <div class="customer-university">-->
<!--        <h1>Customer University</h1>-->
<!--      </div>-->
      <div class="filtered-posts" v-if="posts.length">
        <div class="container">
          <div class="filter">
            <perfect-scrollbar :options="{swipeEasing: true, suppressScrollY: true, handlers: ['wheel', 'touch', 'drag-thumb']}">
              <ul class="filter-list">
                <li class="filter-item__wrapper" v-for="(tag, i) in tags" :key="i">
                  <div class="filter-item">
                    <input type="radio" :id="tag.inputId" v-model="currentTag" :value="tag.tagName" name="Tag" class="radio-input">
                    <label :for="tag.inputId" class="filter-label">{{ tag.tagName }}</label>
                  </div>
                </li>
              </ul>
            </perfect-scrollbar>
<!--            <button class="reset-filter" @click="resetFilter()" v-if="filterIsActive">Reset filter</button>-->
          </div>
          <div v-if="filteredPosts.length !== 0" class="filtered-posts__wrapper">
            <section v-for="(post, i) in filteredPostsToShow" :key="i" :post="post" class="filtered-posts__single-post">
              <div class="single-post__wrapper">
                <recommended-blog-widget :post="post"/>
              </div>
            </section>
          </div>
          <div class="load-more-button__wrapper" v-if="totalPages > page">
            <button class="load-more-button" @click="incrementPage">See more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogWidget from '@/components/Blog/BlogWidget.vue';
import RecommendedBlogWidget from '../../components/Blog/RecommendedBlogWidget';
import FeaturedPost from '../../components/Blog/FeaturedPost';

const POSTS_PAGE_SIZE = 6;

export default {
  name: 'Blog',
  layout: 'default',
  components: {
    BlogWidget,
    FeaturedPost,
    RecommendedBlogWidget
  },
  data() {
    return {
      homepageContent: {},
      posts: [],
      tags: [],
      filterIsActive: false,
      featuredPost: null,
      currentTag: null,
      page: 1,
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
      const posts = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'post'), {orderings : '[my.post.date desc]'});

      this.posts = posts.results;
      this.featuredPost = posts.results.find(post => post.tags.includes('Featured post'));
      this.tags = this.getTagsFromPosts(posts.results);
      this.currentTag = this.tags.length ? this.tags[0].tagName : null;
    },

    async getHomePageContent() {
      const homepageContent = (await this.$prismic.api.getSingle('blog_home')).data;

      this.homepageContent = {
        image: homepageContent.image.url,
        headline: homepageContent.headline[0].text,
        description: homepageContent.description[0].text
      };
    },

    resetFilter() {
      this.filterIsActive = false;
      this.currentTag = null;
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
      return tagsObjectList.filter(tag => tag.tagName !== 'Featured post');
    },

    incrementPage() {
      this.page++;
    }
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter(post => post.tags.includes(this.currentTag));
    },
    filteredPostsToShow: function() {
      return this.filteredPosts.slice(0, POSTS_PAGE_SIZE * this.page);
    },
    recentPosts: function() {
      return this.posts.slice(0, 5);
    },
    totalPages: function() {
      return Math.ceil(this.filteredPosts.length / POSTS_PAGE_SIZE);
    }
  },
  watch: {
    currentTag: function() {
      this.page = 1;
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_vars';

  .container {
    max-width: 1240px;
    margin: 0 auto;
  }

  .home {
    padding-top: 100px;

    .blog-avatar {
      height: 140px;
      width: 140px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      margin: 0 auto;
    }

    .latest-posts {
      background-color: $text-color--white-primary;
      display: flex;
      justify-content: space-between;

      .latest-posts__wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 96px -10px 0;

        a {
          text-decoration: none;
        }

        .latest-posts__single-post {
          width: 33.3333%;
          margin-bottom: 80px;

          .single-post__wrapper {
            padding: 0 10px;
          }
        }
      }
    }


    .customer-university {

      background-color: $border-color--grey-cases;
      padding: 350px 0;

      h1 {
        color: $text-color--red;
        font-size: 62px;
        line-height: 74px;
        font-weight: 900;
        text-align: center;
      }
    }

    .filtered-posts {
      background-color: $text-color--white-primary;
      padding-top: 48px;

      .filter {

        margin-bottom: 48px;

        .filter-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin: 0 -10px;

          .filter-item__wrapper {
            width: 16.6666%;

            .filter-item {
              padding: 0 10px;
            }
          }
        }
      }

      .filtered-posts__wrapper {
        display: flex;
        margin: 50px -10px 0;
        flex-wrap: wrap;
        padding-bottom: 80px;

        a {
          text-decoration: none;
        }

        .filtered-posts__single-post {
          width: 33.3333%;

          .single-post__wrapper {
            padding: 0 10px;
          }
        }
      }
    }
  }


  .head-content {
    margin: 60px auto;
  }

  .blog-title {
    font-size: 76px;
  }

  .blog-title,
  .filter-title,
  .filter-label,
  .reset-filter {
    color: $text-color--black;
  }

  .filter-title {
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
  }

  .blog-description {
    margin: 10px 0;
    color: $text-color--grey;
    text-align: center;
    font-size: 46px;
  }

  .blog-main {
    width: 85%;
    display: flex;
    flex-direction: column;

    &.single img {
      width: 100%;
      height: auto;
    }

    &.single a {
      text-decoration: none;
      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
      background-repeat: repeat-x;
      background-size: 2px 2px;
      background-position: 0 23px;
    }
  }

  .blog-post-wrapper {
    margin: 0;
    padding-bottom: 50px;

    a {
      text-decoration: none;
    }
  }

  .filter {
    min-width: 150px;
  }

  .filter-list {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-gap: 10px;
    margin-top: 10px;
  }

  .radio-input {
    display: none;
  }

  .radio-input:checked + .filter-label, .filter-label:hover {
    border-color: $border-color--red;
    color: $text-color--red;
  }

  .filter-label,
  .reset-filter {
    border-radius: 2px;
    cursor: pointer;
  }

  .filter-label {
    display: block;
    padding: 47px 22px 22px;
    box-shadow: none;
    background-color: $bgcolor--silver;
    transition: 0.2s;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    min-height: 44px;
  }

  .reset-filter {
    width: 100%;
    margin-top: 10px;
    padding: 8px 7px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
    background-color: $bgcolor--red;
    border: none;
  }

  .reset-filter:active {
    background-color: #cc4247;
    border-color: #cc4247;
  }

  .load-more-button {
    padding: 12px 156px;
    border: 1px solid $border-color--black;
    font-size: 16px;
    line-height: 26px;
    background-color: transparent;
    margin-bottom: 73px;
    cursor: pointer;

    &:hover {
      color: $text-color--red;
    }

    &__wrapper {
      text-align: center;
    }
  }

  /deep/ .blog-post__author-name {
    color: $text-color--black;
  }

  @media only screen and (max-width: 991px) {
    .home {

      .latest-posts .latest-posts__wrapper .latest-posts__single-post,
      .filtered-posts .filtered-posts__wrapper .filtered-posts__single-post {
        width: 100%;
        margin-bottom: 56px;
      }

      .latest-posts {

        .latest-posts__wrapper {
          margin-top: 29px;
        }
      }

      .filtered-posts {

        .filter {

          /deep/ .ps__rail-x {
            display: none;
          }

          .filter-list {
            flex-wrap: nowrap;
            margin: 0 -4px;

            .filter-item__wrapper {
              width: 148px;

              .filter-item {
                padding: 0 4px;
              }

              .filter-label {
                font-size: 16px;
                line-height: 19px;
                padding: 16px;
                min-height: 40px;
              }
            }
          }
        }

        .filtered-posts__wrapper {
          padding-bottom: 38px;

          /deep/ .blog-post {
            display: flex;
            margin-bottom: 36px;

            .blog-post__cover-image {
              width: 124px;
              height: 124px;
              flex-shrink: 0;
              margin-right: 16px;
            }

            .blog-post-meta {
              margin: 8px 0;

              .tag {
                display: none;
              }
            }

            .blog-post__paragraph {
              display: none;
            }
          }
        }
      }

      .load-more-button {
        padding: 12px 0;
        margin-bottom: 24px;
        width: 100%;
      }
    }
  }
</style>
