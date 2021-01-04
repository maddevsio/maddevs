<template>
  <div>
    <template v-if="size === 'image-full-width'">
      <div class='blog-header single' :style="{ 'background-image': 'url(' + img.url + ')'}">
        <template v-if="$prismic.asText(caption) != ''">
          <div class="wrapper" v-html="$prismic.asHtml(caption)"/>
        </template>
      </div>
    </template>
    <template v-else>
      <div class='post-part single'>
        <p class="block-img" :class="size">
          <prismic-image :field="img"/>
        </p>
        <template v-if="$prismic.asText(caption) != ''">
          <p class="image-label">{{ $prismic.asText(caption) }}</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice',
  data: function() {
    return {
      img: '',
      caption: '',
      size: ''
    };
  },
  created() {
    this.img = this.slice.primary.image;
    this.caption = this.slice.primary.caption;
    this.size = this.slice.slice_label;
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.block-img {
  margin-bottom: 10px;
  text-align: center;
}

.image-label {
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  font-family: 'Poppins-Regular', sans-serif;
  color: $text-color--grey;
  margin-bottom: 12px;
}
</style>
