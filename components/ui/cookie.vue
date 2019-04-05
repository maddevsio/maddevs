<template>
  <div ref="Cookie" id="cookie-notif" style="display: none;" class="cookie-notif hide_cookie">
    <p>{{ $t('cookie-message') }}</p>
    <button ref="CookieButton" class="cookie-notif_button"></button>
  </div>
</template>

<script>
export default {
  name: 'cookie',
  props: ['data'],
  mounted() {
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
document.addEventListener('DOMContentLoaded', () => {
  const Cookie = document.getElementById('cookie-notif');
  setTimeout(() => {
    Cookie.removeAttribute('style');
  }, 2000);
});
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .cookie-notif {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    padding-right: 50px;
    box-sizing: border-box;
    background-color: $bgcolor--white;
    box-shadow: 0 0 15px 0 rgba(38, 36, 32, 0.24);
    transition: all .2s ease;
    z-index: 999;
    .cookie-notif_button {
      width: 40px;
      height: 24px;
      background-image: url(../img/common/header/close-menu.svg);
      background-repeat: no-repeat;
      background-size: 10px;
      background-position: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    p {
      color: $text-color--black;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      font-size: 14px;
      line-height: 1.4;
      margin-right: 20px;
    }
  }

  .hide_cookie {
    height: 0;
    overflow: hidden;
    padding: 0;
    p {
      display: none;
    }
    button {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .cookie-notif {
      padding-left: 54px;
      padding-right: 46px;
    }
  }

  @media only screen and (max-width: 576px) {
    .cookie-notif {
      padding-left: 16px;
      padding-right: 8px;
      &_button {
        min-width: 40px;
        min-height: 40px;
      }
    }
  }
</style>

