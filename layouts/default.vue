<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer />
    <ContactMeModal v-if="pageWasLoaded" />
    <BackendModal v-if="pageWasLoaded" />
    <FrontendModal v-if="pageWasLoaded" />
    <MobileModal v-if="pageWasLoaded" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMeModal from '@/components/ui/contact-me-modal';
import BackendModal from '@/components/ui/backend-modal';
import FrontendModal from '@/components/ui/frontend-modal';
import MobileModal from '@/components/ui/mobile-modal';

export default {
  name: 'Default',
  components: { 
    Header,
    Footer,
    ContactMeModal,
    BackendModal,
    FrontendModal,
    MobileModal
  },
  data() {
    return {
      pageWasLoaded: false
    };
  },
  mounted() {
    this.pageWasLoaded = true;
  }
};
</script>
