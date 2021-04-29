<template>
  <div class="author-posts">
    <div class="container">
      <div
        class="author-posts__featured-post"
        :class="[authorPosts.length === 1 ? 'author-posts__featured-post--mb-0' : '']"
      >
        <FeaturedPost
          v-if="authorPostsLoaded"
          :to="postLink(authorPosts[0].uid)"
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
              :to="postLink(post.uid)"
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

    postLink(postUID) {
      return `/blog/author/${this.blogAuthor.uid}/${postUID}/`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .author-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0;

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
      margin-bottom: 48px;
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
      margin-top: 36px;
    }

    @media only screen and (max-width: 991px) {
      &__featured-post {
        display: none;
      }

      &__list-item {
        width: 100%;
        &:first-of-type {
          display: block;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
