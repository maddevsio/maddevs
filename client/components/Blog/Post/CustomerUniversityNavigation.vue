<template>
  <div
    v-if="clusterPosts"
    class="cluster-navigation"
  >
    <div class="container">
      <div class="cluster-navigation__title">
        {{ $prismic.asText(cluster.primary.read_more_text) }}
      </div>
      <div class="cluster-navigation__inner">
        <ol class="cluster-navigation__column cluster-navigation__column--left">
          <NuxtLink
            v-for="(post, index) in leftColumnPosts"
            :key="post.cu_post.id"
            :to="`/customer-university/${post.cu_post.uid}/`"
            :class="isCurrent(post)"
            class="cluster-navigation__nav-item"
          >
            <div class="index">
              {{ ++index }}.
            </div>
            <div class="label">
              {{ $prismic.asText(post.chapter_name) }}
            </div>
          </NuxtLink>
        </ol>
        <ol
          :start="leftColumnPosts.length + 1"
          class="cluster-navigation__column cluster-navigation__column--right"
        >
          <NuxtLink
            v-for="(post, index) in rightColumnPosts"
            :key="post.cu_post.id"
            :to="`/customer-university/${post.cu_post.uid}/`"
            :class="isCurrent(post)"
            class="cluster-navigation__nav-item"
          >
            <span class="index">{{ ++index + leftColumnPosts.length }}.</span>
            <div class="label">
              {{ $prismic.asText(post.chapter_name) }}
            </div>
          </NuxtLink>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerUniversityNavigation',
  props: {
    clusterPosts: {
      type: Array,
      required: true,
    },

    cluster: {
      type: Object,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    leftColumnPosts() {
      return this.clusterPosts.slice(0, Math.ceil(this.clusterPosts.length / 2))
    },

    rightColumnPosts() {
      return this.clusterPosts.slice(Math.ceil(this.clusterPosts.length / 2))
    },
  },

  methods: {
    isCurrent(post) {
      return post.cu_post.id === this.id ? 'current' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.cluster-navigation {
  background: $bgcolor--silver;
  padding: 77px 0 85px;
  margin-top: 72px;

  .container {
    max-width: 924px;
  }

  &__title {
    @include font('Poppins', 26px, 600);
    line-height: 130%;
    font-style: normal;
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
    @include font('Inter', 16px, 400);
    text-decoration: none;
    color: $text-color--black-oil;
    display: flex;
    background: $bgcolor--white-primary;
    border-radius: 8px;
    line-height: 151%;
    letter-spacing: -0.035em;
    margin-bottom: 11px;
    padding: 16px;
    min-height: 48px;

    &.current {
      opacity: 0.5;
      cursor: default;
    }

    .index {
      margin-right: 10px;
    }

    .label {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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
      padding: 0;
    }
  }
}
</style>
