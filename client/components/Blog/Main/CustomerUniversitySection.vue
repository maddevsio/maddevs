<template>
  <section class="customer-university">
    <div class="container">
      <div class="customer-university__title">
        Customer<br>
        <span>University</span>
      </div>
      <div class="customer-university__content">
        <div class="customer-university__featured-post">
          <div
            v-if="featuredCUPost"
            class="featured-post"
          >
            <NuxtLink
              :to="`/customer-university/${customerContent.featured_cu.uid}/`"
              class="featured-post__info"
            >
              <span class="featured-post__date">{{ featuredCUPost.date }}</span>
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
              class="featured-post__image"
            >
              <img
                :data-src="featuredCUPost.featured_image.url"
                :alt="featuredCUPost.featured_image.alt"
                class="img_lazy"
                width="560"
                height="347"
              >
            </NuxtLink>
          </div>
        </div>
        <div class="customer-university__list">
          <span class="customer-university__list-title">Series of articles:</span>
          <NuxtLink
            v-for="(cluster, i) in clustersToShow"
            :key="i"
            :to="cluster.items.length ? `/customer-university/${cluster.items[0].cu_post.uid}/` : ''"
            class="customer-university__list-item"
          >
            <div class="single-cluster">
              <div class="single-cluster__image">
                <img
                  :data-src="cluster.primary.cover_image.url"
                  :alt="cluster.primary.cover_image.alt"
                  class="img_lazy"
                  width="295"
                  height="160"
                >
              </div>
              <div class="single-cluster__info">
                <h3 class="single-cluster__title">
                  {{ $prismic.asText(cluster.primary.cluster_name) }}
                </h3>
                <div class="single-cluster__description">
                  {{ $prismic.asText(cluster.primary.description) }}
                </div>
              </div>
            </div>
          </NuxtLink>
          <div
            v-if="clusters.length > 3 && !showAll"
            class="customer-university__show-more-wrapper"
          >
            <button
              class="customer-university__show-more"
              @click="showAll = true"
            >
              Browse all series
            </button>
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
@mixin label {
  @include font('Inter', 13px, 400);
  color: $text-color--grey-opacity-40-percent;
  font-style: normal;
  line-height: 166%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.customer-university {
  background-color: $bgcolor--black-oil;
  padding: 88px 0 98px;

  a {
    text-decoration: none;
  }

  &__title {
    @include font('Poppins', 120px, 700);
    font-style: normal;
    line-height: 96%;
    letter-spacing: -0.04em;
    -webkit-text-stroke: 1.13px $text-color--grey-opacity-40-percent;
    color: $text-color--black-oil;
    margin-bottom: 63px;
    span {
      color: $bgcolor--silver;
      -webkit-text-stroke: 0;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__featured-post,
  &__list {
    box-sizing: border-box;
    width: 50%;
  }

  &__featured-post {
    padding-right: 60px;
  }

  &__list {
    padding-left: 60px;
    &-title {
      display: block;
      @include label;
    }
  }

  &__list-item {
    display: block;
    margin-bottom: 43px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__show-more {
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 26px;
    letter-spacing: -0.035em;
    width: 100%;
    padding: 12px;
    color: $text-color--red;
    border: 1px solid $text-color--red;
    background-color: transparent;
    cursor: pointer;
    &-wrapper {
      margin-top: 41px;
    }
  }
}

.featured-post {
  &__date {
    display: block;
    @include label;
  }
  &__title {
    @include font('Poppins', 33.2px, 600);
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.04em;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    margin-bottom: 28px;
    color: $text-color--white-primary;
  }
  &__text {
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 166%;
    letter-spacing: -0.035em;
    margin-bottom: 28px;
    color: $text-color--grey-pale;
  }
  &__image {
    display: block;
    text-align: center;
    margin-top: 33px;
    width: 100%;
    max-width: 100%;
    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }
}

.single-cluster {
  display: flex;
  &__image {
    display: block;
    flex-shrink: 0;
    text-align: center;
    width: 52.68%;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }
  &__title {
    @include font('Poppins', 21.25px, 600);
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.02em;
    font-feature-settings: 'ss02' on;
    color: $text-color--white-primary;
    margin-bottom: 6px;
  }
  &__description {
    @include font('Inter', 16px, 400);
    font-style: normal;
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

@media screen and (max-width: 1200px) {
  .customer-university {
    &__list {
      padding-left: 0;
    }
  }
}

@media screen and (max-width: 1024px) {
  .customer-university {
    padding: 35px 0 69px;
    &__title {
      font-size: 50px;
      line-height: 101%;
      letter-spacing: -0.03em;
      font-feature-settings: 'ss02' on;
      margin-bottom: 38px;
    }
    &__content {
      display: block;
    }
    &__list {
      width: 100%;
      padding-left: 0;
      &-title {
        display: none;
      }
    }
    &__featured-post {
      width: 100%;
      padding-right: 0;
    }
    &__list-item,
    &__featured-post {
      margin-bottom: 56px;
    }
    &__show-more {
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.035em;
      width: 100%;
      border-color: rgba(236, 28, 36, 0.4);
      &-wrapper {
        margin-top: 56px;
      }
    }
  }

  .featured-post {
    display: flex;
    flex-direction: column;
    &__date,
    .post-author {
      display: none;
    }
    &__title {
      margin-bottom: 6px;
      font-size: 22.78px;
    }
    &__text {
      margin-bottom: 0;
    }
    &__info {
      order: 1;
    }
    &__image {
      order: 0;
      margin-top: 0;
      margin-bottom: 14px;
    }
  }

  .single-cluster {
    display: block;
    &__image {
      width: 100%;
      margin-bottom: 14px;
    }
    &__title {
      color: $text-color--grey-opacity-20-percent;
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
