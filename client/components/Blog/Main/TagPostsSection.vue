<template>
  <div class="tag-posts">
    <div class="container">
      <template v-if="featuredPost">
        <div class="tag-posts__featured-post">
          <FeaturedPost
            v-if="tagPostsLoaded"
            :to="postLink(featuredPost.uid)"
            :post="featuredPost"
            :author="findAuthor(featuredPost.data.post_author.id, allAuthors)"
            theme="light"
          />
          <SkeletonFeaturedPost
            v-else
            theme="light"
          />
        </div>
      </template>
      <div class="row tag-posts__wrapper">
        <template v-if="tagPostsLoaded">
          <section
            v-for="post in tagPostsToShow"
            :key="post.id"
            :post="post"
            class="tag-posts__single-post"
          >
            <div class="single-post__wrapper">
              <RecommendedBlogWidget
                :to="postLink(post.uid)"
                :post="post"
                :tag="blogTag"
                :author="findAuthor(post.data.post_author.id, allAuthors)"
              />
            </div>
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="tag-posts__single-post"
          >
            <div class="single-post__wrapper">
              <SkeletonBlogWidget />
            </div>
          </section>
        </template>
      </div>
      <div class="tag-posts__load-more">
        <LoadMoreButton
          v-if="totalPages > tagPostsPage"
          :click="getMoreTagPosts"
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
import convertStringToSlug from '@/helpers/convertStringToSlug'
import initializeLazyLoad from '@/helpers/lazyLoad'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'TagPostsSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
    SkeletonBlogWidget,
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
    ...mapGetters(['blogTag', 'tagPosts', 'tagPostsLoaded', 'allAuthors', 'tagPostsPage']),

    featuredPost() {
      return this.tagPosts.find(post => post.tags.includes('Featured post'))
    },

    tagPostsToShow() {
      return this.tagPosts.slice(0, this.pageSize * this.tagPostsPage)
    },

    totalPages() {
      return Math.ceil(this.tagPosts.length / this.pageSize)
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    ...mapActions(['getMoreTagPosts']),

    postLink(postUID) {
      return `/blog/tag/${convertStringToSlug(this.blogTag)}/${postUID}/`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .tag-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0;
    &__featured-post {
      margin-bottom: 137px;
    }
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
