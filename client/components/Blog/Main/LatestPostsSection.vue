<template>
  <div class="latest-posts">
    <div class="container">
      <div class="latest-posts__list">
        <template v-if="postsLoaded">
          <section
            v-for="post in recentPosts"
            :key="post.id"
            :post="post"
            class="latest-posts__list-item"
          >
            <a
              v-if="post.id === 'banner'"
              :href="post.link.url"
              :target="post.link.target"
              class="latest-posts__banner"
            >
              <img
                width="390"
                height="516"
                class="img_lazy"
                :data-src="post.banner.url"
                :alt="post.id"
              >
            </a>
            <PostCard
              v-else
              :post="post"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="latest-posts__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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

  computed: {
    ...mapGetters(['postsLoaded', 'recentPosts', 'allAuthors']),
  },
}
</script>

<style lang="scss" scoped>
.latest-posts {
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
