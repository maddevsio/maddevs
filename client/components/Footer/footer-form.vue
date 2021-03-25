<template>
  <form class="footer-form form">
    <div class="fields-list">
      <div class="field-item">
        <input
          v-model="fullName"
          :class="{ invalid: $v.fullName.$error }"
          type="text"
          class="entry-field"
          placeholder="John Smith"
          @input="$v.fullName.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.fullName.$dirty">
          <span v-if="!$v.fullName.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="field-item footer-form_email">
        <div v-PlaceholderAsterisk="'your@mail.com'">
          <input
            v-model="email"
            :class="{ invalid: $v.email.$error }"
            type="text"
            class="entry-field"
            @input="$v.email.$touch"
          />
        </div>
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span v-if="!$v.email.required" class="modal-error-text error-text">This field is required.</span>
          <span v-if="!$v.email.email" class="modal-error-text error-text">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="field-item">
        <textarea
          v-model="projectDescriber"
          :class="{ invalid: $v.projectDescriber.$error }"
          type="text"
          class="entry-field textarea"
          placeholder="Describe your project..."
          @input="$v.projectDescriber.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.projectDescriber.$dirty">
          <span v-if="!$v.projectDescriber.maxLength" class="modal-error-text error-text">
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
      ref="submitButton"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      :loading="onSubmit"
      class="ui-button--transparent-bgc submit-button"
      type="button"
      @click="sendForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
    >
      Order a project now
    </UIButton>
    <SuccessModal id="footer-modal" :visibled="isEmailSent" @onClose="resetForm" />
  </form>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import FormCheckboxes from '@/components/ui/form-checkboxes'
import UIButton from '@/components/ui/UIButton'
import SuccessModal from '@/components/Modals/success-modal'
import PlaceholderAsterisk from '@/directives/PlaceholderAsterisk'

export default {
  name: 'FooterForm',
  components: {
    FormCheckboxes,
    UIButton,
    SuccessModal,
  },

  directives: {
    PlaceholderAsterisk,
  },

  validations: {
    fullName: {
      maxLength: maxLength(50),
    },

    email: {
      required,
      email,
    },

    projectDescriber: {
      maxLength: maxLength(500),
    },

    validationGroup: ['fullName', 'email', 'projectDescriber'],
  },

  data: () => ({
    form: null,
    fullName: null,
    email: null,
    emailTo: process.env.emailContact,
    projectDescriber: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    isEmailSent: false,
    onSubmit: false,
    subject: 'Marketing',
    modalTitle: 'Mad Devs Website Forms',
  }),

  methods: {
    createLead() {},
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState
    },

    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState
    },

    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true
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
            modalTitle: this.modalTitle,
          },
        }
        this.$store.dispatch('sendEmail', this.form).then(res => {
          this.onSubmit = false
          // this.createLead();
          if (res.status === 200) {
            this.isEmailSent = true
            this.disableScrollOnBody()
            this.resetForm()
            setTimeout(() => {
              this.enableScrollOnBody()
              this.isEmailSent = false
            }, 3000)
          } else {
            this.isEmailSent = false
          }
        })
      }
    },

    resetForm() {
      this.$refs.checkboxes.reset()
      this.$v.$reset() // Reset validation form
      this.fullName = null
      this.email = null
      this.form = null
      this.projectDescriber = ''
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },

    enableScrollOnBody() {
      document.body.style.top = 'auto'
      document.body.style.overflow = 'auto'
    },

    disableScrollOnBody() {
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.overflow = 'hidden'
    },
  },
}
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
