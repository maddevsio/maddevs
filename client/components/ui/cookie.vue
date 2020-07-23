<template>
  <div v-if="cookieActive" ref="Cookie" class="cookie-notif">
    <img src="@/assets/img/common/cookie.svg" alt="Cookie" class="cookie-icon">
    <p>This website uses cookies to improve your experience. By continuing browsing our <br> website, you agree with cookie usage. Read our <a href="/privacy" target="blank">Privacy Policy</a> for more information.</p>
    <button @click="hideCookieNotif" class="cookie-notif_button">Accept cookies</button>
  </div>
</template>

<script>
export default {
  name: 'cookie',
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1vw 2.5vw;
    box-sizing: border-box;
    background-color: $cookie-bg-color;
    transition: all .2s ease;
    z-index: 999;
    .cookie-notif_button {
      width: 10vw;
      height: 2.8vw;
      padding: 0;
      border: 0.07vw solid $border-color--red;
      background-color: transparent;
      border-radius: 0.1vw;
      color: $text-color--red;
      font-size: 1vw;
      font-family: 'Hoves-Regular';
      letter-spacing: -0.03em;
      box-shadow: none;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: $bgcolor--red;
        color: $text-color--white;
      }

      &:active {
        background-color: $button-active--red;
        border-color: $button-active-border--red;
      }
    }

    .cookie-icon {
      width: 2.6vw;
      height: 2.6vw;
    }

    p {
      margin: 0 1.5vw;
      color: $text-color--white;
      font-family: 'Hoves-Regular';
      font-size: 1vw;
      line-height: 1.4;
      letter-spacing: 0.02em;
    }

    a {
      color: $text-color--white;
    }
  }
</style>
