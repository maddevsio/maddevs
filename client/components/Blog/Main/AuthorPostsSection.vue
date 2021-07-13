<template>
  <div class="author-posts">
    <div class="container">
      <div
        class="author-posts__featured-post"
        :class="[authorPosts.length === 1 ? 'author-posts__featured-post--mb-0' : '']"
      >
        <FeaturedPost
          v-if="authorPostsLoaded && authorPosts && authorPosts.length"
          :post="authorPosts[0]"
          :author="blogAuthor"
          theme="light"
          :disable-author-link="true"
        />
        <SkeletonFeaturedPost
          v-else
          theme="light"
        />
      </div>
      <div class="author-posts__list">
        <template v-if="authorPostsLoaded">
          <section
            v-for="post in authorPostsToShow"
            :key="post.id"
            :post="post"
            class="author-posts__list-item"
          >
            <PostCard
              :post="post"
              :author="blogAuthor"
              :disable-author-link="true"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="author-posts__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
      <div
        v-if="totalPages > authorPostsPage"
        class="author-posts__load-more"
      >
        <LoadMoreButton
          @click="getMoreAuthorPosts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import PostCard from '@/components/Blog/shared/PostCard'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import initializeLazyLoad from '@/helpers/lazyLoad'

export default {
  name: 'AuthorPostsSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
    SkeletonBlogWidget,
    PostCard,
    LoadMoreButton,
  },

  data() {
    return {
      pageSize: 13,
    }
  },

  computed: {
    ...mapGetters(['blogAuthor', 'authorPosts', 'authorPostsLoaded', 'authorPostsPage']),

    authorPostsToShow() {
      if (this.authorPosts && !this.authorPosts.length) return []
      return this.authorPosts.slice(0, this.pageSize * this.authorPostsPage)
    },

    totalPages() {
      return Math.ceil(this.authorPosts.length / this.pageSize)
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    ...mapActions(['getMoreAuthorPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .author-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0 71px;

    &__featured-post {
      margin-bottom: 137px;
      &--mb-0 {
        margin-bottom: 0;
      }
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      margin: 0 -10px;
    }

    &__list-item {
      box-sizing: border-box;
      width: 33.3333%;
      padding: 0 10px;
      margin-bottom: 103px;
      &:first-of-type {
        display: none;
      }
      @media only screen and (min-width: 991px) {
        &:nth-last-child(-n+3) {
          margin-bottom: 0;
        }
      }
    }

    &__load-more {
      margin-top: 75px;
    }

    @media only screen and (max-width: 991px) {
      padding: 34px 0 60px;

      &__featured-post {
        display: none;
        margin-bottom: 56px;
      }

      &__list-item {
        width: 100%;
        margin-bottom: 56px;
        &:first-of-type {
          display: block;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }

      &__load-more {
      margin-top: 56px;
    }
    }
  }
</style>
