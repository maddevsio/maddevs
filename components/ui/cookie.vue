<template>
  <div v-if="cookieActive" ref="Cookie" class="cookie-notif">
    <img src="../../assets/img/common/cookie.svg" alt="Cookie">
    <p>We use cookies on our website to improve your experience and ensure that you get relevant content and offers. By continuing browsing our website, you agree with cookie usage. <a href="/Mad Devs. Termsfeed-privacy-policy-docx-english.pdf" download>Read Mad Devs Privacy Policy</a> for more information.</p>
    <button @click="hideCookieNotif" class="cookie-notif_button">Accept cookies</button>
  </div>
</template>

<script>
export default {
  name: 'cookie',
  props: ['data'],
  data() {
    return {
      cookieActive: false
    };
  },
  mounted() {
    if (process.browser && window.localStorage.getItem('cookie') === null) {
      this.cookieActive = true;
    }
  },
  methods: {
    hideCookieNotif() {
      this.cookieActive = false;
      localStorage.setItem('cookie', 'true');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .cookie-notif {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    padding-right: 50px;
    box-sizing: border-box;
    background-color: $bgcolor--section-bg;
    box-shadow: 0 0 15px 0 rgba(38, 36, 32, 0.24);
    transition: all .2s ease;
    z-index: 999;
    .cookie-notif_button {
      padding: 10px 24px;
      background-color: transparent;
      border: 1px solid $accent-color--red;
      border-radius: 2px;
      color: $accent-color--red;
      font-size: 16px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      line-height: 18px;
      cursor: pointer;
      white-space: nowrap;
    }
    img {
      width: auto;
      height: 40px;
    }
    p {
      max-width: 680px;
      color: $text-color--white;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      font-size: 14px;
      line-height: 1.4;
      margin-left: 11px;
      margin-right: 47px;

      a {
        color: $accent-color--red;
      }
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

  @media only screen and (max-width: 1024px) {
    .cookie-notif {
      padding-left: 60px;
      padding-right: 60px;
      .cookie-notif_button {
        font-size: 14px;
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .cookie-notif {
      flex-wrap: wrap;
      
      img {
        display: none;
      }

      p {
        width: 100%;
        margin: 0;
      }

      .cookie-notif_button {
        margin-top: 15px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .cookie-notif {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>

