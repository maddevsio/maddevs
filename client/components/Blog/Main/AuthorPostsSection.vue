<template>
  <div class="author-posts">
    <div class="container">
      <template v-if="featuredPost">
        <div class="author-posts__featured-post">
          <FeaturedPost
            v-if="authorPostsLoaded"
            :to="postLink(featuredPost.uid)"
            :post="featuredPost"
            :author="blogAuthor"
            :theme="'light'"
          />
          <SkeletonFeaturedPost
            v-else
            :theme="'light'"
          />
        </div>
      </template>
      <div class="row author-posts__wrapper">
        <template v-if="authorPostsLoaded">
          <section
            v-for="post in authorPostsToShow"
            :key="post.id"
            :post="post"
            class="author-posts__single-post"
          >
            <div class="single-post__wrapper">
              <RecommendedBlogWidget
                :to="postLink(post.uid)"
                :post="post"
                :author="blogAuthor"
              />
            </div>
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="author-posts__single-post"
          >
            <div class="single-post__wrapper">
              <SkeletonBlogWidget />
            </div>
          </section>
        </template>
      </div>
      <div class="author-posts__load-more">
        <LoadMoreButton
          v-if="totalPages > authorPostsPage"
          :click-handler="getMoreAuthorPosts"
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
import RecommendedBlogWidget from '@/components/Blog/shared/RecommendedBlogWidget'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import initializeLazyLoad from '@/helpers/lazyLoad'

export default {
  name: 'AuthorPostsSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
    SkeletonBlogWidget,
    RecommendedBlogWidget,
    LoadMoreButton,
  },

  data() {
    return {
      pageSize: 12,
    }
  },

  computed: {
    ...mapGetters(['blogAuthor', 'authorPosts', 'authorPostsLoaded', 'authorPostsPage']),

    featuredPost() {
      return this.authorPosts.find(post => post.tags.includes('Featured post'))
    },

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

    postLink(uid) {
      return `/blog/author/${this.blogAuthor.uid}/${uid}/`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .author-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0;

    &__wrapper {
      margin: 0 -10px;
    }

    &__featured-post {
      margin-bottom: 137px;
    }

    &__single-post {
      width: 33.3333%;
      margin-bottom: 48px;

      .single-post__wrapper {
        padding: 0 10px;
        /deep/ .blog-post__author-name {
          color: $text-color--black;
        }
      }
    }

    &__load-more {
      margin-top: 36px;
    }

    @media only screen and (max-width: 991px) {
      &__single-post {
        width: 100%;
      }

      &__featured-post {
        display: none;
      }
    }
  }
</style>
