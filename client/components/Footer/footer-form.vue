<template>
  <form class="footer-form form">
    <div class="fields-list">
      <div class="field-item">
        <input @input="$v.fullName.$touch" type="text" :class="{ 'invalid': $v.fullName.$error }" class="entry-field" placeholder="John Smith" v-model="fullName">
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.fullName.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="field-item footer-form_email">
        <div v-PlaceholderAsterisk="'your@mail.com'">
          <input @input="$v.email.$touch" type="text" :class="{ 'invalid': $v.email.$error }" class="entry-field" v-model="email">
        </div>
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.email.email">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="field-item">
        <textarea @input="$v.projectDescriber.$touch" type="text" :class="{ 'invalid': $v.projectDescriber.$error }" class="entry-field textarea" placeholder="Describe your project..." v-model="projectDescriber" />
        <!-- Erros -->
        <div v-if="$v.projectDescriber.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.projectDescriber.maxLength">
            Sorry, the number of characters in this field should not exceed 500.
          </span>
        </div>
        <!-- End Erros -->
      </div>
    </div>
    <FormCheckboxes
      ref="checkboxes"
      @getPrivacyCheckboxState="getPrivacyCheckboxState"
      @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
    />
    <UIButton
      class="ui-button--transparent-bgc submit-button"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
      type="button"
      ref="submitButton"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      :loading="onSubmit"
    >
      Order a project now
    </UIButton>
    <SuccessModal :visibled="isEmailSent" id="footer-modal" @onClose="resetForm" />
  </form>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
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
  validations: {
    fullName: {
      maxLength: maxLength(50)
    },
    email: {
      required,
      email
    },
    projectDescriber: {
      maxLength: maxLength(500)
    },
    validationGroup: ['fullName', 'email', 'projectDescriber']
  },
  data: () => ({
    form: null,
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    projectDescriber: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    isEmailSent: false,
    onSubmit: false,
    subject: 'Marketing',
    modalTitle: 'Mad Devs Website Forms'
  }),
  methods: {
    createLead() {
      const data = [{
        name: this.fullName,
        custom_fields_values: [
          { field_id: 261281, values: [{ value: this.email }] }, // Email
          { field_id: 261437, values: [{ value: this.projectDescriber }] } // Project Describer
        ]
      }];
    },
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 305480, // Required
          variables: {
            fullName: this.fullName,
            email: this.email || '',
            emailTo: this.emailTo || '',
            projectDescriber: this.projectDescriber,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
            subject: this.subject || '',
            modalTitle: this.modalTitle
          }
        };
        this.$store.dispatch('sendEmail', this.form).then(res => {
          this.onSubmit = false;
          // this.createLead();
          if (res.status === 200) {
            this.isEmailSent = true;
            this.resetForm();
            setTimeout(() => {
              this.isEmailSent = false;
            }, 3000);
          } else {
            this.isEmailSent = false;
          }
        });
      }
    },
    resetForm() {
      this.$refs.checkboxes.reset();
      this.$v.$reset(); // Reset validation form
      this.fullName = null;
      this.email = null;
      this.form = null;
      this.projectDescriber = '';
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.footer-form {
    width: 100%;

    &_email {
      /deep/ .v-placeholder-asterisk {
        font-size: 16px;
        font-family: 'Poppins-Regular', sans-serif;
        color: $text-color--grey-form-placeholder;
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
      }
    }

		.submit-button {
      width: 100%;
      height: 64px;
		}

		.textarea {
      height: 192px;
      max-height: 192px;
      padding: 22px 10px;
    }

    .fields-list {
      display: grid;
      margin-bottom: 18px;
    }

    .form-checkboxes {
      margin-top: 10px;
      margin-bottom: 22px;
    }

    .field-item {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      > div {
        width: 100%;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .entry-field {
      padding: 12px 19px 13px;
      border: 1px solid $border-color--grey-form;
      border-radius: 4px;
      background-color: transparent;
      color: $text-color--white-darken;
      font-size: 16px;
      line-height: 27px;

      &::placeholder {
        color: $text-color--grey-form-placeholder;
      }

      &.textarea {
        font-size: 16px;
        line-height: 27px;
      }
    }

    .entry-field,
    .error-text {
      font-family: 'Poppins-Regular', sans-serif;
    }

    .error-text {
      font-size: 14px;
    }

    .invalid {
      border-color: $input-invalid--bg;
    }

    /deep/ .form-checkbox-label {
      padding-left: 30px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
  }

  .freeze {
    pointer-events: none;
    user-select: none;
  }

  @media only screen and (max-width: 1320px) {
		.footer-form .error-text {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 991px) {
		.footer-form {
      .field-item {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
