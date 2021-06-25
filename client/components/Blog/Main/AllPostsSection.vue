<template>
  <div
    v-if="allPosts.length"
    class="filtered-posts"
  >
    <div class="container">
      <div class="posts-filter">
        <Simplebar>
          <ul class="posts-filter__list">
            <li
              v-for="(category, i) in blogPageContent.categories"
              :key="i"
              class="posts-filter__item-wrapper"
            >
              <div class="posts-filter__item">
                <input
                  :id="category.title"
                  type="radio"
                  name="Tag"
                  data-testid="test-post-input"
                  :value="category.title"
                  :checked="postsCategory === category.title"
                  @change="handleFilterChange"
                >
                <label :for="category.title">{{ category.title }}</label>
              </div>
            </li>
          </ul>
        </Simplebar>
      </div>
      <div
        v-if="filteredPosts.length !== 0"
        class="filtered-posts__list"
      >
        <section
          v-for="(post) in filteredPostsToShow"
          :key="post.id"
          :post="post"
          class="filtered-posts__list-item"
          data-testid="test-single-post"
        >
          <PostCard
            :post="post"
            :author="findAuthor(post.data.post_author.id, allAuthors)"
          />
        </section>
      </div>
      <div
        v-if="totalPages > postsPage"
        class="filtered-posts__load-more"
      >
        <LoadMoreButton @click="getMorePosts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Simplebar from 'simplebar-vue'
import PostCard from '@/components/Blog/shared/PostCard'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import initializeLazyLoad from '@/helpers/lazyLoad'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'AllPostsSection',
  components: {
    Simplebar,
    PostCard,
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
      'blogPageContent',
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
@import '@/assets/styles/_vars';

.posts-filter {
  min-width: 150px;
  margin-bottom: 50px;

  &__list {
    display: flex;
    justify-content: flex-start;
  }
  &__item {
    &-wrapper {
      width: calc(16.6666% - 16px);
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
    input[type="radio"] {
      display: none;
    }
    label {
      @include font('Poppins', 18px, 600);
      cursor: pointer;
      box-shadow: none;
      display: flex;
      align-items: flex-end;
      padding: 47px 22px 22px;
      color: $text-color--black;
      background-color: $bgcolor--silver;
      line-height: 22px;
      min-height: 44px;
      border-radius: 2px;
      transition: 0.2s;
    }
    input[type="radio"]:checked + label {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  /deep/ .ps__rail-x {
    display: none;
  }

  /deep/ .simplebar-track {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    &__list {
      margin: 0 -4px;
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    &__item {
      width: 148px;
      &-wrapper {
        width: auto;
        margin-right: 8px;
      }
      label {
        font-size: 16px;
        line-height: 19px;
        padding: 16px;
        min-height: 40px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    &__item label:hover {
      border-color: $border-color--red;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 991px) {
    margin-bottom: 35px;
  }
}

.filtered-posts {
  background-color: $bgcolor--white-primary;
  padding: 80px 0 73px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 50px -10px 0;
  }

  &__list-item {
    box-sizing: border-box;
    width: 33.3333%;
    padding: 0 10px;
    margin-bottom: 103px;
    @media only screen and (min-width: 991px) {
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
  }

  &__load-more {
    text-align: center;
    margin-top: 75px;
  }

  @media only screen and (max-width: 991px) {
    padding: 30px 0 69px;

    &__list {
      margin-top: 0;
    }

    &__list-item {
      width: 100%;
      margin-bottom: 32px;
      &:last-child {
        margin-bottom: 0;
      }

      /deep/ .post-card {
        display: flex;
        align-items: flex-start;
        &__image {
          width: 235px;
          flex-shrink: 0;
          margin-right: 16px;
          margin-bottom: 0;
        }
        &__title {
          font-size: 15px;
          line-height: 18.6px;
          letter-spacing: -0.03em;
        }
        &__paragraph {
          display: none;
        }
        &__meta {
          margin: 8px 0;
          .post-tag {
            display: none;
          }
        }
        &__date {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.02em;
        }
      }

      /deep/ .post-author {
        align-items: unset;
        &__image,
        &__none-image {
          width: 20px;
          min-width: 20px;
          height: 20px;
          margin-bottom: 0;
        }
        &__name,
        &__position {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.02em;
        }
        &__name {
          margin-bottom: 0;
        }
      }
    }

    &__load-more {
      margin-top: 35px;
    }
  }

  @media only screen and (max-width: 600px) {
    &__list-item /deep/ .post-card {
      &__image {
        width: 180px;
      }

      &__title {
        -webkit-line-clamp: 2;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    &__list-item /deep/ .post-card {
      &__image {
        width: 145px;
        height: 100%;
        img {
          height: 100%;
          object-fit: cover;
          object-position: -2px;
        }
      }

      &__title {
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
