<template>
  <div class="blog-post">
    <div class="blog-post__background" />
    <div class="blog-post__inner-container">
      <div class="blog-post__introduction-container">
        <h1 class="blog-post__blog-title title">{{ $prismic.asText(document.title) }}</h1>
        <p class="blog-post__blog-sub-title">{{ $prismic.asText(document.subtitle) }}</p>
        <div class="blog-post__post-info">
          <post-author :document="document"/>
          <div class="blog-post__date-tag">
            <div class="blog-post__date">{{ formattedDate }}</div>
            <div class="blog-post__tag" v-if="tags.length">{{ tags[0] }}</div>
          </div>
        </div>
        <img :src="document.introduction_image.url" class="blog-post__introduction-image" v-if="document.introduction_image.url !== undefined">
        <div class="blog-post__introduction-paragraph" v-html="$prismic.asHtml(document.introduction_paragraph)"/>
      </div>
  <!--    <div class="blog-post__table-of-content" v-if="headingsList.length !== 0">-->
  <!--      <p class="blog-post__table-of-content-title">Table of content:</p>-->
  <!--      <ul class="blog-post__table-of-content-list">-->
  <!--        <li v-for="(heading, i) in headingsList" :key="i" class="blog-post__table-of-content-list-item" @click="scrollToHeading(heading.headingName)">{{ heading.textContent }}</li>-->
  <!--      </ul>-->
  <!--    </div>-->
      <slices-block :slices="slices" class="blog-post__text-container"/>
    </div>
    <div v-if="recommendedPosts.length !== 0" class="blog-post__recommended-posts">
      <div class="blog-post__recommended-posts-list">
        <section v-for="recommendedPost in recommendedPosts" :key="recommendedPost.id" :post="recommendedPost" class="blog-post__recommended-post">
          <recommended-blog-widget :post="recommendedPost"/>
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
import RecommendedBlogWidget from '@//components/Blog/RecommendedBlogWidget';
import PostAuthor from '@/components/Blog/PostAuthor';

export default {
  name: 'post',
  layout: 'default',
  components: {
    SlicesBlock,
    RecommendedBlogWidget,
    PostAuthor
  },
  data() {
    return {
      title: '',
      description: '',
      ogUrl: '',
      featuredImage: '',
      headingsList: [],
      buttonIsActive: false
    };
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.document.subtitle.length !== 0 ? this.document.subtitle[0].text : ''},
        // Facebook / Open Graph
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: this.ogUrl},
        { property: 'og:title', content: this.document.title.length !== 0 ? this.document.title[0].text : ''},
        { property: 'og:description', content: this.document.subtitle.length !== 0 ? this.document.subtitle[0].text : ''},
        { property: 'og:image', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico'},
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: this.document.title.length !== 0 ? this.document.title[0].text : '' },
        { property: 'twitter:description', content: this.document.subtitle.length !== 0 ? this.document.subtitle[0].text : ''},
        { property: 'twitter:image:src', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico' },
        { property: 'twitter:url', content: this.ogUrl}
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
        recommendedPosts: recommendedPosts,
        tags: post.tags
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

    this.ogUrl = window.location.href;
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
    /*max-width: 1680px;*/
    margin: auto;
    /*padding: 150px 250px 0;*/
    background-color: $bgcolor--white-clear;
    position: relative;

    &__background {
      background-color: $bgcolor--black;
      height: 683px;
    }

    &__inner-container {
      max-width: 818px;
      margin: -514px auto 0;
    }

    &__blog-sub-title {
      margin-bottom: 36px;
      font-family: 'Poppins-Regular', sans-serif;
      color: $text-color--grey;
      font-size: 20px;
      font-weight: bold;
      line-height: 129%;
      letter-spacing: 0.2px;
    }

    &__post-info {
      margin-top: 7px;
      margin-bottom: 43px;
    }

    &__post-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__date-tag {
      display: flex;
      align-items: center;
      font-size: 13px;
      line-height: 22px;
      font-family: 'Inter-Regular', sans-serif;

      .blog-post__date {
        color: $text-color--grey-pale;
      }

      .blog-post__tag {
        color: $text-color--white-transparent;
        background: #404143;
        border-radius: 2px;
        padding: 4px 16px;
        margin-left: 24px;
      }
    }

    &__blog-title {
      font-size: 52px;
      line-height: 67px;
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
      font-family: 'Inter-Regular', sans-serif;
      color: $text-color--black-cases;
      font-size: 17px;
      line-height: 28px;
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
      font-family: 'Poppins-Bold', sans-serif;
      font-weight: 700;
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
      width: 120%;
      margin-left: -10%;
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
        color: $text-color--black-cases;
      }
    }

    &__recommended-posts {
      background-color: $bgcolor--silver;
      margin-top: 100px;
    }

    &__recommended-posts-list {
      padding: 100px;
      display: flex;
    }

    &__recommended-post {
      width: 33.33333%;
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
        &,
        /deep/ .tag {
          background: #d7d7d7;
        }
      }

      /deep/ h2,
      /deep/ p {
        color: $text-color--black;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .blog-post {
      &__background {
        display: none;
      }

      &__inner-container {
        margin: 0;
        max-width: none;
      }

      &__introduction-container {
        padding-top: 120px;
        background-color: $bgcolor--black;
      }

      &__introduction-image {
        width: 100%;
        margin: 0;
        vertical-align: bottom;
      }

      &__blog-title {
        padding: 0 24px;
        font-size: 35px;
        line-height: 45px;
      }

      &__post-info {
        padding: 0 24px;
        display: block;
      }

      &__date-tag {
        justify-content: space-between;
        margin-top: 19px;

        .blog-post__date {
          order: 2;
        }

        .blog-post__tag {
          order: 1;
          margin-left: 0;
        }
      }

      &__text-container {
        padding: 0 24px;
      }

      &__recommended-posts-list {
        padding: 31px 24px;
        display: block;
      }

      &__recommended-post {
        width: calc(100% - 20px);
        margin-bottom: 40px;

        /deep/ .blog-post__author {
          margin-top: 16px;
        }

        /deep/ .blog-post-meta {
          display: none;
        }
      }
    }
  }
</style>
