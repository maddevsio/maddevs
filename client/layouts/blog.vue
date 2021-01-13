<template>
  <div class="blog-layout">
    <Header/>
      <nuxt/>
    <Footer />
    <client-only>
      <ContactMeModal />
    </client-only>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMeModal from '@/components/Modals/contact-me-modal';

export default {
  name: 'Blog',
  components: { 
    Header,
    Footer,
    ContactMeModal
  }
};
</script>
