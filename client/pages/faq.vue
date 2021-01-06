<template>
  <main class='main'>
    <FAQ />
  </main>
</template>

<script>
import FAQ from '@/components/FAQ';
export default {
  name: 'main-faq',
  components: {
    FAQ
  },
  data() {
    return {
      title: 'Mad Devs: Frequently Asked Questions',
      description: 'FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.',
      ogUrl: 'https://maddevs.io/faq'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/faq/'
        }
      ]
    };
  }
};
</script>
