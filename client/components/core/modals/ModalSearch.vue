<template>
  <section class="modal-search">
    <!-- Search input -->
    <div class="modal-search_form">
      <label>
        <img
          class="modal-search_form-search"
          src="@/assets/img/common/magnify.svg"
          alt="Magnify"
        >
        <input
          ref="searchInput"
          v-model.lazy="searchQuery"
          v-debounce="600"
          type="text"
          placeholder="Search"
        >
      </label>
      <button
        class="modal-search_form-close"
        @click="$emit('on-close')"
      >
        <img
          src="@/assets/img/common/close-icon-search.svg"
          alt="Close"
        >
      </button>
    </div>

    <!-- Search result -->
    <div
      v-if="searchPosts && searchPosts.length"
      class="modal-search_result"
    >
      <div
        v-for="(post, i) of searchPosts"
        :key="`search-post-${i}`"
        class="modal-search_result-item"
      >
        <NuxtLink :to="link(post)">
          <img
            class="modal-search_result-item_img"
            :src="post.data.featured_image.url"
            alt="Post image"
          >
        </NuxtLink>
        <div class="modal-search_result-item_content">
          <NuxtLink :to="link(post)">
            <h4>{{ post.data.title[0].text }}</h4>
          </NuxtLink>
          <div class="modal-search_result-item_content-date">
            {{ formattedDate(post) }}
          </div>
          <NuxtLink
            :to="`/blog/author/${getAuthor(post, 'uid')}`"
            class="modal-search_result-item_content-author"
          >
            <img
              :src="getAuthor(post, 'image').url"
              alt="Author"
            >
            <div>
              <h5>{{ getAuthor(post, 'name') }}</h5>
              <p>{{ getAuthor(post, 'position') }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div
      v-if="searchPosts && !searchPosts.length"
      class="modal-search_not-found"
    >
      No results found
    </div>

    <!-- Suggest -->
    <div class="modal-search_suggest">
      <h5>May we suggest</h5>
      <div class="modal-search_suggest-list">
        <div
          v-for="(tag, i) of []"
          :key="`search-tag-${i}`"
          class="modal-search_suggest-list-item"
        >
          Item
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'v-debounce'
import formatDate from '@/helpers/formatDate'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import linkResolver from '@/plugins/link-resolver.js'

export default {
  name: 'ModalSearch',

  directives: {
    debounce,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      searchQuery: null,
      response: null,
    }
  },

  computed: {
    ...mapGetters(['allAuthors']),

    searchPosts() {
      if (!this.response || !this.response.results) return null
      if (!this.response || !this.response.results || !this.response.results.length) return []
      return this.response.results
    },
  },

  watch: {
    searchQuery(newVal) {
      this.getPosts(newVal)
    },
  },

  mounted() {
    this.$refs.searchInput.focus()
    document.addEventListener('keyup', this.listenEnterKey)
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.listenEnterKey)
  },

  methods: {
    async getPosts(query) {
      this.response = await this.$prismic.api.query(this.$prismic.predicates.fulltext('my.post.title', query))
    },

    formattedDate(post) {
      return formatDate(post.data.date)
    },

    getAuthor(post, field) {
      try {
        const author = this.findAuthor(post.data.post_author.id, this.allAuthors)
        return author[field]
      } catch {
        return null
      }
    },

    link(post) {
      return linkResolver(post)
    },

    listenEnterKey(event) {
      if (!this.searchQuery) return false
      if (event.keyCode !== 13) return false
      document.removeEventListener('keyup', this.listenEnterKey)
      this.$router.push('/blog/search-result/')
      this.$emit('on-close')
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
  .modal-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 999;
    padding: 115px 100px 30px;
    box-sizing: border-box;
    overflow: auto;

    a {
      text-decoration: none;
    }

    // Form
    &_form {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      border-bottom: 1px solid #404143;
      padding-bottom: 14px;
      position: sticky;
      top: -117px;
      background-color: #000;
      padding-top: 15px;

      label {
        width: 100%;
        display: flex;
        align-items: center;
      }

      &-search {
        width: 30px;
        height: 35px;
        margin-right: 22px;
      }

      input {
        width: 100%;
        border: 0;
        background-color: transparent;
        color: #fff;
        font-weight: 600;
        font-size: 33.2px;
        line-height: 130%;
        letter-spacing: -0.04em;
      }

      &-close {
        width: auto;
        height: auto;
        border: 0;
        background-color: transparent;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    // Result
    &_result {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 48px;
      margin-top: 35px;

      &-item {
        display: flex;

        &_img {
          width: 200px;
          height: auto;
          object-fit: cover;
          object-position: left;
        }

        &_content {
          max-width: 188px;
          margin-left: 16px;

          h4 {
            max-height: 57px;
            font-weight: 600;
            font-size: 15px;
            line-height: 124%;
            letter-spacing: -0.03em;
            color: #fff;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          &-date {
            font-weight: normal;
            font-size: 11px;
            line-height: 141%;
            letter-spacing: -0.02em;
            color: #A0A0A1;
            margin: 8px 0;
          }

          &-author {
            display: flex;
            margin-top: auto;

            img {
              width: 20px;
              height: 20px;
              border-radius: 100%;
              margin-right: 8px;
            }

            h5 {
              font-weight: 500;
              font-size: 11px;
              line-height: 141%;
              color: #fff;
              letter-spacing: -0.02em;
            }

            p {
              font-size: 11px;
              line-height: 141%;
              color: rgba(255, 255, 255, 0.6);
              letter-spacing: -0.02em;
            }
          }
        }
      }
    }

    // Not found
    &_not-found {
      color: #EC1C24;
      font-weight: normal;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      margin-top: 50px;
    }

    &_suggest {
      margin-top: 50px;

      h5 {
        color: #707072;
        font-weight: normal;
        font-size: 13px;
        line-height: 166%;
        letter-spacing: -0.02em;
      }
    }
  }
</style>
