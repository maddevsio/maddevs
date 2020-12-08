<template>
  <div class="blog-post__author">
    <img :src="document.author_image.url" :alt="$prismic.asText(document.author)" class="blog-post__author-image" v-if="document.author_image.url !== undefined">
    <div class="blog-post__none-image" v-else></div>
    <div class="blog-post__author-info">
      <p class="blog-post__author-name">{{ $prismic.asText(document.author).substr(0, 100) }}</p>
      <p class="blog-post__data-of-creation">
        <span class="blog-post__author-title">{{ document.author_title }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/vars';
  .blog-post {
    &__author {
      display: flex;
      /*justify-content: space-between;*/
      align-items: center;
    }

    &__author-info {
      margin-left: 15px;
    }

    &__author-name {
      color: $text-color--white;
    }

    &__author-title,
    &__author-name {
      display: block;
      font-size: 13px;
      font-family: 'Inter-Regular', sans-serif;
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
      width: 30px;
      height: 30px;
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
