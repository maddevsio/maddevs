<template>
	<div class="footer-social-network">
		<a v-for="(item, i) in socialIcons"
       :key="i" :href="item.link"
       :class="`footer-social-network__link footer-social-network__link--${item.name}`"
       target="_blank"/>
	</div>
</template>

<script>
export default {
  name: 'footer-social-network',
  data() {
    return {
      socialIcons: [{
        name: 'github',
        link: 'https://www.facebook.com/maddevsllc'
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/maddevsllc'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/maddevsio/'
      },
      {
        name: 'medium',
        link: 'https://blog.maddevs.io/'
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/MadDevsIO'
      },
      {
        name: 'behance',
        link: 'https://www.behance.net/maddevs'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .footer-social-network {
		display: flex;
		align-items: center;
		margin-left: auto;

    &__link {
      width: get-vw(16px);
      height: get-vw(16px);
      margin-right: get-vw(35px);
      display: block;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      &--github {
        background-image: url(../../assets/img/Footer/github.svg);
      }

      &--facebook {
        background-image: url(../../assets/img/Footer/facebook.svg);
      }

      &--instagram {
        background-image: url(../../assets/img/Footer/instagram.svg);
      }

      &--medium {
        background-image: url(../../assets/img/Footer/medium.svg);
      }

      &--twitter {
        background-image: url(../../assets/img/Footer/twitter.svg);
      }

      &--behance {
        background-image: url(../../assets/img/Footer/behance.svg);
      }

      &:last-child {
        margin-right: 0;
      }
    }
	}

	@media only screen and (max-width: 1420px) {
		.footer-social-network {
			justify-content: center;
			margin-left: 0;

      &__link {
        width: 16px;
        height: 16px;
        margin-right: 35px;
      }
		}
	}

	@media only screen and (max-width: 420px) {
		.footer-social-network {
      &__link {
        width: 16px;
        height: 16px;
        margin-right: get-vw(35px, 420);
      }
		}
	}
</style>
