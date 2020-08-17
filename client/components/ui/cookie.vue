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
  @import '../../assets/styles/get-vw';

  .cookie-notif {
    width: 100%;
    padding: get-vw(16px) 0;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: $cookie-bg-color;
    transition: all .2s ease;
    z-index: 999;
    .cookie-notif_button {
      height: get-vw(40px);
      padding: 0 get-vw(26px);
      border: get-vw(1px) solid $border-color--red;
      background-color: transparent;
      border-radius: get-vw(2px);
      color: $text-color--red;
      font-size: get-vw(16px);
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
      width: get-vw(36px);
      height: get-vw(36px);
    }

    p {
      margin: 0 get-vw(20px);
      color: $text-color--white;
      font-family: 'Hoves-Regular';
      font-size: get-vw(16px);
      line-height: get-vw(19px);
      letter-spacing: -0.03em;
    }

    a {
      color: $text-color--white;
    }
  }

  @media only screen and (max-width: 1024px) {
    .cookie-notif {
      padding: get-vw(16px, 1024);
      flex-direction: column;

      .cookie-notif_button,
      p {
        font-size: get-vw(16px, 1024);
        line-height: get-vw(19px, 1024);
      }

      .cookie-notif_button {
        width: 100%;
        height: get-vw(45px, 1024);
        font-family: 'Hoves-Bold';
      }

      img {
        display: none;
      }

      p {
        margin-bottom: get-vw(13px, 1024);
        text-align: center;

        br {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .cookie-notif {
      padding: get-vw(16px, 768);

      .cookie-notif_button,
      p {
        font-size: get-vw(16px, 768);
        line-height: get-vw(19px, 768);
      }

      .cookie-notif_button {
        height: get-vw(45px, 768);
      }

      p {
        margin-bottom: get-vw(13px, 768);
      }
    } 
  }

  @media only screen and (max-width: 576px) {
    .cookie-notif {
      padding: get-vw(16px, 576);

      .cookie-notif_button,
      p {
        font-size: get-vw(16px, 576);
        line-height: get-vw(19px, 576);
      }

      .cookie-notif_button {
        height: get-vw(45px, 576);
      }

      p {
        margin-bottom: get-vw(13px, 576);
      }
    } 
  }

  @media only screen and (max-width: 440px) {
    .cookie-notif {
      padding: get-vw(16px, 440);

      .cookie-notif_button,
      p {
        font-size: get-vw(16px, 440);
        line-height: get-vw(19px, 440);
      }

      .cookie-notif_button {
        height: get-vw(45px, 440);
      }

      p {
        margin-bottom: get-vw(13px, 440);
      }
    } 
  }

  @media only screen and (max-width: 375px) {
    .cookie-notif {
      padding: get-vw(16px, 375);

      .cookie-notif_button,
      p {
        font-size: get-vw(16px, 375);
        line-height: get-vw(19px, 375);
      }

      .cookie-notif_button {
        height: get-vw(45px, 375);
      }

      p {
        margin-bottom: get-vw(13px, 375);
      }
    }
  }
</style>
