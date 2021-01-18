<template>
  <div class="blog-post__introduction-container">
    <h1 class="blog-post__blog-title title">{{ $prismic.asText(document.title) }}</h1>
    <p class="blog-post__blog-sub-title">{{ $prismic.asText(document.subtitle) }}</p>
    <img :src="document.featured_image.url" class="blog-post__introduction-image" v-if="document.featured_image.url">
  </div>
</template>

<script>
export default {
  name: 'CustomerUniversity',
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  
</style>
