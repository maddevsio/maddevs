<template>
  <div class="container">
    <div class="current-category">
      <h1 class="current-category__title">
        {{ blogCategory }}
      </h1>
      <p class="current-category__posts-count">
        A collection of {{ categoryPostsCount }} posts
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CategoryBanner',
  computed: {
    ...mapGetters(['blogCategory', 'categoryPostsCount']),
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .current-category {
    margin-top: 117px;
    margin-bottom: 97px;
    color: $text-color--white-primary;

    &__title {
      font-size: 52px;
      line-height: 130%;
      letter-spacing: -2px;
    }

    &__posts-count {
      margin-top: 15px;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
    }
  }
</style>
