<template>
  <div class="category-posts">
    <div class="container">
      <div class="row category-posts__wrapper">
        <template v-if="categoryPostsLoaded">
          <section
            v-for="post in categoryPostsToShow"
            :key="post.id"
            :post="post"
            class="category-posts__single-post"
          >
            <div class="single-post__wrapper">
              <RecommendedBlogWidget
                :post="post"
                :author="findAuthor(post.data.post_author.id)"
                :tag-link-is-disabled="true"
              />
            </div>
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="category-posts__single-post"
          >
            <div class="single-post__wrapper">
              <SkeletonBlogWidget />
            </div>
          </section>
        </template>
      </div>
      <LoadMoreButton
        v-if="totalPages > categoryPostsPage"
        :click-handler="getMoreCategoryPosts"
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
  name: 'CategoryPostsSection',
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
    ...mapGetters(['categoryPosts', 'categoryPostsLoaded', 'allAuthors', 'categoryPostsPage']),

    categoryPostsToShow() {
      return this.categoryPosts.slice(0, this.pageSize * this.categoryPostsPage)
    },

    totalPages() {
      return Math.ceil(this.categoryPosts.length / this.pageSize)
    },
  },

  methods: {
    ...mapActions(['getMoreCategoryPosts']),

    findAuthor(authorId) {
      if (!this.allAuthors && !this.allAuthors.length) return null
      return this.allAuthors.find(a => a.id === authorId)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .category-posts {
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
