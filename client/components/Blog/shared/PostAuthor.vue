<template>
  <NuxtLink
    v-if="name"
    :event="disabled ? '' : 'click'"
    :to="link"
    class="blog-post__author"
  >
    <div
      v-if="thumbnailImage.url !== undefined"
      class="blog-post__author-image"
      :class="theme"
    >
      <img
        :data-src="thumbnailImage.url"
        :alt="thumbnailImage.alt"
        class="img_lazy"
      >
    </div>
    <div
      v-else
      class="blog-post__none-image"
      :class="theme"
    />
    <div class="blog-post__author-info">
      <p class="blog-post__author-name">
        {{ shortTitle }}
      </p>
      <div class="blog-post__data-of-creation">
        <span class="blog-post__author-title">{{ position }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import linkResolver from '@/plugins/link-resolver'

export default {
  name: 'PostAuthor',
  props: {
    uid: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    thumbnailImage: {
      type: Object,
      default: () => ({}),
    },

    theme: {
      type: String,
      default: 'dark',
    },
  },

  computed: {
    link() {
      return linkResolver({ type: 'author', uid: this.uid })
    },

    shortTitle() {
      return this.name.substr(0, 100)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';
.blog-post {
  &__author {
    display: inline-flex;
    align-items: center;
    margin-right: 24px;
  }

  &__author-info {
    margin-left: 9px;
  }

  &__author-name {
    color: $text-color--white;
  }

  &__author-title,
  &__author-name {
    display: block;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 129%;
    letter-spacing: -0.02em;
  }

  &__author-name {
    margin-bottom: 4px;
  }

  &__author-image {
    object-fit: cover;
  }

  &__author-image,
  &__none-image {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black); // fix for problems with border-radius in Safari
    &.dark {
      background-color: $bgcolor--black-light;
      color: $text-color--white-primary;
    }
    &.light {
      background-color: $bgcolor--silver;
      color: $text-color--black;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__author-title {
    color: $text-color--grey-pale;
  }
}
</style>
