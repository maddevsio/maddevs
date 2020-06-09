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
      <TeamsModal />
      <IndividualsModal />
      <InfrastructureAuditModal />
      <GetCaseStudiesModal />
      <OrderProjectFromUsModal />
      <TechnologyStackModal />
      <ProcessAuditModal />
      <TeamHeadcountModal />
    </client-only>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMeModal from '@/components/Modal/contact-me-modal';
import BackendModal from '@/components/Modal/backend-modal';
import FrontendModal from '@/components/Modal/frontend-modal';
import MobileModal from '@/components/Modal/mobile-modal';
import TeamsModal from '@/components/Modal/teams-modal';
import IndividualsModal from '@/components/Modal/individuals-modal';
import InfrastructureAuditModal from '@/components/Modal/infrastructure-audit-modal';
import GetCaseStudiesModal from '@/components/Modal/get-case-studies-modal';
import OrderProjectFromUsModal from '@/components/Modal/order-project-from-us-modal';
import TechnologyStackModal from '@/components/Modal/technology-stack-modal';
import ProcessAuditModal from '@/components/Modal/process-audit-modal';
import TeamHeadcountModal from '@/components/Modal/team-headcount-modal';

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
  }
};
</script>
