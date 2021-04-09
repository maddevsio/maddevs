<template>
  <NuxtLink :to="`/blog/author/${author.uid}`">
    <div class="blog-post__author">
      <img
        v-if="author.image.url !== undefined"
        :src="author.image.url"
        :alt="author.image.alt"
        class="blog-post__author-image"
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
          <span class="blog-post__author-title">{{ author.position }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },

  computed: {
    shortTitle() {
      return this.author.name.substr(0, 100)
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
