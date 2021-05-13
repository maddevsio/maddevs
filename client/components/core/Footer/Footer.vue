<template>
  <footer
    data-testid="test-footer"
    :class="`footer ${pageName}`"
  >
    <div class="container">
      <div class="footer__content row">
        <div class="footer__left-content col-xl-8 col-lg-7 col-md-6">
          <h2 class="footer__main-title">
            Get In Touch
          </h2>
          <FooterContacts />
          <FooterNavbar class="footer__navbar-desktop" />
        </div>
        <div class="footer__form-wrap col-xl-4 col-lg-5 col-md-5">
          <FooterForm />
        </div>
      </div>
      <div class="footer__mobile-content footer__social-network-list-mobile">
        <FooterSocialNetworks />
      </div>
      <div class="footer__mobile-content">
        <FooterNavbarMobile />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterForm from '@/components/core/forms/FooterForm'
import FooterContacts from '@/components/core/Footer/FooterContacts'
import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import FooterNavbarMobile from '@/components/core/Footer/FooterNavbarMobile'
import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'

export default {
  name: 'Footer',
  components: {
    FooterForm,
    FooterContacts,
    FooterNavbar,
    FooterNavbarMobile,
    FooterSocialNetworks,
  },

  data() {
    return {
      pageName: '',
    }
  },

  watch: {
    $route() {
      this.updateClassName()
    },
  },

  mounted() {
    this.updateClassName()
  },

  methods: {
    updateClassName() {
      if ($nuxt.$route.name) {
        this.pageName = $nuxt.$route.name
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.footer {
  padding-top: 100px;
  padding-bottom: 92px;

  &__content {
    justify-content: space-between;

    @media screen and (max-width: 991px) {
      margin: 0;
    }
  }

  &__main-title {
    @include font('Poppins', 62px, 700);
    margin-bottom: 43px;
    line-height: 120%;
    letter-spacing: -1px;
    color: $text-color--red;
  }

  &__left-content {
    padding-right: 128px;
    box-sizing: border-box;
  }

  &__form-wrap {
    margin-top: 20px;
  }

  &__mobile-content {
    display: none;
  }

  &__social-network-list-mobile {
    margin: 40px 0;
  }
}

.gdpr,
.privacy,
.nda {
  margin-top: 141px;
}

.gdpr,
.privacy,
.nda,
.faq {
  padding-top: 109px;
  border-top: 1px solid $border-color--grey-dark;
}

.faq {
  margin-top: 114px;
}

@media only screen and (max-width: 1200px) {
  .footer {
    &__main-title {
      margin-bottom: 20px;
    }

    &__form-wrap {
      margin-top: 33px;
    }

    &__left-content {
      padding-right: 40px;
    }
  }
}

@media screen and (max-width: 990px) {
  .footer__main-title {
    font-size: 45px;
  }
}

@media only screen and (max-width: 991px) {
  .footer {
    padding-top: 48px;
    padding-bottom: 46px;

    &__form-wrap,
    &__left-content {
      padding-left: 0;
      padding-right: 0;
    }

    &__form-wrap {
      margin-top: 30px;
    }
  }
}

@media only screen and (max-width: 834px) {
  .gdpr,
  .privacy,
  .nda {
    margin-top: 90px;
  }

  .faq {
    margin-top: 65px;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &__main-title {
      font-size: 45px;
    }

    &__navbar-desktop {
      display: none;
    }

    &__mobile-content {
      display: block;
    }

    &__social-network-list-mobile {
      border-top: 1px solid rgba(164, 168, 180, 0.2);
      padding-top: 35px;
    }
  }
}

@media only screen and (max-width: 578px) {
  .gdpr,
  .privacy,
  .nda {
    margin-top: 68px;
  }

  .faq {
    margin-top: 44px;
  }
}

@media only screen and (max-width: 576px) {
  .footer {
    padding-top: 50px;

    &__main-title {
      font-size: 46px;
    }

    &__social-network-list-mobile {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
