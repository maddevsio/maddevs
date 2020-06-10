<template>
	<div class="footer-form form"> 
		<ValidationObserver v-slot="{ invalid }">
			<div class="fields-list">
				<ValidationProvider class="field-item" v-slot="{ classes, errors }">
					<p class="field-name">First name and surname</p>
					<input type="text" class="entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
					<span class="error-text">{{ errors[0] }}</span>
				</ValidationProvider>
				<ValidationProvider class="field-item" rules="email|required" v-slot="{ classes, errors }">
					<p class="field-name required">Work email</p>
					<input type="text" class="entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
					<span class="error-text">{{ errors[0] }}</span>
				</ValidationProvider>
				<ValidationProvider class="field-item" rules="max:500" v-slot="{ classes, errors }">
					<p class="field-name">Project Info</p>
					<textarea type="text" class="entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectInfo" @keydown="autosize($event)" rows="1" />
					<span class="error-text">{{ errors[0] }}</span>
				</ValidationProvider>
			</div>
			<FormCheckboxes
				@getPrivacyCheckboxState="getPrivacyCheckboxState"
				@getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
			/>
			<button
				class="button-default red-text-and-border"
				:disabled="invalid || !agreeWithPrivacyPolicy"
				@click="sendForm(!invalid || agreeWithPrivacyPolicy)"
			>Order a project now</button>
		</ValidationObserver>
	</div>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'footer-form',
  components: {
    FormCheckboxes
  },
  data: () => ({
    fullName: null,
    email: null,
    projectDescription: null,
    projectInfo: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    emailSended: false
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    autosize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    sendForm(isValid) {
      if (isValid === true) {
        const form = {
          templateId: 305480, // Required
          variables: {
            fullName: this.fullName,
            email: this.email,
            projectInfo: this.projectInfo,
            projectDescription: this.projectDescription,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers
          }
        };
        this.$store.dispatch('sendEmail', form).then(res => {
          if (res.status === 200) {
            this.emailSended = true;
          } else {
            this.emailSended = false;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.footer-form {
		width: 450px;

		button {
			width: 100%;
		}

		textarea {
			min-height: 54px;
			padding: 17px 10px;
		}
	}

	@media only screen and (max-width: 1420px) {
		.footer-form {
			width: 390px;
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer-form {
			width: 320px;

			/deep/.form-checkbox-label {
				br {
					display: none;
				}
			}
		}
	}

	@media only screen and (max-width: 1150px) {
		.footer-form {
			width: 340px;

			button {
				font-size: 17px;
			}

      .entry-field {
        font-size: 17px;
      }
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-form {
			width: 100%;
		}
	}
</style>
