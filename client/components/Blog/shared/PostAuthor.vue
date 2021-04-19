<template>
  <NuxtLink
    v-if="name"
    :to="link"
  >
    <div class="blog-post__author">
      <img
        v-if="thumbnailImage.url !== undefined"
        ref="authorImage"
        :data-src="thumbnailImage.url"
        :alt="thumbnailImage.alt"
        class="blog-post__author-image img_lazy"
      >
      <div
        v-else
        class="blog-post__none-image"
      />
      <div class="blog-post__author-info">
        <p class="blog-post__author-name">
          {{ shortTitle }}
        </p>
        <div class="blog-post__data-of-creation">
          <span class="blog-post__author-title">{{ name }}</span>
        </div>
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
  },

  computed: {
    link() {
      return linkResolver({ type: 'author', uid: this.uid })
    },

    shortTitle() {
      return this.name.substr(0, 100)
    },
  },

  watch: {
    thumbnailImage() {
      this.$refs.authorImage.classList.remove('img_lazy-fade')
      this.$refs.authorImage.classList.add('img_lazy')
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';
.blog-post {
  &__author {
    display: flex;
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
    border-radius: 100%;
  }

  &__none-image {
    background-color: $bgcolor--black-light;
  }

  &__author-title {
    color: $text-color--grey-pale;
  }
}
</style>
