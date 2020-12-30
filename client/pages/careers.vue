<template>
  <main class="main">
    <CareersBanner />
    <Careers />
  </main>
</template>

<script>
import CareersBanner from '@/components/Banner/CareersBanner';
import Careers from '@/components/Careers/CareersForm';

export default {
  name: 'main-careers',
  components: {
    CareersBanner,
    Careers
  },
  data() {
    return {
      title: 'Mad Devs Careers: Work with Us',
      description: 'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in software engineering, DevOps, or mobile app development.',
      ogUrl: 'https://maddevs.io/careers'
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
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/careers/'
        }
      ]
    };
  }
};
</script>
