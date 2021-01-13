<template>
  <div class="blog-post" :class="recommendedPosts.length ? 'with-recommended' : ''">
    <div class="blog-post__background" />
    <div class="blog-post__inner-container">
      <div class="blog-post__share">
        <ShareNetwork
          network="facebook"
          :url="ogUrl"
          :title="title"
          class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__facebook-icon"
          target="_blank"
        />
        <ShareNetwork
          network="twitter"
          :url="ogUrl"
          :title="title"
          class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__twitter-icon"
          target="_blank"
        />
        <ShareNetwork
          network="linkedin"
          :url="ogUrl"
          :title="title"
          class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__linkedin-icon"
          target="_blank"
        />
      </div>
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
        <img :src="document.featured_image.url" class="blog-post__introduction-image" v-if="document.featured_image.url !== undefined">
      </div>
      <div class="blog-post__introduction-paragraph" v-html="$prismic.asHtml(document.introduction_paragraph)"/>
      <table-of-contents :content="document.table_of_contents" v-if="document.table_of_contents.length !== 0"/>
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
import TableOfContents from '@/components/Blog/TableOfContents';

export default {
  name: 'post',
  layout: 'blog',
  components: {
    SlicesBlock,
    RecommendedBlogWidget,
    PostAuthor,
    TableOfContents
  },
  data() {
    return {
      title: '',
      ogUrl: '',
      featuredImage: '',
      buttonIsActive: false,
      shareIcons: [''],
      jsonLd: []
    };
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text,
      meta: [
        { name: 'description', content: this.$prismic.asText(this.document.meta_description)},
        // Facebook / Open Graph
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: this.ogUrl},
        { property: 'og:title', content: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text},
        { property: 'og:description', content: this.$prismic.asText(this.document.meta_description)},
        { property: 'og:image', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico'},
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: this.$prismic.asText(this.document.meta_title) || this.document.title[0].text},
        { property: 'twitter:description', content: this.$prismic.asText(this.document.meta_description)},
        { property: 'twitter:image:src', content: this.document.featured_image.url ? this.document.featured_image.url : '/favicon.ico' },
        { property: 'twitter:url', content: this.ogUrl}
      ],
      link: [
        { rel: 'canonical', href: this.ogUrl}
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: this.jsonLd
    };
  },
  async asyncData({ $prismic, params, error }) {
    let recommendedPosts = [];
    try {
      // Query to get post content
      const post = await $prismic.api.getByUID('post', params.uid);
      // Query to get recomended posts
      if (post.tags.length) {
        recommendedPosts = await $prismic.api.query($prismic.predicates.at('document.tags', [post.tags[0]]), {pageSize: 4});
        recommendedPosts = recommendedPosts.results.filter(recommendedPost => recommendedPost.uid !== post.uid);

        if (recommendedPosts.length > 3) {
          recommendedPosts = recommendedPosts.slice(0, 3);
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
    this.title = this.$prismic.asText(this.document.meta_title) || this.document.title[0].text;
    this.ogUrl = window.location.href;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.shareButtonsScroll);
    window.scroll();
    this.getLdScripts();
  },
  destroyed () {
    window.removeEventListener('scroll', this.shareButtonsScroll);
  },
  methods: {
    scrollTo(className) {
      const element = document.getElementsByClassName(className);
      element[0].scrollIntoView(
        {
          block: 'center',
          behavior: 'smooth'
        }
      );
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
    },
    shareButtonsScroll() {
      const shareButtons = document.querySelector('.blog-post__share');
      if(window.pageYOffset < 650) {
        shareButtons.style.cssText = 'position: absolute; top: 580px; left: -183px;';
      } else if(window.pageYOffset > (
        document.querySelector('.blog-post').offsetHeight
          - (document.querySelector('.blog-post__recommended-posts') ? document.querySelector('.blog-post__recommended-posts').offsetHeight : 0)
          - document.querySelector('.blog-post__share').offsetHeight - 100
      )) {
        shareButtons.style.cssText = 'position: absolute; bottom: -100px; top: auto; left: -183px;';
      } else {
        shareButtons.style.cssText = 'top: 100px';
      }
    },
    getLdScripts() {
      this.jsonLd = this.document.schema_org_snippets.map(snippet => {
        return {
          type: 'application/ld+json',
          innerHTML: this.$prismic.asText(snippet.single_snippet).replaceAll(/\n ?/g, '')
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/cases/mixins';
  @import '../../assets/styles/socialNetworkIcons';

  /deep/ h2 {
    @include title($text-color--black-cases, 32px, -0.04em);
  }

  /deep/ h3 {
    @include title($text-color--black-cases, 26px, -0.04em);
  }

  /deep/ h4 {
    @include title($text-color--black-cases, 21px, -0.04em);
  }

  /deep/ h5 {
    @include title($text-color--black-cases, 17px, -0.04em);
  }

  /deep/ h6 {
    @include title($text-color--black-cases, 14px, -0.04em);
  }

  /deep/ ul {
    list-style: disc;
    padding-left: 30px;
  }

  /deep/ .inline-code {
    font-family: 'IBM Plex Mono', monospace;
    background: $bgcolor--grey-light;
    padding: 0 4px;
    border-radius: 3px;
    display: inline-block;
    font-size: 15px;
    line-height: 129%;
  }

  .blog-post {
    margin: auto;
    background-color: $text-color--white-primary;
    position: relative;
    padding-bottom: 96px;

    &.with-recommended {
      padding-bottom: 0;
    }

    &__background {
      background-color: $bgcolor--black;
      height: 683px;
    }

    &__inner-container {
      max-width: 680px;
      margin: -514px auto 0;
      position: relative;

      /deep/ h1,
      /deep/ h2,
      /deep/ h3,
      /deep/ h4,
      /deep/ h5,
      /deep/ h6 {
        margin-top: 48px;
        margin-bottom: 12px;
      }

      /deep/ p + p {
        margin-top: 24px;
      }
    }

    &__blog-sub-title {
      margin-bottom: 36px;
      font-family: 'Poppins-Regular', sans-serif;
      color: $text-color--white-primary;
      letter-spacing: 0.2px;
      font-size: 17px;
      font-weight: 300;
      line-height: 28px;
    }

    &__post-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 7px;
      margin-bottom: 43px;

      /deep/ .blog-post__author-image {
        width: 30px;
        height: 30px;
      }
    }

    &__date-tag {
      display: flex;
      align-items: center;
      font-size: 13px;
      line-height: 22px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;

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
      letter-spacing: -2px;
      color: $text-color--white;
      font-family: 'Poppins-Medium', sans-serif;
    }

    &__share {
      display: flex;
      position: fixed;
      left: calc(50vw - 531px);
      top: 750px;
      flex-direction: column;
      margin-top: 0;
    }

    &__share-link {
      width: 33px;
      height: 33px;
      display: block;
      background-repeat: no-repeat;
      margin-bottom: 30px;
      cursor: pointer;

      &.icon-wrapper {

        &__facebook-icon {
          @include social-network-facebook
        }

        &__twitter-icon {
          @include social-network-twitter
        }

        &__linkedin-icon {
          @include social-network-linkedin;
        }
      }
    }

    &__introduction-paragraph,
    &__table-of-content-list-item,
    &__table-of-content-title {
      margin: 25px 0;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
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
      left: 36px;
      bottom: 36px;
      background-color: $bgcolor--red;
      border: 1px solid $border-color--red;
      border-radius: 2px;
      transition: 0.2s;
      cursor: pointer;

      i {
        display: inline-block;
        padding: 4px;
        border: solid $border-color--white;
        border-width: 0 3px 3px 0;
        transform: rotate(-135deg);
      }

      &:hover {
        background-color: $button-active--red;
      }
    }

    &__introduction-image {
      width: 120%;
      margin-left: -10%;
      height: auto;
    }

    /deep/ .textslice {
      span,
      p {
        color: $text-color--black-cases;
      }
    }

    &__recommended-posts {
      background-color: $bgcolor--silver;
      margin-top: 88px;
    }

    &__recommended-posts-list {
      padding: 100px;
      display: flex;
    }

    &__recommended-post {
      width: 33.33333%;
      height: max-content;
      border-radius: 3px;
      transition: 0.2s;
      margin-right: 20px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      /deep/ h2,
      /deep/ p {
        color: $text-color--black;
      }

      /deep/ .blog-post__meta {
        .tag {
          background-color: $bgcolor--white-primary;
        }
      }

      /deep/ .blog-post__cover-image {
        height: 15.2vw;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .blog-post {
      &__share {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .blog-post {
      padding-bottom: 48px;

      &__background {
        display: none;
      }

      &__inner-container {
        margin: 0;
        max-width: none;

        h1 {
          margin-top: 0;
        }
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
        letter-spacing: -1px;
      }

      &__blog-sub-title {
        padding: 0 24px;
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

      &__introduction-paragraph,
      &__text-container {
        padding: 0 24px;
      }

      &__recommended-posts-list {
        display: block;
        padding: 31px 24px;
      }

      &__recommended-posts {
        margin-top: 40px;
      }

      &__recommended-post {
        width: 100%;
        margin-right: 0;
        margin-bottom: 40px;

        /deep/ .blog-post__author {
          margin-top: 16px;
        }

        /deep/ .blog-post-meta {
          display: none;
        }

        /deep/ .blog-post__cover-image {
          height: 50.2vw;
        }
      }

      &__back-to-list {
        left: 24px;
      }
    }
  }
</style>
