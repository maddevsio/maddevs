<template>
	<div class="footer-social-network">
		<a href="https://github.com/maddevsio" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--github"/>
		</a>
		<a href="https://www.facebook.com/maddevsllc" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--facebook"/>
		</a>
		<a href="https://www.instagram.com/maddevsio/" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--instagram"/>
		</a>
		<a href="https://blog.maddevs.io/" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--medium"/>
		</a>
		<a href="https://twitter.com/MadDevsIO" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--twitter"/>
		</a>
		<a href="https://www.behance.net/maddevs" class="footer-social-network__social-newtork_link" target="_blank">
      <span class="footer-social-network__icon footer-social-network__icon--behance"/>
		</a>
	</div>
</template>

<script>
export default {
  name: 'footer-social-network'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .footer-social-network {
		display: flex;
		align-items: center;
		margin-left: auto;

    &__icon {
      display: block;
      width: 19px;
      height: 19px;
      background-repeat: no-repeat;
      background-position: center;

      &-github {
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
    }

		&__social-newtork_link {
			padding-right: 35px;

			&:last-child {
				padding-right: 0;
			}
		}
	}

	@media only screen and (max-width: 1420px) {
		.footer-social-network {
			justify-content: center;
			margin-left: 0;
		}
	}

	@media only screen and (max-width: 420px) {
		.footer-social-network {
			&__social-newtork_link {
				padding-right: 22px;
			}
		}
	}
</style>
