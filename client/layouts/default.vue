<template>
  <div class="default-layout">
    <Header/>
    <nuxt/>
    <Footer />
    <Cookie />
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
  </div>
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
import GetExpertAdvice from '@/components/Modals/get-expert-advice-modal';
import Cookie from '@/components/ui/cookie';

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
    GetExpertAdvice,
    Cookie
  },
  mounted() {
    this.$nextTick(() => {
      try {
        const section = document.querySelector(window.location.hash);
        if (section) {
          section.scrollIntoView({ block: 'start' });
        }
        return true;
      } catch {
        return false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
  .default-layout {
    background-color: #000;
  }

  .page-scrollbar {
    height: 100vh;
    overflow: hidden;

    /deep/ .ps__rail-y {
      z-index: 999;
      cursor: pointer;
    }
  }
</style>
