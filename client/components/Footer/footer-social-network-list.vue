<template>
  <ul class="footerSocialNetworkList">
    <li v-for="(socialNetwork, i) in socialNetworkList" :key="i" class="footerSocialNetworkList__social-network-link-wrapper">
      <a :href="socialNetwork.link" class="footerSocialNetworkList__social-network-link" :class="`footerSocialNetworkList__${socialNetwork.className}`" target="__blank"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'footer-social-network-list',
  data() {
    return {
      socialNetworkList: [
        {
          className: 'social-network-github',
          link: 'https://github.com/maddevsio'
        },
        {
          className: 'social-network-facebook',
          link: 'https://www.facebook.com/maddevsllc'
        },
        {
          className: 'social-network-twitter',
          link: 'https://twitter.com/MadDevsIO'
        },
        {
          className: 'social-network-linkedin',
          link: 'https://www.linkedin.com/company/mad-devs'
        },
        {
          className: 'social-network-instagram',
          link: 'https://www.instagram.com/maddevsio'
        },
        {
          className: 'social-network-medium',
          link: 'https://blog.maddevs.io'
        },
        {
          className: 'social-network-behance',
          link: 'https://www.behance.net/maddevs'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/_socialNetworkIcons';

  .footerSocialNetworkList {
    display: flex;
    justify-content: space-between;
    
    &__social-network-link-wrapper {
      &:first-child {
        margin-left: -8px;
      }

      &:last-child {
        margin-right: -8px;
      }
    }
    
    &__social-network-link {
      display: block;
      width: 42px;
      height: 42px;
    }

    &__social-network-github {
      @include social-network-github;
    }

    &__social-network-facebook {
      @include social-network-facebook;
    }

    &__social-network-twitter {
      @include social-network-twitter;
    }

    &__social-network-linkedin {
      @include social-network-linkedin;
    }

    &__social-network-instagram {
      @include social-network-instagram;
    }

    &__social-network-medium {
      @include social-network-medium;
    }

    &__social-network-behance {
      @include social-network-behance;
    }
  }

  @media only screen and (max-width: 1320px) {
    .footerSocialNetworkList {
      &__social-network-link {
        width: 36px;
        height: 36px;
      }
    }
  }
  
  @media only screen and (max-width: 1200px) {
    .footerSocialNetworkList {
      &__social-network-list {
        margin-top: 35px;
        padding-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .footerSocialNetworkList {
      &__social-network-link-wrapper {
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
