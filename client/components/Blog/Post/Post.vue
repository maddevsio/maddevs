<template>
  <main
    :class="wrapperClass"
    class="blog-post"
  >
    <div class="blog-post__background" />
    <div class="blog-post__inner-container">
      <div
        v-if="dataLoaded"
        class="blog-post__share"
        :class="{ 'blog-post__share--vertical': !tableOfContentsSlice }"
      >
        <TableOfContents
          v-if="tableOfContentsSlice"
          :slice="tableOfContentsSlice"
        />
        <div class="blog-post__share-links">
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="facebook"
            class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__facebook-icon"
          />
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="twitter"
            class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__twitter-icon"
          />
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="linkedin"
            class="blog-post__share-link blog-post__share-link icon-wrapper__icon icon-wrapper__linkedin-icon"
          />
        </div>
      </div>

      <CustomerUniversityHeader
        v-if="type === 'customer_university'"
        :id="id"
        :title="title"
        :subtitle="subtitle"
        :featured-image="featuredImage"
        :post-list="clusterPosts || []"
        :cluster-name="cluster ? $prismic.asText(cluster.primary.cluster_name) : ''"
      />
      <BlogHeader
        v-else
        :title="title"
        :subtitle="subtitle"
        :featured-image="featuredImage"
        :tags="tags"
        :date="date"
      />
      <div class="blog-post__main-content">
        <SlicesBlock
          :slices="slices"
          :slices-type="type"
          class="blog-post__text-container"
        />
      </div>
    </div>
    <div
      v-if="showRecommended"
      class="blog-post__recommended-posts"
    >
      <div class="blog-post__recommended-posts-list container">
        <section
          v-for="post in recommendedPosts"
          :key="post.id"
          :post="post"
          class="blog-post__recommended-post"
          data-testid="test-recommended-post"
        >
          <PostCard
            :post="post"
            :author="findAuthor(post.data.post_author.id, allAuthors)"
          />
        </section>
      </div>
    </div>
    <CustomerUniversityNavigation
      v-if="clusterPosts && cluster"
      :id="id"
      :cluster="cluster"
      :cluster-posts="clusterPosts"
    />
    <button
      v-if="buttonIsActive"
      class="blog-post__back-to-list"
      data-testid="test-back-list"
      @click="scrollToTop()"
    >
      <i />
    </button>
    <div
      ref="progressBar"
      class="progress-bar"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SlicesBlock from '@/components/slices'
import TableOfContents from '@/components/Blog/Post/TableOfContents'
import BlogHeader from '@/components/Blog/header/Blog'
import CustomerUniversityHeader from '@/components/Blog/header/CustomerUniversity'
import CustomerUniversityNavigation from '@/components/Blog/Post/CustomerUniversityNavigation'
import PostCard from '@/components/Blog/shared/PostCard'
import initializeLazyLoad from '@/helpers/lazyLoad'
import copyToClipboard from '@/helpers/copyToClipboard'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'PostView',
  components: {
    SlicesBlock,
    PostCard,
    TableOfContents,
    BlogHeader,
    CustomerUniversityHeader,
    CustomerUniversityNavigation,
  },

  mixins: [initLazyLoadMixin, findPostAuthorMixin],

  props: {
    type: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },

    metaTitle: {
      type: String,
      default: '',
    },

    featuredImage: {
      type: Object,
      default: () => {},
    },

    postAuthor: {
      type: Object,
      default: () => {},
    },

    slices: {
      type: Array,
      default: () => [],
    },

    tags: {
      type: Array,
      default: () => [],
    },

    tableOfContents: {
      type: Array,
      default: () => [],
    },

    recommendedPosts: {
      type: Array,
      default: () => [],
    },

    openGraphUrl: {
      type: String,
      default: '',
    },

    cluster: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      buttonIsActive: false,
      dataLoaded: false,
    }
  },

  computed: {
    ...mapGetters(['allAuthors', 'blogTag']),

    tableOfContentsSlice() {
      return this.slices && this.slices.find(slice => slice.slice_type === 'table_of_contents')
    },

    clusterPosts() {
      return this.cluster ? this.cluster.items : []
    },

    wrapperClass() {
      return (this.recommendedPosts && this.recommendedPosts.length) || this.type === 'customer_university' ? 'with-recommended' : ''
    },

    showRecommended() {
      return this.type !== 'customer_university' && this.recommendedPosts && this.recommendedPosts.length !== 0
    },
  },

  watch: {
    dataLoaded(loaded) {
      if (loaded) {
        this.$nextTick(() => this.shareButtonsScroll())
      }
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.shareButtonsScroll)
    document.querySelectorAll('.copy-link')
      .forEach(link => link.addEventListener('click', this.copyAnchorLink))
    this.dataLoaded = true
  },

  beforeDestroy() {
    document.querySelectorAll('.copy-link')
      .forEach(link => link.removeEventListener('click', this.copyAnchorLink))
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.shareButtonsScroll)
  },

  methods: {
    copyAnchorLink(event) {
      const copyText = event.target.getAttribute('data-id')
      if (!copyText) return null
      const tooltip = event.target.nextElementSibling
      const link = `${window.location.origin}${this.$router.currentRoute.path}#${copyText}`
      if (tooltip) {
        tooltip.innerText = 'Copied!'
        setTimeout(() => {
          tooltip.innerText = 'Copy link'
        }, 3000)
      }
      copyToClipboard(link)
      return link
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    handleScroll(event) {
      this.buttonIsActive = Boolean(event.target.scrollingElement.scrollTop !== 0)
      this.calcProgress()
    },

    shareButtonsScroll() {
      const shareButtons = document.querySelector('.blog-post__share')
      const shareButtonsContainer = document.querySelector('.blog-post__introduction-container')

      if (!shareButtons) return null
      if (!shareButtonsContainer) return null

      if (window.pageYOffset < (!this.tableOfContentsSlice ? 650 : shareButtonsContainer.clientHeight + 100)) {
        if (!this.tableOfContentsSlice) {
          shareButtons.style.cssText = 'position: absolute; top: 580px; left: -183px;'
        } else {
          shareButtons.style.cssText = `position: absolute; top: ${shareButtonsContainer.clientHeight + 30}px; left: -210px;`
        }
      } else if (
        window.pageYOffset
        > document.querySelector('.blog-post').offsetHeight
          - (document.querySelector('.blog-post__recommended-posts')
            ? document.querySelector('.blog-post__recommended-posts').offsetHeight
            : 0)
          - (document.querySelector('.blog-post > .cluster-navigation')
            ? document.querySelector('.blog-post > .cluster-navigation').offsetHeight - 24
            : 0)
          - document.querySelector('.blog-post__share').offsetHeight
          - 190
      ) {
        if (!this.tableOfContentsSlice) {
          shareButtons.style.cssText = 'position: absolute; bottom: 0; top: auto; left: -183px;'
        } else {
          shareButtons.style.cssText = 'position: absolute; bottom: 0; top: auto; left: -210px;'
        }
      } else {
        shareButtons.style.cssText = 'top: 100px'
      }
      return true
    },

    calcProgress() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.$refs.progressBar.style.width = `${scrolled}%`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';
@import '../../../assets/styles/socialNetworkIcons';

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
    max-width: 818px;
    margin: -514px auto 0;
    position: relative;
  }

  &__main-content {
    max-width: 680px;
    margin: 25px auto 0;
  }

  &__share {
    display: flex;
    position: fixed;
    left: calc(50vw - 619px);
    top: 750px;
    flex-direction: column;
    margin-top: 0;

    &-links {
      display: flex;
      margin-top: 20px;
    }

    &--vertical {
      left: calc(50vw - 592px);

      .blog-post__share-links {
        margin-top: 0;
        flex-direction: column;

        .blog-post__share-link {
          margin: 0;
          margin-bottom: 30px;
        }
      }
    }
  }

  &__share-link {
    width: 33px;
    height: 33px;
    display: block;
    background-repeat: no-repeat;
    margin-right: 24px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.icon-wrapper {
      &__facebook-icon {
        @include social-network-facebook;
      }
      &__twitter-icon {
        @include social-network-twitter;
      }
      &__linkedin-icon {
        @include social-network-linkedin;
      }
    }
  }

  &__introduction-paragraph,
  &__table-of-content-list-item,
  &__table-of-content-title {
    @include font('Inter', 17px, 400);
    margin: 25px 0;
    color: $text-color--black-oil;
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
    @include font('Poppins', 1.9em, 700);
    margin-top: 0;
    margin-bottom: -5px;
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
    left: 28px;
    bottom: 20px;
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
    border-radius: 3px;
    transition: 0.2s;
    margin-right: 20px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    /deep/ .post-tag {
      background-color: $bgcolor--white-primary;
    }
    /deep/ .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--white-primary;
      }
    }
  }
}

.progress-bar {
  width: 0%;
  height: 2px;
  position: fixed;
  top: 0;
  background-color: $bgcolor--red;
  z-index: 3;
  @media only screen and (max-width: 768px) {
    height: 1px;
  }
}

@media only screen and (max-width: 1285px) {
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
      &:last-child {
        margin-bottom: 0;
      }
    }

    &__back-to-list {
      left: 24px;
    }
  }
}
</style>
