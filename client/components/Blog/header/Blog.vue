<template>
  <div class="blog-post__introduction-container">
    <h1 class="blog-post__blog-title title">{{ $prismic.asText(document.title) }}</h1>
    <p class="blog-post__blog-sub-title">{{ $prismic.asText(document.subtitle) }}</p>
    <div class="blog-post__post-info">
      <post-author :document="document"/>
      <div class="blog-post__date-tag">
        <div class="blog-post__date">{{ formattedDate }}</div>
        <div class="blog-post__tag" v-if="tags.length">{{ tags[0] }}</div>
      </div>
    </div>
    <img :src="document.featured_image.url" class="blog-post__introduction-image" v-if="document.featured_image.url !== undefined" alt="">
  </div>
</template>

<script>
import PostAuthor from '@/components/Blog/PostAuthor';

export default {
  name: 'Blog',
  components: {
    PostAuthor
  },
  props: {
    document: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    formattedDate: {
      type: String,
      required: true
    }
  }
};
</script>
