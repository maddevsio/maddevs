<template>
  <form class="footer-form form">
    <div class="fields-list">
      <div class="field-item">
        <input
          v-model="fullname"
          type="text"
          :class="{ invalid: $v.fullname.$error }"
          class="entry-field"
          placeholder="John Smith"
          @input="$v.fullname.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.fullname.$dirty">
          <span v-if="!$v.fullname.maxLength" class="modal-error-text error-text">
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
          v-model="description"
          type="text"
          :class="{ invalid: $v.description.$error }"
          class="entry-field textarea"
          placeholder="Describe your project..."
          @input="$v.description.$touch"
        />
        <!-- Erros -->
        <div v-if="$v.description.$dirty">
          <span v-if="!$v.description.maxLength" class="modal-error-text error-text">
            Sorry, the number of characters in this field should not exceed 256.
          </span>
        </div>
        <!-- End Erros -->
      </div>
    </div>
    <UIFormCheckboxes ref="checkboxes" @change="handleCheckboxesChange" />
    <UIButton
      ref="submitButton"
      class="ui-button--transparent-bgc submit-button"
      type="button"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy"
      @click="submitForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
    >
      Order a project now
    </UIButton>
    <ModalSuccess id="footer-modal" :display-time="3000" :visibled="isSuccess" @close="handleModalClose" />
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, maxLength } from 'vuelidate/lib/validators'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'
import UIButton from '@/components/shared/UIButton'
import ModalSuccess from '@/components/core/modals/ModalSuccess'
import PlaceholderAsterisk from '@/directives/PlaceholderAsterisk'

export default {
  name: 'FooterForm',
  components: {
    UIFormCheckboxes,
    UIButton,
    ModalSuccess,
  },

  directives: {
    PlaceholderAsterisk,
  },

  validations: {
    fullname: {
      maxLength: maxLength(50),
    },

    email: {
      required,
      email,
    },

    description: {
      maxLength: maxLength(256),
    },

    validationGroup: ['fullname', 'email', 'description'],
  },

  data: () => ({
    fullname: '',
    email: '',
    description: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    isSuccess: false,
  }),

  methods: {
    ...mapActions(['sendEmail', 'createNewLead']),

    submitForm(isValid) {
      if (!isValid) return

      const lead = {
        fullname: this.fullname,
        email: this.email || '',
        description: this.description,
        type: 'footer-form',
      }

      const emailToSent = {
        templateId: 305480,
        variables: {
          fullName: this.fullname || '',
          email: this.email || '',
          emailTo: process.env.emailContact,
          projectDescriber: this.description,
          agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          subject: 'Marketing',
          modalTitle: 'Mad Devs Website Form',
        },
      }

      this.createNewLead(lead)
      this.sendEmail(emailToSent)

      this.resetForm()
      this.disableScrollOnBody()
      this.isSuccess = true
    },

    resetForm() {
      this.$refs.checkboxes.reset()
      this.$v.$reset() // Reset validation form
      this.fullname = null
      this.email = null
      this.form = null
      this.description = ''
      this.agreeWithPrivacyPolicy = false
      this.agreeToGetMadDevsDiscountOffers = false
    },

    handleCheckboxesChange({ privacy, discountOffers }) {
      this.agreeWithPrivacyPolicy = privacy
      this.agreeToGetMadDevsDiscountOffers = discountOffers
    },

    handleModalClose() {
      this.isSuccess = false
      this.enableScrollOnBody()
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
@import '../../../assets/styles/vars';

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
