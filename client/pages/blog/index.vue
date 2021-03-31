<template>
  <section class="home">
    <div class="body-content">
      <featured-post v-if="postsLoaded && featuredPost" :post="featuredPost" class="container" />
      <skeleton-featured-post v-else class="container" />
      <div class="latest-posts">
        <div class="container">
          <div class="latest-posts__wrapper">
            <template v-if="postsLoaded">
              <section v-for="post in recentPosts" :key="post.id" :post="post" class="latest-posts__single-post">
                <div class="single-post__wrapper">
                  <div v-if="post.id === 'banner'" class="banner">
                    <a :href="post.link.url" :target="post.link.target" class="latest-post">
                      <img :src="post.banner.url" :alt="post.id" />
                    </a>
                  </div>
                  <recommended-blog-widget v-else :is-recent-post="true" :post="post" />
                </div>
              </section>
            </template>
            <template v-else>
              <section v-for="i in 6" :key="i" class="latest-posts__single-post">
                <div class="single-post__wrapper">
                  <skeleton-blog-widget />
                </div>
              </section>
            </template>
          </div>
        </div>
      </div>

      <customer-university-section />

      <div v-if="allPosts.length" class="filtered-posts">
        <div class="container">
          <div class="filter">
            <simplebar>
              <ul class="filter-list">
                <li v-for="(category, i) in homePageContent.categories" :key="i" class="filter-item__wrapper">
                  <div class="filter-item">
                    <input
                      :id="category.title"
                      :value="category.title"
                      :checked="postsCategory === category.title"
                      type="radio"
                      name="Tag"
                      class="radio-input"
                      @change="handleFilterChange"
                    />
                    <label :for="category.title" class="filter-label">{{ category.title }}</label>
                  </div>
                </li>
              </ul>
            </simplebar>
          </div>
          <div v-if="filteredPosts.length !== 0" class="filtered-posts__wrapper">
            <section v-for="(post, i) in filteredPostsToShow" :key="i" :post="post" class="filtered-posts__single-post">
              <div class="single-post__wrapper">
                <recommended-blog-widget :post="post" class-name="filtered-post" />
              </div>
            </section>
          </div>
          <div v-if="totalPages > postsPage" class="load-more-button__wrapper">
            <button class="load-more-button" @click="getMorePosts">See more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import simplebar from 'simplebar-vue'
import RecommendedBlogWidget from '@/components/Blog/RecommendedBlogWidget'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import SkeletonBlogWidget from '@/components/Blog/SkeletonBlogWidget'
import SkeletonFeaturedPost from '@/components/Blog/SkeletonFeaturedPost'
import CustomerUniversitySection from '@/components/Blog/CustomerUniversitySection'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'Blog',
  components: {
    simplebar,
    FeaturedPost,
    RecommendedBlogWidget,
    SkeletonBlogWidget,
    SkeletonFeaturedPost,
    CustomerUniversitySection,
  },

  mixins: [initLazyLoadMixin],

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.params.uid) vm.visitedPost = from.fullPath
    })
  },

  data() {
    return {
      pageSize: 12,
      metaTitle: 'Blog',
      ogUrl: 'https://maddevs.io/blog/',
      visitedPost: null,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.homePageContent.description || '' },
        // Facebook / Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:title', content: this.metaTitle },
        { property: 'og:description', content: this.homePageContent.description || '' },
        { property: 'og:image', content: 'https://maddevs.io/blog.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter / Twitter Card
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:text:title', content: this.metaTitle },
        { property: 'twitter:description', content: this.homePageContent.description || '' },
        { property: 'twitter:image:src', content: 'https://maddevs.io/blog.png' },
        { property: 'twitter:url', content: this.ogUrl },
      ],

      link: [
        {
          rel: 'canonical',
          href: this.ogUrl,
        },
      ],

      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML:
            '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
        },
        // Need for supported Safari9 and IE11 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en' },
      ],
    }
  },

  computed: {
    ...mapGetters([
      'homePageContent',
      'allPosts',
      'filteredPosts',
      'recentPosts',
      'featuredPost',
      'postsCategory',
      'postsLoaded',
      'postsPage',
    ]),

    filteredPostsToShow() {
      return this.filteredPosts.slice(0, this.pageSize * this.postsPage)
    },

    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.pageSize)
    },
  },

  watch: {
    // Fixes scroll position for async filtered posts list
    filteredPosts() {
      const visitedLinkEl = document.querySelector(`a[href='${this.visitedPost}']`)
      if (
        visitedLinkEl &&
        !visitedLinkEl.classList.contains('featured-post') &&
        !visitedLinkEl.classList.contains('latest-post')
      ) {
        const postItemEl = visitedLinkEl.parentNode // single-post__wrapper
        postItemEl.scrollIntoView({ block: 'start' })
        window.scrollTo(0, window.scrollY - 120) // scroll for distance between the post and the top of the screen
      }
    },
  },

  created() {
    this.getContent()
  },

  methods: {
    ...mapActions(['getHomePageContent', 'getBlogPosts', 'getMorePosts', 'changePostsCategory']),
    getContent() {
      // Query to get blog home content
      this.getHomePageContent()

      // Query to get posts content to preview
      this.getBlogPosts()
    },

    handleFilterChange(e) {
      this.visitedPost = null
      this.changePostsCategory(e.target.value)
    },
  },
}
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

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 96px -10px 0;

      a {
        text-decoration: none;
      }
    }

    &__single-post {
      width: 33.3333%;
      margin-bottom: 80px;

      .single-post {
        &__wrapper {
          padding: 0 10px;

          .banner {
            text-align: center;

            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }

  .filtered-posts {
    background-color: $text-color--white-primary;
    padding-top: 48px;
    padding-bottom: 20px;

    /deep/ .simplebar-track {
      display: none;
    }

    .filter {
      margin-bottom: 48px;

      .filter-list {
        display: flex;
        justify-content: flex-start;
      }

      .filter-item {
        &__wrapper {
          width: calc(16.6666% - 16px);
          margin-right: 20px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    &__wrapper {
      display: flex;
      margin: 50px -10px 0;
      flex-wrap: wrap;

      a {
        text-decoration: none;
      }
    }

    &__single-post {
      width: 33.3333%;
      margin-bottom: 48px;

      .single-post__wrapper {
        padding: 0 10px;
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

  /deep/ .ps__rail-x {
    display: none;
  }
}

.radio-input {
  display: none;
}

.radio-input:checked + .filter-label {
  border-color: $border-color--red;
  color: $text-color--red;
}

.filter-label,
.reset-filter {
  border-radius: 2px;
  cursor: pointer;
}

.filter-label {
  display: flex;
  align-items: flex-end;
  padding: 47px 22px 22px;
  box-shadow: none;
  background-color: $bgcolor--silver;
  transition: 0.2s;
  font-family: 'Poppins-Medium', sans-serif;
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
  margin-top: 36px;
  margin-bottom: 53px;
  cursor: pointer;

  &:hover {
    color: $text-color--red;
  }

  &__wrapper {
    text-align: center;
  }
}

.single-post {
  &__wrapper {
    /deep/ .blog-post {
      &__author-name {
        color: $text-color--black;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .home {
    .filtered-posts {
      .filter {
        .filter-list {
          flex-wrap: nowrap;
          margin: 0 -4px;
          justify-content: space-between;

          .filter-item {
            width: 148px;

            &__wrapper {
              width: auto;
              margin-right: 8px;

              .filter-label {
                font-size: 16px;
                line-height: 19px;
                padding: 16px;
                min-height: 40px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .home {
    .filter-label {
      &:hover {
        border-color: $border-color--red;
        color: $text-color--red;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .home {
    .latest-posts .latest-posts__wrapper .latest-posts__single-post,
    .filtered-posts .filtered-posts__wrapper .filtered-posts__single-post {
      width: 100%;
    }

    .latest-posts .latest-posts__wrapper .latest-posts__single-post,
    .filtered-posts {
      margin-bottom: 56px;
    }

    .filtered-posts__wrapper {
      margin-bottom: 0;
    }

    .filtered-posts__single-post {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .latest-posts {
      &__wrapper {
        margin-top: 29px;
      }
    }

    .filtered-posts {
      &__wrapper {
        margin-top: 0;

        /deep/ .blog-post {
          display: flex;
          align-items: flex-start;
          margin-bottom: 18px;

          &:last-child {
            margin-bottom: 0;
          }

          &__image {
            width: 124px;
            flex-shrink: 0;
            margin-right: 16px;
          }

          &__meta {
            margin: 8px 0;

            .tag {
              display: none;
            }

            .created-at {
              font-size: 11px;
              line-height: 16px;
              letter-spacing: -0.02em;
            }
          }

          &__paragraph {
            display: none;
          }

          &__title {
            font-size: 15px;
            line-height: 18.6px;
            letter-spacing: -0.03em;
          }

          &__author {
            align-items: unset;
          }

          &__author-image {
            width: 20px;
            height: 20px;
          }

          &__author-title,
          &__author-name {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: -0.02em;
          }

          &__author-name {
            margin-bottom: 0;
          }
        }
      }
    }

    .load-more-button {
      padding: 12px 0;
      margin-top: 11px;
      margin-bottom: 16px;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 360px) {
  .home {
    .filtered-posts {
      &__wrapper {
        /deep/ .blog-post {
          &__image {
            width: 120px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
