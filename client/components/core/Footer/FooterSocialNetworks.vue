<template>
  <ul class="footerSocialNetworkList">
    <li
      v-for="network in socialNetworks"
      :key="network.key"
      class="footerSocialNetworkList__social-network-link-wrapper"
    >
      <a
        :href="network.url"
        class="footerSocialNetworkList__social-network-link"
        target="_blank"
      >
        <img
          :data-src="require(`@/assets/img/Footer/svg/${network.key}.svg`)"
          :alt="network.title"
          width="42"
          height="42"
          class="img_lazy"
        >
      </a>
    </li>
  </ul>
</template>

<script>
import { socialNetworks } from '@/data/socialNetworks'

export default {
  name: 'FooterSocialNetworkList',
  data() {
    return {
      socialNetworks,
    }
  },
}
</script>

<style lang="scss" scoped>
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
