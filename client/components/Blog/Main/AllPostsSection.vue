<template>
  <div
    v-if="allPosts.length"
    class="filtered-posts"
  >
    <div class="container">
      <div class="filter">
        <Simplebar>
          <ul class="filter-list">
            <li
              v-for="(category, i) in homePageContent.categories"
              :key="i"
              class="filter-item__wrapper"
            >
              <div class="filter-item">
                <input
                  :id="category.title"
                  :value="category.title"
                  :checked="postsCategory === category.title"
                  data-testid="test-post-input"
                  type="radio"
                  name="Tag"
                  class="radio-input"
                  @change="handleFilterChange"
                >
                <label
                  :for="category.title"
                  class="filter-label"
                >{{ category.title }}</label>
              </div>
            </li>
          </ul>
        </Simplebar>
      </div>
      <div
        v-if="filteredPosts.length !== 0"
        class="filtered-posts__wrapper"
      >
        <section
          v-for="(post) in filteredPostsToShow"
          :key="post.id"
          :post="post"
          class="filtered-posts__single-post"
        >
          <div
            data-testid="test-single-post"
            class="single-post__wrapper"
          >
            <RecommendedBlogWidget
              :post="post"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
              class-name="filtered-post"
            />
          </div>
        </section>
      </div>
      <div
        v-if="totalPages > postsPage"
        class="load-more-button__wrapper"
      >
        <LoadMoreButton @click="getMorePosts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Simplebar from 'simplebar-vue'
import RecommendedBlogWidget from '@/components/Blog/shared/RecommendedBlogWidget'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import initializeLazyLoad from '@/helpers/lazyLoad'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'AllPostsSection',
  components: {
    Simplebar,
    RecommendedBlogWidget,
    LoadMoreButton,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      pageSize: 12,
    }
  },

  computed: {
    ...mapGetters([
      'homePageContent',
      'allPosts',
      'allAuthors',
      'filteredPosts',
      'postsCategory',
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
        visitedLinkEl
        && !visitedLinkEl.classList.contains('featured-post')
        && !visitedLinkEl.classList.contains('latest-post')
      ) {
        const postItemEl = visitedLinkEl.parentNode // single-post__wrapper
        postItemEl.scrollIntoView({ block: 'start' })
        window.scrollTo(0, window.scrollY - 120) // scroll for distance between the post and the top of the screen
      }
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    ...mapActions(['changePostsCategory', 'getMorePosts']),

    handleFilterChange(e) {
      this.changePostsCategory(e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

.container {
  max-width: 1240px;
  margin: 0 auto;
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

.filter-label,
.reset-filter {
  color: $text-color--black;
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

.load-more-button__wrapper {
  text-align: center;
  margin-top: 36px;
  margin-bottom: 53px;
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

@media only screen and (min-width: 1024px) {
  .filter-label {
    &:hover {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }
}

@media only screen and (max-width: 991px) {
  .filtered-posts .filtered-posts__wrapper .filtered-posts__single-post {
    width: 100%;
  }

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

  .load-more-button__wrapper {
    margin-top: 11px;
    margin-bottom: 16px;
  }
}

@media only screen and (max-width: 360px) {
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
</style>
