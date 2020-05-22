<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer />
    <client-only>
      <ContactMeModal />
      <BackendModal />
      <FrontendModal />
      <MobileModal />
    </client-only>
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
  }
};
</script>
