<template>
  <CommonHeader
    :title="title"
    :subtitle="subtitle"
    :cover-image-url="featuredImage.url"
    :cover-image-alt-text="featuredImage.alt"
    :cover-image-width="featuredImage.dimensions.width"
    :cover-image-height="featuredImage.dimensions.height"
  >
    <template #beforeTitle>
      <div class="cluster-navigation">
        <div
          v-if="clusterName"
          class="cluster-navigation__name"
        >
          {{ clusterName }}
        </div>
        <div
          v-else
          class="cluster-navigation__name"
        >
          &zwnj;
        </div>
        <div class="cluster-navigation__select-wrapper">
          <VueSelect
            :options="postOptions"
            :clearable="false"
            :filterable="false"
            :searchable="false"
            :components="{ OpenIndicator }"
            :value="
              currentPost
                ? { label: 'Explore the chapters', value: currentPost.cu_post.uid }
                : { label: 'Explore the chapters', value: '' }
            "
            class="cluster-navigation__select"
            data-testid="vue-select"
            @option:selected="handleChange"
          />
        </div>
        <div class="cluster-navigation__buttons-wrapper">
          <div class="cluster-navigation__buttons">
            <NuxtLink
              :to="prevArticleUrl"
              :class="prevArticleUrl === '#' ? 'disabled' : ''"
              class="cluster-navigation__link"
            >
              <span class="arrow prev" />
              Previous
            </NuxtLink>
            <span class="cluster-navigation__divider" />
            <NuxtLink
              :to="nextArticleUrl"
              :class="nextArticleUrl === '#' ? 'disabled' : ''"
              class="cluster-navigation__link"
            >
              Next
              <span class="arrow next" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </CommonHeader>
</template>

<script>
import CommonHeader from '@/components/Blog/header/Common'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'CustomerUniversity',
  components: {
    CommonHeader,
    VueSelect,
  },

  props: {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    featuredImage: {
      type: Object,
      default: () => {},
    },

    postList: {
      type: Array,
      default: () => [],
    },

    clusterName: {
      type: String,
      default: () => '',
    },
  },

  data() {
    return {
      OpenIndicator: {
        render: createElement => createElement('svg', {
          domProps: {
            innerHTML: '<path d="M0.447443 0.454545L4.53835 7.40909L8.62926 0.454545H0.447443Z" fill="#A0A0A1"/>',
          },
          attrs: {
            width: 9,
            height: 8,
            viewBox: '0 0 9 8',
          },
        }),
      },
    }
  },

  computed: {
    postOptions() {
      return this.postList.map(post => ({
        label: this.$prismic.asText(post.chapter_name),
        value: post.cu_post.uid,
      }))
    },

    currentPost() {
      return this.postList.find(post => post.cu_post.id === this.id)
    },

    nextArticleUrl() {
      if (this.currentPost && this.currentPostIndex < this.postList.length - 1) {
        return `/customer-university/${this.postList[this.currentPostIndex + 1].cu_post.uid}/`
      }
      return '#'
    },

    prevArticleUrl() {
      if (this.currentPost && this.currentPostIndex > 0) {
        return `/customer-university/${this.postList[this.currentPostIndex - 1].cu_post.uid}/`
      }
      return '#'
    },

    currentPostIndex() {
      return this.currentPost && this.postList.indexOf(this.currentPost)
    },
  },

  methods: {
    handleChange(selectedPost) {
      if (this.currentPost && this.currentPost.cu_post.uid !== selectedPost.value) {
        this.$router.push({ path: `/customer-university/${selectedPost.value}/` })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cluster-navigation {
  color: white;
  align-items: center;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  &__name {
    flex-shrink: 0;
    width: 100%;
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-opacity-40-percent;
    margin-bottom: 24px;
  }

  &__select {
    &-wrapper {
      width: 41%;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    /deep/ .vs {
      &__dropdown-toggle {
        padding: 13px 15px 13px 20px;
        border: none;
        background: rgba(51, 51, 51, 0.44);
        border-radius: 4px;
      }

      &__dropdown-menu {
        padding: 0;
        top: calc(100% + 6px);
        border-radius: 4px;
        list-style: decimal !important;
        width: 420px;
        padding-left: 38px;
      }

      &__dropdown-option {
        @include font('Inter', 16px, 400);
        font-style: normal;
        line-height: 160%;
        letter-spacing: -0.02em;
        padding: 12px 16px 12px 10px;
        color: $text-color--black-oil;
        display: list-item;
        white-space: normal;
        position: relative;

        &:before {
          content: '';
          right: 0;
          top: 0;
          height: 100%;
          width: calc(100% + 40px);
          background: #f4f4f4;
          position: absolute;
          z-index: -1;
          opacity: 0;
        }

        &--selected {
          opacity: 0.4;
        }

        &--highlight {
          background-color: transparent;
        }

        &--highlight:before {
          opacity: 1;
        }
      }

      &__selected {
        color: $bgcolor--silver;
      }
    }

    &.vs--open {
      /deep/ .vs {
        &__dropdown-toggle {
          background: $bgcolor--silver;
        }

        &__selected {
          color: $text-color--black-oil;
        }
      }
    }
  }

  &__buttons {
    text-align: right;
    &-wrapper {
      width: 41%;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }

  &__link {
    @include font('Inter', 16px, 400);
    color: $bgcolor--silver;
    text-decoration: none;
    display: inline-block;
    line-height: 166%;

    &:not(.disabled):hover {
      color: $text-color--red;

      .arrow {
        @include arrow-icon-red;
      }
    }

    .arrow {
      @include arrow-icon;
      display: inline-block;
      width: 12px;
      height: 11px;

      &.prev {
        margin-right: 10px;
      }

      &.next {
        margin-left: 10px;
        transform: rotate(180deg);
      }
    }

    &.disabled {
      opacity: 0.2;
      cursor: default;
      pointer-events: none;
    }
  }

  &__divider {
    display: inline-block;
    height: 27px;
    width: 1px;
    background-color: $bgcolor--grey-pale;
    vertical-align: middle;
    margin: 0 40px;
  }
}

.mt-0 {
  margin-top: 0 !important;
}

@media screen and (max-width: 1024px) {
  .cluster-navigation {
    padding: 0 24px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 991px) {
  .cluster-navigation {
    padding: 0 14px;
    margin-top: 0;
    &__name {
      margin-bottom: 13.5px;
      margin-top: 0;
      padding: 0;
    }

    &__select {
      &-wrapper {
        margin-bottom: 25px;
        padding: 0;
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-between;

      &-wrapper {
        padding: 0;
      }
    }

    &__divider {
      display: none;
    }

    &__select {
      /deep/ .vs {
        &__dropdown-menu {
          width: 100%;
        }
      }
    }
  }
}
</style>
