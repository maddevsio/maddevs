<template>
  <div>
    <Cookie/>
    <Header/>
    <nuxt/>
    <modal name="resume-form" height="auto">
      <ResumeModal />
    </modal>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cookie from '@/components/ui/cookie';
import ResumeModal from '@/components/containers/ResumeModal';

export default {
  name: 'Default',
  components: {
    Header,
    Footer,
    Cookie,
    ResumeModal
  }
};
</script>
