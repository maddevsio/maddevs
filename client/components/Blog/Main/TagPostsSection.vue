<template>
  <div class="tag-posts">
    <div class="container">
      <div
        class="tag-posts__featured-post"
        :class="[tagPosts.length === 1 ? 'tag-posts__featured-post--mb-0' : '']"
      >
        <FeaturedPost
          v-if="tagPostsLoaded && featuredPostAuthor"
          :post="tagPosts[0]"
          :author="featuredPostAuthor"
          theme="light"
          :disable-tag-link="true"
        />
        <SkeletonFeaturedPost
          v-else
          theme="light"
        />
      </div>
      <div class="tag-posts__list">
        <template v-if="tagPostsLoaded">
          <section
            v-for="post in tagPostsToShow"
            :key="post.id"
            :post="post"
            class="tag-posts__list-item"
          >
            <PostCard
              :post="post"
              :tag="blogTag"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
              :disable-tag-link="true"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="tag-posts__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
      <div
        v-if="totalPages > tagPostsPage"
        class="tag-posts__load-more"
      >
        <LoadMoreButton
          @click="getMoreTagPosts"
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

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'TagPostsSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
    SkeletonBlogWidget,
    PostCard,
    LoadMoreButton,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      pageSize: 13,
    }
  },

  computed: {
    ...mapGetters(['blogTag', 'tagPosts', 'tagPostsLoaded', 'allAuthors', 'tagPostsPage']),

    tagPostsToShow() {
      if (this.tagPosts && !this.tagPosts.length) return []
      return this.tagPosts.slice(0, this.pageSize * this.tagPostsPage)
    },

    totalPages() {
      return Math.ceil(this.tagPosts.length / this.pageSize)
    },

    featuredPostAuthor() {
      if (this.tagPosts && !this.tagPosts.length) return null
      return this.findAuthor(this.tagPosts[0].data.post_author.id, this.allAuthors)
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    ...mapActions(['getMoreTagPosts']),
  },
}
</script>

<style lang="scss" scoped>
  .tag-posts {
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

      &__featured-post {
        display: none;
        margin-bottom: 56px;
      }

      &__load-more {
        margin-top: 56px;
      }
    }
  }
</style>
