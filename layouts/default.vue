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
      <TechnologyStackModal />
      <ProcessAuditModal />
      <TeamHeadcountModal />
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
import TeamsModal from '@/components/ui/teams-modal';
import IndividualsModal from '@/components/ui/individuals-modal';
import InfrastructureAuditModal from '@/components/ui/infrastructure-audit-modal';
import GetCaseStudiesModal from '@/components/ui/get-case-studies-modal';
import TechnologyStackModal from '@/components/ui/technology-stack-modal';
import ProcessAuditModal from '@/components/ui/process-audit-modal';
import TeamHeadcountModal from '@/components/ui/team-headcount-modal';

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
    TechnologyStackModal,
    ProcessAuditModal,
    TeamHeadcountModal
  }
};
</script>
