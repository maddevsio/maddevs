<template>
  <div>
    <template v-if="$prismic.asText(url)">
      <div class='post-part single'>
        <a class="block-img" :href="$prismic.asText(url)" :target="target">
          <prismic-image :field="img" :title="$prismic.asText(title)"/>
        </a>
      </div>
    </template>
    <template v-else>
      <div class='post-part single'>
        <p class="block-img">
          <prismic-image :field="img" :title="$prismic.asText(title)"/>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'image-attributes-slice',
  props: ['slice'],
  data: function() {
    return {
      img: '',
      title: '',
      url: '',
      target: ''
    };
  },
  created() {
    this.img = this.slice.primary.image;
    this.title = this.slice.primary.title;
    this.url = this.slice.primary.url;
    this.target = this.slice.primary.target;
  }
};
</script>

<style scoped lang="scss">
  /deep/ img {
    max-width: 100%;
    height: auto;
  }
</style>
