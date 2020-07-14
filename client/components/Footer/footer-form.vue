<template>
  <div class="footer-form form"> 
    <ValidationObserver v-slot="{ invalid }" ref="form">
      <div class="fields-list">
        <ValidationProvider class="field-item" v-slot="{ classes, errors }">
          <input type="text" class="entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="field-item footer-form_email" rules="email|required" v-slot="{ classes, errors }">
          <div v-PlaceholderAsterisk="'your@mail.com'">
            <input type="text" class="entry-field" :class="classes" v-model="emailFrom">
          </div>
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="field-item" rules="max:500" v-slot="{ classes, errors }">
          <textarea type="text" class="entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectDescriber" @keydown="autosize($event)" rows="1" />
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <FormCheckboxes
        ref="checkboxes"
        @getPrivacyCheckboxState="getPrivacyCheckboxState"
        @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
      />
      <UIButton
        class="ui-button--transparent-bgc"
        name="Order a project now"
        :disabled="invalid || !agreeWithPrivacyPolicy"
        @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
      />
    </ValidationObserver>
    <SuccessModal :visibled="isEmailSent" @onClose="resetForm" />
  </div>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';
import SuccessModal from '@/components/Modals/success-modal';
import PlaceholderAsterisk from '@/directives/PlaceholderAsterisk';

export default {
  name: 'footer-form',
  components: {
    FormCheckboxes,
    UIButton,
    SuccessModal
  },
  directives: {
    PlaceholderAsterisk
  },
  data: () => ({
    fullName: null,
    emailFrom: null,
    emailTo: 'team@maddevs.io',
    projectDescriber: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    isEmailSent: false,
    onSubmit: false
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
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        const form = {
          templateId: 305480, // Required
          variables: {
            fullName: this.fullName,
            emailFrom: this.emailFrom || '',
            emailTo: this.emailTo || '',
            projectDescriber: this.projectDescriber,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers
          }
        };
        this.$store.dispatch('sendEmail', form).then(res => {
          this.onSubmit = false;
          if (res.status === 200) {
            this.isEmailSent = true;
            setTimeout(() => {
              this.resetForm();
            }, 3000);
          } else {
            this.isEmailSent = false;
          }
        });
      }
    },
    resetForm() {
      this.$refs.form.reset();
      this.$refs.checkboxes.reset();
      this.fullName = null;
      this.emailFrom = null;
      this.projectDescriber = '';
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
      this.isEmailSent = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.footer-form {
    width: 450px;
    
    &_email {
      /deep/ .v-placeholder-asterisk {
        font-size: 18px;
        color: $bgcolor--grey;
        font-family: 'Hoves-Regular';
        left: 10px !important;
        top: 50% !important;
        transform: translateY(-50%);

        span {
          opacity: 0.5;
        }
      }
    }

		button {
      width: 100%;
      height: 65px;
		}

		textarea {
			min-height: 64px;
			padding: 22px 10px;
      resize: vertical;
    }
    
    .fields-list {
      display: grid;
      grid-row-gap: 12px;
    }

    .form-checkboxes {
      padding-top: 18px;
    }

    .entry-field {
      padding: 21px 10px;
    }

    .field-item {
      margin-bottom: 8px;
    }
	}

	@media only screen and (max-width: 1440px) {
		.footer-form {
			width: 370px;
		}
	}

	@media only screen and (max-width: 1220px) {
		.footer-form {
			width: 380px;
		}
  }
  
  @media only screen and (max-width: 960px) {
		.footer-form {
      width: 100%;
		}
  }
  
  @media only screen and (max-width: 420px) {
		.footer-form {
			.field-item {
        margin-bottom: 0;
      }
		}
	}
</style>
