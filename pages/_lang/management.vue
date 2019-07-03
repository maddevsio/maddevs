<template>
  <main class="main">
    <Banner />
    <Transparency />
    <Motivation />
    <Risks />
    <Contacts />
  </main>
</template>

<script>
import Banner from '@/components/Management/Banner';
import Transparency from '@/components/Management/Transparency';
import Motivation from '@/components/Management/Motivation';
import Risks from '@/components/Management/Risks';
import Contacts from '@/components/Contacts';

export default {
  name: 'Management',
  components: {
    Banner,
    Transparency,
    Motivation,
    Risks,
    Contacts
  },
  data() {
    return {
      title: this.$t('title-management'),
      description: this.$t('meta-desc_management'),
      ogUrl: this.$t('og_meta-url_management'),
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        // Facebook / Open Graph
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/static/Open-Graph.png' }
      ]
    }
  }
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';

  .header {
    .container {
      max-width: 100%;
    }

    &-wrap_right-block {
      .header_links {
        a {
          color: $text-color--black;
        }
      }

      .header_soc-icons {
        a {
          svg path {
            fill: $bgcolor--black;
          }
        } 
      }
    }

    &-mobile-menu_open {
      svg {
        g {
          fill: $bgcolor--black;
        }
      }
    }

    .switch-lang {
      color: $text-color--black !important;
    }
  }
</style>

