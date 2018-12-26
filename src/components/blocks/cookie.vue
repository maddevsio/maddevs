<template>
  <div ref="Cookie" id="cookie-notif" class="cookie-notif hide_cookie">
    <p>{{ $t('cookie-message') }}</p>
    <button ref="CookieButton" class="cookie-notif_button"></button>
  </div>
</template>

<script>
export default {
  name: 'cookie',
  props: ['data'],
  updated() {
    const cookie = this.$refs.Cookie;
    const button = this.$refs.CookieButton;
    if (cookie !== undefined && window.localStorage.getItem('cookie') !== 'false') {
      cookie.classList.remove('hide_cookie');
      button.addEventListener('click', () => {
        localStorage.setItem('cookie', 'false');
        cookie.classList.add('hide_cookie');
      });
    }
  },
};
</script>
