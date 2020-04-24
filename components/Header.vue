<template>
  <header class="header">
    <div class="container">
      <div class="header__header-content_wrap">
        <div class="header__left-nav_bar">
          <router-link :to="`/`">
            <img src="../assets/img/common/logo.svg" alt="Logotype" class="header__header-logo">
          </router-link>
          <nav class="header__header-routes_links">
            <router-link to="/">About</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/careers">Careers</router-link>
            <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
          </nav>
        </div>
        <div class="header__right-content">
          <div class="header__right-text_content">
            <div class="header__soc-links_wrap">
              <a href="https://twitter.com/maddevsio" target="_blank" class="header__twitter-link header__soc-link">
                <img src="../assets/img/Header/twitter-icon.svg" alt="Twitter">
              </a>
              <a href="https://ru.linkedin.com/company/mad-devs" target="_blank" class="header__lindekin-link header__soc-link">
                <img src="../assets/img/Header/lindekin-icon.svg" alt="Lindekin">
              </a>
              <a href="https://www.facebook.com/maddevsio" target="_blank" class="header__facebook-link header__soc-link">
                <img src="../assets/img/Header/facebook-icon.svg" alt="Facebook">
              </a>
            </div>
            <div class="header__phones-dropdown_wrap">
              <a class="header__selected-phone" :id="selectedPhone.country" :href="`tel:${selectedPhone.phoneNumber}`">
                {{ selectedPhone.phoneNumber }}
              </a>
              <div class="header__phones-list">
                <a 
                  class="header__phone-item"
                  v-for="(phone, i) in phones" 
                  :key="i" 
                  :id="phone.country"
                  :href="`tel:${phone.phoneNumber}`"
                  @click="selectPhone(phone)"
                >
                  {{ phone.phoneNumber }}
                </a>
              </div>
            </div>
            <a href="#" class="header__mailto-link">team@maddevs.io</a>
          </div>
          <buttonTrigger :buttonInnerText="buttonInnerText"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'main-header',
  components: {
    buttonTrigger
  },
  data() {
    return {
      buttonInnerText: 'Contact me',
      phones: [
        {
          phoneNumber: '+44 20 3984 8555',
          country: 'england' 
        },
        {
          phoneNumber: '+24 50 2344 7666',
          country: 'poland' 
        },
        {
          phoneNumber: '+88 40 6666 9888',
          country: 'russia' 
        },
        {
          phoneNumber: '+44 34 4456 7654',
          country: 'belarus' 
        }
      ],
      selectedPhone: {
        phoneNumber: '+44 20 3984 8555',
        country: 'england'
      }
    };
  },
  methods: {
    selectPhone(phone) {
      this.selectedPhone = phone;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    position: fixed;
    z-index: 2;
    padding-top: 155px;
    background: $header-gradient--black-transparent;

    button {
      width: 135px;
      height: 40px;
      color: $text-color--red;
      border-color: $border-color--red;
    }

    &__header-content_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: -120px;
    }

    &__header-logo {
      width: 40px;
      height: 70px;
    }

    &__header-routes_links {
      position: relative;
      padding-top: 9px;
      padding-left: 55px;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: 16px;
        font-size: 18px;
        font-family: 'Hoves-Regular';

        &::after {
          content: '↓';
          color: transparent;
        }

        &:focus {
          color: $text-color--red;
          &::after {
            color: $text-color--red;
          }
        }

        &:last-child {
          &::after {
            content: '';
          }
        }
      }
    }

    &__left-nav_bar,
    &__right-content,
    &__right-text_content {
      display: flex;
    }

    &__right-text_content {
      display: flex;
      padding-top: 9px;
    }

    &__soc-links_wrap {
      padding-right: 26px;
    }

    &__soc-link {
      padding-right: 5px;
    }

    &__phones-dropdown_wrap {
      height: max-content;
      min-width: 185px;
      background: url('../assets/img/Header/dropdown-arrow.svg') no-repeat;
      background-position-y: 8px;
      background-position-x: 149px;

      &:hover {
        .header__phones-list {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__phones-list {
      display: none;
      position: absolute;
    }

    &__mailto-link,
    &__selected-phone,
    &__phone-item {
      padding-right: 26px;
      color: $text-color--grey;
      font-size: 18px;
      font-family: 'Hoves-Regular';
    }

    &__selected-phone,
    &__phone-item {
      padding-right: 40px;
      text-decoration: none;
      cursor: pointer;
    }

    &__phone-item {
      padding-top: 17px;
    }
  }

  @media only screen and (max-width: 1320px) {
    .header {
      &__header-routes_links {
        padding-left: 25px;
      }

      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__soc-links_wrap {
        padding-right: 15px;
      }

      &__phones-dropdown_wrap {
        min-width: 170px;
      }

      &__routes_links {
        a {
          margin-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .header {
      button,
      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__routes_links,
      &__header-routes_links a {
        font-size: 16px;
      }

      &__header-routes_links {
        padding-top: 10px;
      }

      &__header-routes_links a {
        margin-right: 5px;
      }

      &__phones-dropdown_wrap {
        min-width: 156px;
        padding-top: 1px;
        background-position-x: 133px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .header {
      button {
        width: 120px;
      }

      button,
      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__routes_links,
      &__header-routes_links a {
        font-size: 15px;
      }

      &__header-routes_links {
        padding-top: 11px;
      }

      &__header-routes_links a {
        margin-right: 0;
      }

      &__phones-dropdown_wrap {
        min-width: 140px;
        padding-top: 1px;
        background-position-x: 123px;
      }
    }
  }
</style>
