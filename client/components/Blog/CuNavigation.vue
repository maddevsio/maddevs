<template>
  <div class="cluster-navigation" v-if="clusterPosts">
    <div class="container">
      <div class="cluster-navigation__title">{{ $prismic.asText(cluster.primary.read_more_text) }}</div>
      <div class="cluster-navigation__inner">
        <div class="cluster-navigation__column cluster-navigation__column--left">
          <router-link :to="`/blog/${post.cu_post.uid}`" class="cluster-navigation__nav-item" :class="isCurrent(post)" v-for="post in leftColumnPosts" :key="post.cu_post.id">
            {{ $prismic.asText(post.chapter_name) }}
          </router-link>
        </div>
        <div class="cluster-navigation__column cluster-navigation__column--right">
          <router-link :to="`/blog/${post.cu_post.uid}`" class="cluster-navigation__nav-item" :class="isCurrent(post)" v-for="post in rightColumnPosts" :key="post.cu_post.id">
            {{ $prismic.asText(post.chapter_name) }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CuNavigation',
  props: {
    clusterPosts: {
      type: Array,
      required: true
    },
    cluster: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    isCurrent(post) {
      return post.cu_post.id === this.id ? 'current' : '';
    }
  },
  computed: {
    leftColumnPosts: function () {
      return this.clusterPosts.slice(0, Math.ceil(this.clusterPosts.length / 2));
    },
    rightColumnPosts: function () {
      return this.clusterPosts.slice(Math.ceil(this.clusterPosts.length / 2));
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/vars";

  .cluster-navigation {
    background: $bgcolor--silver;
    padding: 77px 0 85px;
    margin-top: 72px;

    .container {
      max-width: 924px;
    }

    &__title {
      font-size: 26px;
      line-height: 130%;
      font-family: 'Poppins-Medium', sans-serif;
      font-style: normal;
      font-weight: 600;
      text-align: center;
      letter-spacing: -0.04em;
      color: $text-color--tech-label-black;
      margin-bottom: 21px;
    }

    &__column {
      width: 49.46%;
    }

    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__nav-item {
      text-decoration: none;
      color: $text-color--black-cases;
      display: block;
      background: $bgcolor--white-primary;
      border-radius: 8px;
      font-family: Inter, sans-serif;
      font-size: 16px;
      line-height: 151%;
      letter-spacing: -0.035em;
      margin-bottom: 11px;
      padding: 16px;
      min-height: 48px;

      &.current {
        opacity: 0.5;
        cursor: default;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .cluster-navigation {
      padding: 32px 0 39px;

      &__title {
        margin-bottom: 22px;
      }

      &__inner {
        display: block;
      }

      &__column {
        width: 100%;
      }
    }
  }
</style>
