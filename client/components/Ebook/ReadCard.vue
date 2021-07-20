<template>
  <NuxtLink
    :to="link"
    class="ebook-read-card"
  >
    <img
      width="288"
      height="178"
      :src="img.url"
      :alt="img.alt"
    >
    <h4>{{ title }}</h4>
  </NuxtLink>
</template>

<script>
export default {
  name: 'EbookReadCard',
  props: {
    post: {
      type: Object,
      default: null,
    },
  },

  computed: {
    img() {
      return {
        url: this.post.data.featured_image.url,
        alt: this.post.data.featured_image.alt,
      }
    },

    title() {
      return this.post.data.title[0].text
    },

    link() {
      return `/customer-university/${this.post.uid}/`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ebook-read-card {
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 4px;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    display: block;
  }

  h4 {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    color: #111;
    margin-top: 8px;
  }
}
</style>
