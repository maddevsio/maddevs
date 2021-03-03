<template>
  <div class="godee-case-layout">
    <nuxt/>
    <client-only>
      <ContactMeModal />
    </client-only>
  </div>
</template>

<script>
import ContactMeModal from '@/components/Modals/contact-me-modal';

export default {
  name: 'Default',
  components: { 
    ContactMeModal
  },
  mounted() {
    const scrollContainer = document.getElementById('scroll-container');
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
      scrollContainer.removeEventListener('scroll', intercomLoader);
    };
	  scrollContainer.addEventListener('scroll', intercomLoader);
  }
};
</script>

