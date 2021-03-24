<template>
  <ul class="footerSocialNetworkList">
    <li
      v-for="(socialNetwork, i) in socialNetworkList"
      :key="i"
      class="footerSocialNetworkList__social-network-link-wrapper"
    >
      <a :href="socialNetwork.href" class="footerSocialNetworkList__social-network-link" target="_blank">
        <img
          :data-src="require(`@/assets/img/Footer/svg/${socialNetwork.img}.svg`)"
          :alt="socialNetwork.alt"
          width="42"
          height="42"
          class="img_lazy"
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterSocialNetworkList',
  data() {
    return {
      socialNetworkList: [
        {
          href: 'https://github.com/maddevsio',
          img: 'github',
          alt: 'Github',
        },
        {
          href: 'https://www.facebook.com/maddevsllc',
          img: 'facebook',
          alt: 'Facebook',
        },
        {
          href: 'https://twitter.com/MadDevsIO',
          img: 'twitter',
          alt: 'Twitter',
        },
        {
          href: 'https://www.linkedin.com/company/mad-devs',
          img: 'linkedin',
          alt: 'Linkedin',
        },
        {
          href: 'https://www.instagram.com/maddevsio',
          img: 'instagram',
          alt: 'Instagram',
        },
        {
          href: 'https://medium.com/maddevs-io',
          img: 'medium',
          alt: 'Medium',
        },
        {
          href: 'https://www.behance.net/maddevs',
          img: 'behance',
          alt: 'Behance',
        },
        {
          href: 'https://dev.to/maddevs',
          img: 'devto',
          alt: 'DEV',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

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
    width: 42px;
    height: 42px;
    display: block;

    img {
      width: 42px;
      height: 42px;
      display: block;
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  @include social-network-list-grid;
}

@media screen and (max-width: 640px) {
  @include social-network-list-grid;
}
</style>
