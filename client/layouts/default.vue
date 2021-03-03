<template>
  <div class="default-layout">
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

    let intercomLoader = function() { // Load intercom script on first scroll
      (function () {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === 'function') {
          ic('reattach_activator');
          ic('update', w.intercomSettings);
        } else {
          var d = document;
          var i = function () {
            i.c(arguments);
          };
          i.q = [];
          i.c = function (args) {
            i.q.push(args);
          };
          w.Intercom = i;
          var l = function () {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/flwiq2ri';
            d.body.appendChild(s); // Set parent block for script 
          };
          if (document.readyState === 'complete') {
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            w.addEventListener('load', l, false);
          }
        }
      })();
      window.Intercom('boot', {
        app_id: 'flwiq2ri'
      });
      window.removeEventListener('scroll', intercomLoader);
    };
	  window.addEventListener('scroll', intercomLoader);
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_vars';

  .default-layout {
    background-color: $bgcolor--black;
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
