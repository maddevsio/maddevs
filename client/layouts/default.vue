<template>
  <perfect-scrollbar ref="PageScrollBar" id="PageScrollBar" class="page-scrollbar">
    <Header/>
      <nuxt/>
    <Footer />
    <client-only>
      <ContactMeModal />
      <TeamsModal />
      <IndividualsModal />
      <InfrastructureAuditModal />
      <GetCaseStudiesModal />
      <OrderProjectFromUsModal />
      <GetYourTrustedItPartnerModal />
      <GetExpertAdvice />
    </client-only>
  </perfect-scrollbar>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMeModal from '@/components/Modals/contact-me-modal';
import TeamsModal from '@/components/Modals/teams-modal';
import IndividualsModal from '@/components/Modals/individuals-modal';
import InfrastructureAuditModal from '@/components/Modals/infrastructure-audit-modal';
import GetCaseStudiesModal from '@/components/Modals/get-case-studies-modal';
import OrderProjectFromUsModal from '@/components/Modals/order-project-from-us-modal';
import GetYourTrustedItPartnerModal from '@/components/Modals/get-your-trusted-it-partner-modal';
import GetExpertAdvice from '@/components/Modals/get-expert-advice';

export default {
  name: 'Default',
  components: { 
    Header,
    Footer,
    ContactMeModal,
    TeamsModal,
    IndividualsModal,
    InfrastructureAuditModal,
    GetCaseStudiesModal,
    OrderProjectFromUsModal,
    GetYourTrustedItPartnerModal,
    GetExpertAdvice
  },
  created() {
    this.$nuxt.$on('tooglePageScrollBar', opened => {
      if (opened) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    });
  },
  watch: {
    '$route'() {
      if (this.$refs.PageScrollBar && this.$refs.PageScrollBar.$el) {
        this.$refs.PageScrollBar.$el.scrollTop = 0;
      }
    }
  },
  methods: {
    enableScroll() {
      this.$refs.PageScrollBar.create();
    },
    disableScroll() {
      this.$refs.PageScrollBar.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
  .page-scrollbar {
    height: 100vh;
    overflow: hidden;

    /deep/ .ps__rail-y {
      z-index: 999;
      cursor: pointer;
    }
  }
</style>
