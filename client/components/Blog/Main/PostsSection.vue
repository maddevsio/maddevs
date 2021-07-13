<template>
  <div class="posts-section">
    <div class="container">
      <div class="posts-section__list">
        <template v-if="posts && posts.length">
          <section
            v-for="post in sortedPosts"
            :key="post.id"
            :post="post"
            class="posts-section__list-item"
          >
            <PostCard
              :post="post"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="posts-section__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostCard from '@/components/Blog/shared/PostCard'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'LatestPostsSection',
  components: {
    PostCard,
    SkeletonBlogWidget,
  },

  mixins: [findPostAuthorMixin],

  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapGetters(['allAuthors']),

    sortedPosts() {
      const list = [...this.posts]
      return list.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    },
  },

  created() {
    if (!this.allAuthors || (this.allAuthors && !this.allAuthors.length)) {
      this.getBlogAuthors()
    }
  },

  methods: {
    ...mapActions(['getBlogAuthors']),
  },
}
</script>

<style lang="scss" scoped>
.posts-section {
  background-color: $bgcolor--white-primary;
  padding: 96px 0 80px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -10px;
  }

  &__list-item {
    box-sizing: border-box;
    width: 33.3333%;
    margin-bottom: 103px;
    padding: 0 10px;

    @media only screen and (min-width: 991px) {
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
  }

  &__banner {
    display: block;
    max-width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 29px 0 56px;

    &__list-item {
      width: 100%;
      margin-bottom: 56px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
