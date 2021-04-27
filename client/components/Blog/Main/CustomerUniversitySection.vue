<template>
  <section class="customer-university">
    <div class="container">
      <div class="customer-university__title">
        Customer<br>
        <span>University</span>
      </div>
      <div class="customer-university__wrapper">
        <div class="customer-university__featured-post">
          <div
            v-if="featuredCUPost"
            class="featured-post"
          >
            <span class="featured-post__date">{{ featuredCUPost.date }}</span>
            <NuxtLink
              :to="`/customer-university/${customerContent.featured_cu.uid}/`"
              class="featured-post__content-wrapper"
            >
              <h2 class="featured-post__title">
                {{ $prismic.asText(featuredCUPost.title).replace(/^[0-9]*\. /, '') }}
              </h2>
              <p class="featured-post__text">
                {{ firstParagraph }}
              </p>
            </NuxtLink>
            <PostAuthor
              v-bind="findAuthor(featuredCUPost.post_author.id, allAuthors)"
              theme="dark"
            />
            <NuxtLink
              :to="`/customer-university/${customerContent.featured_cu.uid}/`"
              class="featured-post__cover-wrapper"
            >
              <img
                class="featured-post__cover img_lazy"
                width="560"
                height="347"
                :data-src="featuredCUPost.featured_image.url"
                :alt="featuredCUPost.featured_image.alt"
              >
            </NuxtLink>
          </div>
        </div>
        <div class="customer-university__list">
          <div class="customer-university__list-wrapper">
            <span class="customer-university__list-title">Series of articles:</span>
            <div>
              <NuxtLink
                v-for="(cluster, i) in clustersToShow"
                :key="i"
                :to="cluster.items.length ? `/customer-university/${cluster.items[0].cu_post.uid}/` : ''"
                class="customer-university__list-item single-cluster"
              >
                <div class="single-cluster__cover-wrapper">
                  <img
                    class="single-cluster__cover img_lazy"
                    width="295"
                    height="160"
                    :data-src="cluster.primary.cover_image.url"
                    :alt="cluster.primary.cover_image.alt"
                  >
                </div>
                <div class="single-cluster__data">
                  <h3 class="single-cluster__title">
                    {{ $prismic.asText(cluster.primary.cluster_name) }}
                  </h3>
                  <div class="single-cluster__description">
                    {{ $prismic.asText(cluster.primary.description) }}
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div class="customer-university__list-show-more-wrapper">
              <button
                v-if="clusters.length > 3 && !showAll"
                class="customer-university__list-show-more"
                @click="showAll = true"
              >
                Browse all series
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import getFirstParagraph from '@/helpers/getFirstParagraph'
import initializeLazyLoad from '@/helpers/lazyLoad'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'CustomerUniversitySection',
  components: {
    PostAuthor,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      showAll: false,
    }
  },

  computed: {
    ...mapGetters(['customerContent', 'featuredCUPost', 'allAuthors']),

    clusters() {
      return this.customerContent.body || []
    },

    clustersToShow() {
      return this.showAll ? this.clusters : this.clusters.slice(0, 3)
    },

    firstParagraph() {
      const slices = this.featuredCUPost.body
      const limit = 150
      return getFirstParagraph(slices, limit)
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';

@mixin label {
  color: $text-color--grey-opacity-40-percent;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 166%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.w-50 {
  width: 50%;
}
.pl-2 {
  padding-left: 60px;
}
.customer-university {
  background-color: $text-color--black-oil;
  padding: 90px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-family: 'Poppins-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 120px;
    line-height: 96%;
    letter-spacing: -0.04em;
    -webkit-text-stroke: 1.13px $text-color--grey-opacity-40-percent;
    color: $text-color--black-oil;
    margin-bottom: 78px;
    span {
      color: $bgcolor--silver;
      -webkit-text-stroke: 0;
    }
  }
  &__featured-post {
    width: 50%;
  }
  &__list-wrapper {
    padding-left: 60px;
  }
  &__list {
    width: 50%;
  }
  &__list-title {
    display: block;
    @include label;
  }
  &__list-show-more {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.035em;
    width: 100%;
    padding: 12px;
    color: $text-color--red;
    border: 1px solid $text-color--red;
    background-color: transparent;
    cursor: pointer;
    &-wrapper {
      margin-top: 36px;
    }
  }
  &__list-item {
    text-decoration: none;
  }
}
.featured-post {
  text-decoration: none;
  display: block;
  padding-right: 60px;
  a {
    text-decoration: none;
  }
  &__date {
    display: block;
    @include label;
  }
  &__title {
    font-family: 'Poppins-Medium', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 33.2px;
    line-height: 130%;
    letter-spacing: -0.04em;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    margin-bottom: 28px;
    color: $text-color--white-primary;
  }
  &__text {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 166%;
    letter-spacing: -0.035em;
    margin-bottom: 28px;
    color: $text-color--grey-pale;
  }
  &__cover {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    &-wrapper {
      display: block;
      margin-top: 33px;
      text-align: center;
    }
  }
}
.single-cluster {
  margin-bottom: 31px;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
  &__cover {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    &-wrapper {
      display: block;
      width: 52.68%;
      margin-right: 20px;
      flex-shrink: 0;
      text-align: center;
    }
  }
  &__title {
    font-family: 'Poppins-Medium', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21.25px;
    line-height: 130%;
    letter-spacing: -0.02em;
    font-feature-settings: 'ss02' on;
    color: $text-color--white-primary;
    margin-bottom: 6px;
  }
  &__description {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-pale;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media screen and (max-width: 1024px) {
  .customer-university {
    padding: 34px 0 69px;
    &__wrapper {
      display: block;
    }
    &__title {
      font-size: 50px;
      line-height: 101%;
      letter-spacing: -0.03em;
      font-feature-settings: 'ss02' on;
      margin-bottom: 38px;
    }
    &__list {
      width: 100%;
      &-wrapper {
        padding-left: 0;
      }
      &-show-more {
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.035em;
        width: 100%;
        border-color: rgba(236, 28, 36, 0.4);
      }
    }
    &__featured-post {
      width: 100%;
      margin-bottom: 31px;
    }
    &__list-title {
      display: none;
    }
  }
  .featured-post {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    &__date,
    .blog-post__author {
      display: none;
    }
    &__title {
      margin-bottom: 6px;
      font-size: 22.78px;
    }
    &__text {
      margin-bottom: 0;
    }
    &__content-wrapper {
      order: 1;
    }
    &__cover-wrapper {
      order: 0;
      margin-top: 0;
      margin-bottom: 14px;
    }
  }
  .single-cluster {
    display: block;
    &__cover {
      &-wrapper {
        width: 100%;
        margin-bottom: 14px;
      }
    }
    &__title {
      color: $text-color--grey-cases;
      font-size: 22.78px;
      line-height: 130%;
      letter-spacing: -1px;
      font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    }
    &__description {
      font-weight: normal;
      font-size: 16px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
    }
  }
}
</style>
