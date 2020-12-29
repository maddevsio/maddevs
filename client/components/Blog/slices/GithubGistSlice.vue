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
import 'vue-embed-gist/dist/vue-embed-gist.css';

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
