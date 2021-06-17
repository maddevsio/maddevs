<template>
  <div>
    <template v-if="$prismic.asText(url)">
      <div class="post-part single">
        <a
          :href="$prismic.asText(url)"
          :target="target"
          class="block-img"
        >
          <img
            class="img_lazy"
            :data-src="img.url"
            :alt="img.alt"
            width="680"
            height="170"
          >
        </a>
      </div>
    </template>
    <template v-else>
      <div class="post-part single">
        <div class="block-img">
          <img
            class="img_lazy"
            :data-src="img.url"
            :alt="img.alt"
            width="680"
            height="170"
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImageAttributesSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      img: '',
      title: '',
      url: '',
      target: '',
    }
  },

  created() {
    this.img = this.slice.primary.image
    this.title = this.slice.primary.title
    this.url = this.slice.primary.url
    this.target = this.slice.primary.target
  },
}
</script>
