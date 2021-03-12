const scripts = `window.onload = function () {
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    d.body.appendChild(j);
  })(window, document, "script", "dataLayer", "GTM-NNKVRF3");

  (function(m, e, t, r, i, k, a) {
      m[i] = m[i] || function() {
      (m[i].a = m[i].a || []).push(arguments)
      };
      m[i].l = 1 * new Date();
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, e.body.appendChild(k)
  })
  (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  ym(67161793, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
  });
}`;

export default scripts;
