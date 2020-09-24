<template>
	<div class="footer-social-network">
		<a href="https://github.com/maddevsio" class="footer-social-network__social-newtork_link" target="_blank">
			<span class="footer-social-network__icon footer-social-network__icon--github"/>
		</a>
		<a href="https://www.linkedin.com/company/mad-devs" class="footer-social-network__social-newtork_link" target="_blank">
			<span class="footer-social-network__icon footer-social-network__icon--linkedin"/>
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
		margin-top: 73px;
		margin-left: auto;

    &__icon {
      display: block;
      width: 19px;
			height: 19px;
			margin-right: 35px;
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
			
			&--linkedin {
        background-image: url(../../assets/img/Footer/linkedin-footer.svg);
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-social-network  {
			margin-top: 60px;

			&__icon {
				margin-right: 19px;
			}
		}
	}
</style>
