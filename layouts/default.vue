<template>
  <perfect-scrollbar ref="PageScrollBar" id="PageScrollBar" class="page-scrollbar">
    <Header/>
      <nuxt/>
    <Footer />
    <client-only>
      <ContactMeModal />
      <BackendModal />
      <FrontendModal />
      <MobileModal />
      <TeamsModal />
      <IndividualsModal />
      <InfrastructureAuditModal />
      <GetCaseStudiesModal />
      <OrderProjectFromUsModal />
      <TechnologyStackModal />
      <ProcessAuditModal />
      <TeamHeadcountModal />
    </client-only>
  </perfect-scrollbar>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMeModal from '@/components/Modals/contact-me-modal';
import BackendModal from '@/components/Modals/backend-modal';
import FrontendModal from '@/components/Modals/frontend-modal';
import MobileModal from '@/components/Modals/mobile-modal';
import TeamsModal from '@/components/Modals/teams-modal';
import IndividualsModal from '@/components/Modals/individuals-modal';
import InfrastructureAuditModal from '@/components/Modals/infrastructure-audit-modal';
import GetCaseStudiesModal from '@/components/Modals/get-case-studies-modal';
import OrderProjectFromUsModal from '@/components/Modals/order-project-from-us-modal';
import TechnologyStackModal from '@/components/Modals/technology-stack-modal';
import ProcessAuditModal from '@/components/Modals/process-audit-modal';
import TeamHeadcountModal from '@/components/Modals/team-headcount-modal';

export default {
  name: 'Default',
  components: { 
    Header,
    Footer,
    ContactMeModal,
    BackendModal,
    FrontendModal,
    MobileModal,
    TeamsModal,
    IndividualsModal,
    InfrastructureAuditModal,
    GetCaseStudiesModal,
    OrderProjectFromUsModal,
    TechnologyStackModal,
    ProcessAuditModal,
    TeamHeadcountModal
  },
  watch: {
    '$route'() {
      if (this.$refs.PageScrollBar && this.$refs.PageScrollBar.$el) {
        this.$refs.PageScrollBar.$el.scrollTop = 0;
      }
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
