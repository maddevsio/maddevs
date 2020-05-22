<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer />
    <no-ssr>
      <ContactMeModal />
      <BackendModal />
      <FrontendModal />
      <MobileModal />
    </no-ssr>
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
