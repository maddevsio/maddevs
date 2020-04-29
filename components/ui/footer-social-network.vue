<template>
	<div class="footer-social-network">
		<a href="https://github.com/maddevsio" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/github.svg" class="footer-social-network__github" alt="Maddevs GitHub">
		</a>
		<a href="https://www.facebook.com/maddevsio" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/facebook.svg" class="footer-social-network__facebook" alt="Maddevs Facebook">
		</a>
		<a href="https://www.instagram.com/maddevsio/" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/instagram.svg" class="footer-social-network__instagram" alt="Maddevs Instagram">
		</a>
		<a href="https://blog.maddevs.io/" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/medium.svg" class="footer-social-network__medium" alt="Maddevs Medium">
		</a>
		<a href="https://twitter.com/MadDevsIO" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/twitter.svg" class="footer-social-network__twitter" alt="Maddevs Twitter">
		</a>
		<a href="https://www.slideshare.net/maddevs/presentations" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/slideshare.svg" class="footer-social-network__slideshare" alt="Maddevs Slideshare">
		</a>
		<a href="https://www.youtube.com/channel/UCF6liiudpZq6AQe6hXVEW7w" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/youtube.svg" class="footer-social-network__youtube" alt="Maddevs YouTube">
		</a>
		<a href="https://www.behance.net/maddevs" class="footer-social-network__social-newtork_link" target="_blank">
			<img src="../../assets/img/Footer/behance.svg" class="footer-social-network__behance" alt="Maddevs Behance">
		</a>
	</div>
</template>

<script>
export default {
  name: 'footer-social-network'
};
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/_vars';
	
	.footer-social-network {
		display: flex;
		align-items: center;

		&__social-newtork_link {
			padding-right: 39px;

			&:last-child {
				padding-right: 0;
			}
		}
	}

	@media only screen and (max-width: 1390px) {
		.footer-social-network {
			&__social-newtork_link {
				padding-right: 29px;
			}
		}
	}

	@media only screen and (max-width: 1150px) {
		.footer-social-network {
			&__social-newtork_link {
				padding-right: 19px;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-social-network {
			justify-content: space-between;

			&__social-newtork_link {
				padding-right: 0px;
			}
		}
	}
</style>
