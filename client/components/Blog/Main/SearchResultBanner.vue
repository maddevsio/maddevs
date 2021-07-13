<template>
  <div class="container">
    <div class="search-result-banner">
      <p class="search-result-banner__subtitle">
        You searched for
      </p>
      <h1 class="search-result-banner__title">
        “{{ searchQuery }}”
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchResultBanner',

  computed: {
    ...mapGetters(['getSearchQuery']),

    searchQuery() {
      if (this.getSearchQuery) {
        return this.getSearchQuery
      }
      if (process.browser) {
        const query = this.$route.query.searchBy
        if (query && query.length) {
          return query.replace(/\//g, '')
        }
        return 'All'
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
  .search-result-banner {
    padding-top: 117px;
    padding-bottom: 97px;
    color: $text-color--white-primary;

    &__subtitle {
      font-weight: normal;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: #F4F4F4;
      margin-bottom: 15px;
      @include font('Inter', 14px, 400);
    }

    &__title {
      line-height: 130%;
      letter-spacing: -2px;
      @include font('Poppins', 52px, 600);
    }

    @media only screen and (max-width: 991px) {
      padding-top: 134px;
      padding-bottom: 48px;

      &__subtitle {
        font-size: 17px;
        margin-top: 12px;
      }

      &__title {
        font-size: 35px;
        letter-spacing: -1px;
      }
    }
  }
</style>
