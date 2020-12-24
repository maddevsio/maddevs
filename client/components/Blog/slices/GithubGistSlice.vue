<template>
  <div>
    <vue-embed-gist
      v-if="isMounted"
      :gist-id="$prismic.asText(slice.primary.gist_id)"
      :file="$prismic.asText(slice.primary.file_name)"/>
  </div>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist';

export default {
  name: 'GithubGistSlice',
  components: {
    VueEmbedGist
  },
  data: function() {
    return {
      isMounted: false
    };
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style>
  @import "https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css";
</style>
