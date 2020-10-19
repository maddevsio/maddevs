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
        },
        {
          className: 'social-network-dev',
          link: 'https://dev.to/maddevs'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/_socialNetworkIcons';

  @mixin social-network-list-grid {
    .footerSocialNetworkList {
      display: grid;
      grid-template-columns: repeat(4, max-content);

      &__social-network-link-wrapper {
        margin: 0 -8px;
      }
    }
  }

  .footerSocialNetworkList {
    display: flex;
    justify-content: space-between;

    &__social-network-link {
      display: block;
      width: 42px;
      height: 42px;

      @media screen and (max-width: 1320px) {
        width: 36px;
        height: 36px;
      }
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

    &__social-network-dev {
      @include social-network-dev;
    }
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    @include social-network-list-grid;
  }

  @media screen and (max-width: 640px) {
    @include social-network-list-grid;
  }
</style>
