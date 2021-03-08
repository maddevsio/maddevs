<template>
  <div class="godee-case-layout">
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: 'Default',
  mounted() {
    const scrollContainer = document.getElementById('scroll-container');
    let driftLoader = () => {
      this.initDrift();
      scrollContainer.removeEventListener('scroll', driftLoader);
    };
	  scrollContainer.addEventListener('scroll', driftLoader);
  },
  methods: {
    initDrift() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!window.drift_invoked) {
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error('Drift snippet included twice.'));
          t.invoked = !0, t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'], 
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function (e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement('script');
            o.type = 'text/javascript', o.async = !0, o.crossorigin = 'anonymous', o.src = 'https://js.driftt.com/include/' + n + '/' + t + '.js';
            document.body.appendChild(o);
          };
        }
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('ihucnapgur9w');
      }
    },
    initIntercom() {
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
    }
  }
};
</script>

