<template>
  <section class="modal-search">
    <!-- Search input -->
    <div class="modal-search_form">
      <label>
        <img
          src="@/assets/img/common/magnify.svg"
          alt="Magnify"
        >
        <input
          v-model.lazy="searchQuery"
          type="text"
          placeholder="Search"
          v-debounce="600"
        >
      </label>
    </div>

    <!-- Search result -->
    <div
      v-if="searchPosts"
      class="modal-search_result"
    >
      <div
        v-for="(post, i) of searchPosts"
        :key="`search-post-${i}`"
        class="modal-search_result-item"
      >
        <img
          class="modal-search_result-item_img"
          :src="post.data.featured_image.url"
          alt="Post image"
        >
        <div class="modal-search_result-item_content">
          <h4>{{ post.data.title[0].text }}</h4>
          <div class="modal-search_result-item_content-date">
            {{ formattedDate(post) }}
          </div>
          <div class="modal-search_result-item_content-author">
            <img
              :src="getAuthor(post, 'image').url"
              alt="Author"
            >
            <div>
              <h5>{{ getAuthor(post, 'name') }}</h5>
              <p>{{ getAuthor(post, 'position') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Suggest -->
    <div class="modal-search_suggest">
      <h5>May we suggest</h5>
      <div class="modal-search_suggest-list"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'v-debounce'
import formatDate from '@/helpers/formatDate'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'ModalSearch',
  data() {
    return {
      searchQuery: null,
      response: null,
    }
  },

  mixins: [findPostAuthorMixin],

  directives: {
    debounce,
  },

  computed: {
    ...mapGetters(['allAuthors']),

    searchPosts() {
      if (!this.response || !this.response.results || !this.response.results.length) return null
      return this.response.results
    },
  },

  watch: {
    searchQuery(newVal) {
      this.getPosts(newVal)
    },
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
    padding: 130px 100px;
    box-sizing: border-box;

    // Form
    &_form {
      width: 100%;
      border-bottom: 1px solid #404143;
      padding-bottom: 14px;

      label {
        display: flex;
        align-items: center;
      }

      img {
        width: 30px;
        height: 35px;
        margin-right: 22px;
      }

      input {
        border: 0;
        background-color: transparent;
        color: #fff;
        font-weight: 600;
        font-size: 33.2px;
        line-height: 130%;
        letter-spacing: -0.04em;
      }
    }

    // Result
    &_result {
      display: flex;
      flex-wrap: wrap;
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
            font-weight: 600;
            font-size: 15px;
            line-height: 124%;
            letter-spacing: -0.03em;
            color: #fff;
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
  }
</style>
