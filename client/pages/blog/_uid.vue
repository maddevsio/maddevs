<template>
  <div class="blog-post">
    <div class="blog-post__introduction-container">
      <h1 class="blog-post__blog-title title">{{ $prismic.asText(document.title) }}</h1>
      <p class="blog-post__blog-sub-title">{{ $prismic.asText(document.subtitle) }}</p>
      <div class="blog-post__post-info">
        <div class="blog-post__author">
          <img :src="document.author_image.url" :alt="$prismic.asText(document.author)" class="blog-post__author-image" v-if="document.author_image.url !== undefined">
          <div class="blog-post__none-image" v-else></div>
          <div class="blog-post__author-info">
            <p class="blog-post__author-name">{{ $prismic.asText(document.author) }}</p>
            <p class="blog-post__data-of-creation">
              <span class="blog-post__created-at">{{ formattedDate }}</span>
            </p>
          </div>
        </div>
        <div class="blog-post__share">
          <ShareNetwork
            network="twitter"
            :url="ogUrl"
            :title="title"
            class="blog-post__share-link blog-post__share-link--twitter"
            target="_blank" 
          />
          <ShareNetwork
            network="facebook"
            :url="ogUrl"
            :title="title"
            class="blog-post__share-link blog-post__share-link--facebook"
            target="_blank" 
          />
          <ShareNetwork
            network="linkedin"
            :url="ogUrl"
            :title="title"
            class="blog-post__share-link blog-post__share-link--linkedin"
            target="_blank" 
          />
        </div>
      </div>
      <img :src="document.introduction_image.url" class="blog-post__introduction-image" v-if="document.introduction_image.url !== undefined">
      <p class="blog-post__introduction-paragraph">{{ $prismic.asText(document.introduction_paragraph) }}</p>
    </div>
    <div class="blog-post__table-of-content" v-if="headingsList.length !== 0">
      <p class="blog-post__table-of-content-title">Table of content:</p>
      <ul class="blog-post__table-of-content-list">
        <li v-for="(heading, i) in headingsList" :key="i" class="blog-post__table-of-content-list-item" @click="scrollToHeading(heading.headingName)">{{ heading.textContent }}</li>
      </ul>
    </div>
    <slices-block :slices="slices" class="blog-post__text-container"/>
    <div v-if="recommendedPosts.length !== 0">
      <p class="blog-post__recommended-title">Recommended posts:</p>
      <div class="blog-post__recommended-posts-list">
        <section v-for="recommendedPost in recommendedPosts" :key="recommendedPost.id" :post="recommendedPost" class="blog-post__recommended-post">
          <blog-widget :post="recommendedPost"></blog-widget>
        </section>
      </div>
    </div>
    <button class="blog-post__back-to-list" @click="scrollToTop()" v-if="buttonIsActive">
      <i/>
    </button>
  </div>
</template>

<script>
import SlicesBlock from '@/components/Blog/SlicesBlock.vue';
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
      title: 'Test title',
      description: 'Test description',
      ogUrl: 'Test ogUrl',
      featuredImage: '',
      headingsList: [],
      buttonIsActive: false
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
        { property: 'og:image', content: this.featuredImage }
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
  created() {
    // if (this.document.title.length !== 0) {
    //   this.title = this.document.title[0].text;
    // }

    // if (this.document.subtitle.length !== 0) {
    //   this.description = this.document.subtitle[0].text;
    // }

    if (this.document.featured_image.url) {
      this.featuredImage = this.document.featured_image.url;
    } else {
      this.featuredImage = '/favicon.ico';
    }

    // if (process.client) {
    //   this.$data.ogUrl = window.location.href;
    // }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.getAllHeadings();
  },
  methods: {
    getAllHeadings() {
      this.document.body.forEach(listItem => {
        if(listItem.primary.text !== undefined) {
          if(listItem.primary.text[0].type === 'heading1') {
            this.headingsList.push({
              textContent: listItem.primary.text[0].text,
              headingName: listItem.primary.text[0].text.toLowerCase().replace(/\s/g , '-')
            });
          }
        }
      });
    },
    scrollTo(className) {
      const element = document.getElementsByClassName(className);
      element[0].scrollIntoView(
        {
          block: 'center', 
          behavior: 'smooth'
        }
      );
    },
    scrollToHeading(className) {
      this.scrollTo(className);
      this.buttonIsActive = true;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll(e) {
      if (e.target.scrollingElement.scrollTop !== 0) {
        this.buttonIsActive = true;
      } else {
        this.buttonIsActive = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .blog-post {
    max-width: 1680px;
    margin: auto;
    padding: 150px 250px 0;
    background-color: $bgcolor--black;

    &__blog-sub-title {
      margin-bottom: 22px;
      font-family: 'Hoves-Regular', sans-serif;
      color: $text-color--grey;
      font-size: 20px;
      font-weight: bold;
      line-height: 129%;
      letter-spacing: 0.2px;
    }

    &__post-info {
      margin-top: 7px;
      margin-bottom: 30px;
    }

    &__post-info,
    &__author {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__author-info {
      margin-left: 15px;
    }

    &__author-name {
      color: $text-color--white;
    }

    &__created-at,
    &__author-name {
      display: block;
      font-size: 15px;
      font-family: 'Hoves-Regular', sans-serif;
      line-height: 129%;
      letter-spacing: -0.02em;
    }

    &__author-name {
      margin-bottom: 4px;
    }

    &__author-image {
      object-fit: cover;
    }

    &__author-image,
    &__none-image {
      width: 52px;
      height: 52px;
      border-radius: 100%;
    }

    &__none-image {
      background-color: $bgcolor--black-light;
    }

    &__created-at {
      color: $text-color--grey;
    }

    &__recommended-post {
      width: 30%;
      height: max-content;
      margin-left: 20px;
      padding: 10px;
      border-radius: 3px;
      background: $bgcolor--grey-light;
      transition: 0.2s;

      &:first-child {
        margin-left: 0;
      }

      &:hover {
        background: #d7d7d7;
      }
    }

    &__recommended-title {
      margin-top: 65px;
      margin-bottom: 30px;
      font-size: 32px;
      font-family: 'Hoves-Bold', sans-serif;
      color: $text-color--white;
    }

    &__recommended-posts-list {
      display: flex;
      padding-bottom: 30px;
    }

    &__blog-title {
      font-size: 55px;
      color: $text-color--white;
    }

    &__share {
      display: flex;
      margin-top: 20px;
    }

    &__share-link {
      width: 23px;
      height: 23px;
      display: block;
      background-repeat: no-repeat;
      margin-left: 7px;

      &--linkedin {
        background-image: url('../../assets/img/common/lindekin-icon.svg');
      }

      &--twitter {
        background-image: url('../../assets/img/common/twitter-icon.svg');
      }

      &--facebook {
        background-image: url('../../assets/img/common/facebook-icon.svg');
      }
    }

    &__introduction-paragraph,
    &__table-of-content-list-item,
    &__table-of-content-title {
      margin: 25px 0;
      font-family: 'Hoves-Regular', sans-serif;
      color: $text-color--white;
      font-size: 18px;
      line-height: 129%;
      letter-spacing: -0.02em;
      white-space: pre-wrap;
    }

    &__table-of-content {
      margin-top: 0;
      margin-bottom: 30px;
    }

    &__table-of-content-list {
      list-style-type: disc;
    }

    &__table-of-content-title {
      margin-top: 0;
      margin-bottom: -5px;
      font-size: 1.9em;
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__table-of-content-list-item {
      margin: 15px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    &__back-to-list {
      padding: 12px 14px 4px;
      position: fixed;
      right: 38px;
      bottom: 20px;
      background-color: transparent;
      border: 1px solid $border-color--red;
      border-radius: 2px;
      transition: 0.2s;
      cursor: pointer;

      i {
        display: inline-block;
        padding: 4px;
        border: solid $border-color--red;
        border-width: 0 3px 3px 0;
        transform: rotate(-135deg);
      }

      &:hover {
        background-color: $bgcolor--red;

        i {
          border-color: $border-color--black;
        }
      }

      &:active {
        background-color: $button-active--red;
      }
    }

    &__introduction-image {
      width: 100%;
      height: auto;
    }

    /deep/ .textslice {
      span {
        display: block;
        margin-bottom: 15px;
      }

      a {
        text-decoration: none;
      }

      span,
      p {
        color: $text-color--white;
      }
    }

    &__recommended-post {
      /deep/ h2,
      /deep/ p {
        color: $text-color--black;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .blog-post {
      padding: 150px 200px 0; 
    }
  }

  @media only screen and (max-width: 1024px) {
    .blog-post {
      padding: 150px 140px 0; 
    }
  }

  @media only screen and (max-width: 768px) {
    .blog-post {
      padding: 150px 2.8vw 0; 
    }
  }
</style>
