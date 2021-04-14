<template>
  <div class="blog-post__author">
    <img
      v-if="document.author_image.url !== undefined"
      :data-src="document.author_image.url"
      :alt="$prismic.asText(document.author)"
      ref="authorImage"
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
        <span class="blog-post__author-title">{{ document.author_title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    document: {
      type: Object,
      required: true,
    },
  },

  computed: {
    shortTitle() {
      return this.$prismic.asText(this.document.author).substr(0, 100)
    },
  },

  watch: {
    document() {
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
