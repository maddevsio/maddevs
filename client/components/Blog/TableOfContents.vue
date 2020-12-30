<template>
  <div class="table-of-contents" v-html="$prismic.asHtml(content)"/>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  created() {
    this.content.forEach((link => link.spans[0].data.url = link.spans[0].data.url.replace('https://', '')));
  }
};
</script>
