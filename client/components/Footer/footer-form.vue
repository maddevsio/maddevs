<template>
  <form class="footer-form form">
    <ValidationObserver v-slot="{ invalid }" ref="form">
      <div class="fields-list">
        <ValidationProvider class="field-item" rules="max:50" v-slot="{ classes, errors }">
          <input type="text" class="entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
          <div class="error-text">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider class="field-item footer-form_email" rules="email|required" v-slot="{ classes, errors }">
          <div v-PlaceholderAsterisk="'your@mail.com'">
            <input type="text" class="entry-field" :class="classes" v-model="email">
          </div>
          <div class="error-text">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider class="field-item" rules="max:500" v-slot="{ classes, errors }">
          <textarea type="text" class="entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectDescriber" />
          <div class="error-text">{{ errors[0] }}</div>
        </ValidationProvider>
      </div>
      <FormCheckboxes
        ref="checkboxes"
        @getPrivacyCheckboxState="getPrivacyCheckboxState"
        @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
      />
      <UIButton
        class="ui-button--transparent-bgc submit-button"
        name="Order a project now"
        :disabled="invalid || !agreeWithPrivacyPolicy || onSubmit"
        @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        type="button"
        ref="submitButton"
      >
        {{buttonText}}
      </UIButton>
    </ValidationObserver>
    <SuccessModal :visibled="isEmailSent" id="footer-modal" @onClose="resetForm" />
  </form>
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
  computed: {
    buttonText: function () {
      if (this.onSubmit === true) {
        return 'Waiting...';
      } else {
        return 'Order a project now';
      }
    }
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
      this.fullName = null;
      this.email = null;
      this.form = null;
      this.projectDescriber = '';
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;

      requestAnimationFrame(() => {
        this.$refs.form.reset();
      });
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
      margin-bottom: 25px;
    }

    .form-checkboxes {
      margin-top: 10px;
      margin-bottom: 22px;
    }

    .field-item {
      margin-bottom: 13px;
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
