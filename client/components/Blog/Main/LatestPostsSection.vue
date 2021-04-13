<template>
  <div class="latest-posts">
    <div class="container">
      <div class="latest-posts__wrapper">
        <template v-if="postsLoaded">
          <section
            v-for="post in recentPosts"
            :key="post.id"
            :post="post"
            class="latest-posts__single-post"
          >
            <div class="single-post__wrapper">
              <div
                v-if="post.id === 'banner'"
                class="banner"
              >
                <a
                  :href="post.link.url"
                  :target="post.link.target"
                  class="latest-post"
                >
                  <img
                    :src="post.banner.url"
                    :alt="post.id"
                  >
                </a>
              </div>
              <RecommendedBlogWidget
                v-else
                :is-recent-post="true"
                :post="post"
              />
            </div>
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="latest-posts__single-post"
          >
            <div class="single-post__wrapper">
              <SkeletonBlogWidget />
            </div>
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import RecommendedBlogWidget from '@/components/Blog/shared/RecommendedBlogWidget'

export default {
  name: 'LatestPostsSection',
  components: {
    SkeletonBlogWidget,
    RecommendedBlogWidget,
  },

  computed: {
    ...mapGetters(['postsLoaded', 'recentPosts']),
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';
.container {
  max-width: 1240px;
  margin: 0 auto;
}

.latest-posts {
  background-color: $text-color--white-primary;
  display: flex;
  justify-content: space-between;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 96px -10px 0;

    a {
      text-decoration: none;
    }
  }

  &__single-post {
    width: 33.3333%;
    margin-bottom: 80px;

    .single-post {
      &__wrapper {
        padding: 0 10px;

        .banner {
          text-align: center;

          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}

.single-post {
  &__wrapper {
    /deep/ .blog-post {
      &__author-name {
        color: $text-color--black;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .latest-posts .latest-posts__wrapper .latest-posts__single-post {
    width: 100%;
  }

  .latest-posts .latest-posts__wrapper .latest-posts__single-post {
    margin-bottom: 56px;
  }

  .latest-posts {
      &__wrapper {
        margin-top: 29px;
      }
    }
}
</style>
