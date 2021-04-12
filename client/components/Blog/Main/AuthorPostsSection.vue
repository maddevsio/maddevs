<template>
  <div class="author-posts">
    <div class="container">
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
                :post="post"
                :author="blogAuthor"
                :author-link-is-disabled="true"
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
      <LoadMoreButton
        v-if="totalPages > authorPostsPage"
        :click-handler="getMoreAuthorPosts"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import RecommendedBlogWidget from '@/components/Blog/shared/RecommendedBlogWidget'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'

export default {
  name: 'AuthorPostsSection',
  components: {
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

    authorPostsToShow() {
      return this.authorPosts.slice(0, this.pageSize * this.authorPostsPage)
    },

    totalPages() {
      return Math.ceil(this.authorPosts.length / this.pageSize)
    },
  },

  methods: {
    ...mapActions(['getMoreAuthorPosts']),
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
  }
</style>
