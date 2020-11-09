<template>
  <main class="main"></main>
</template>

<script>
export default {
  name: 'NambaFood',
  data() {
    return {
      title: 'Mad Devs Namba Food',
      description: '',
      ogUrl: ''
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ]
    };
  }
};
</script>
