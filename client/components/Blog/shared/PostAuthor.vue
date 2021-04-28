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
      class="blog-post__author-none-image"
      :class="theme"
    />
    <div class="blog-post__author-info">
      <p
        class="blog-post__author-name"
        :title="shortTitle"
      >
        {{ shortTitle }}
      </p>
      <span
        class="blog-post__author-position"
        :title="position"
      >{{ position }}</span>
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

.blog-post__author {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;

  &-info {
    flex: 1;
    margin-left: 9px;
    overflow: hidden;
  }

  &-image {
    object-fit: cover;
  }

  &-image,
  &-none-image {
    width: 36px;
    min-width: 36px;
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

  &-name,
  &-position {
    display: block;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 129%;
    letter-spacing: -0.02em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &-name {
    color: $text-color--white;
    margin-bottom: 4px;
  }

  &-position {
    color: $text-color--grey-pale;
  }
}
</style>
