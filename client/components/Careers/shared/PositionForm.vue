<template>
  <div>
    <form
      class="position-form"
      @submit.prevent="submitForm"
    >
      <div class="position-form__text">
        <label class="position-form__field">
          Hello, my name is
          <FormInput
            ref="nameInput"
            v-model="name"
            type="text"
            placeholder="Your Name"
            class="position-form__input position-form__input-name"
            @input="$v.name.$touch"
          />.
          I want to work for you as a desired position.
          <!-- Erros -->
          <div v-if="$v.name.$dirty">
            <span
              v-if="!$v.name.required"
              class="position-form__error error-text"
            >This field is required.</span>
            <span
              v-if="!$v.name.maxLength"
              class="position-form__error error-text"
            >
              Sorry, the number of characters in this field should not exceed 50.
            </span>
          </div>
          <!-- End Erros -->
        </label>
        <p class="position-form__field">
          <UIRadioButtons
            ref="radioButtons"
            v-model="grade"
            class="position-form__positions-list"
            :options="grades"
            @change="$v.grade.$touch"
          />
          <!-- Erros -->
          <span>
            <div v-if="$v.grade.$dirty">
              <span
                v-if="!$v.grade.required"
                class="position-form__error error-text"
              >
                This field is required.
              </span>
            </div>
          </span>
          <!-- End Erros -->
        </p>
        <label class="position-form__field">
          Please reply to
          <FormInput
            v-model="email"
            type="email"
            placeholder="your@mail.com"
            class="position-form__input position-form__input-email"
            @input="$v.email.$touch"
          />
          <!-- Erros -->
          <div v-if="$v.email.$dirty">
            <span
              v-if="!$v.email.required"
              class="position-form__error error-text"
            >This field is required.</span>
            <span
              v-if="!$v.email.email"
              class="position-form__error error-text"
            >
              Invalid email address. Please use your work email.
            </span>
          </div>
          <!-- End Erros -->
        </label>
        <p class="position-form__field position-form__skills">
          To get more information on my skills, please
          <ul class="position-form__skills-list">
            <li>
              <label>
                check out my
                <FormInput
                  v-model="linkedin"
                  type="text"
                  placeholder="LinkedIn profile"
                  class="position-form__input position-form__input-linkedin"
                />
              </label>
              OR
            </li>
            <li>
              <label>
                <FileInput
                  ref="fileInput"
                  v-model="cvFile"
                  @input="handleFileSelect"
                />
                <!-- Erros -->
                <div v-if="$v.cvFile.$dirty">
                  <span
                    v-if="!$v.cvFile.required"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    This field is required.
                  </span>
                  <span
                    v-if="!$v.cvFile.fileExt"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    Please, upload a file with one of the following extensions: pdf, doc, docx.
                  </span>
                  <span
                    v-if="!$v.cvFile.fileSizeValidation"
                    class="position-form__error position-form__error--file-attach error-text"
                  >
                    Sorry, file size has exceeded its max limit of 5MB.
                  </span>
                </div>
                <!-- End Erros -->
              </label>
            </li>
          </ul>
        </p>
      </div>
      <UIButton
        type="submit"
        :disabled="$v.validationGroup.$invalid"
        class="position-form__submit-button"
      >
        I want to work for Mad Devs!
      </UIButton>
    </form>
    <ModalSuccess
      id="career-modal"
      :visibled="isShowSuccessModal"
      @close="isShowSuccessModal = false"
    />
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { fileSizeValidation, fileExt } from '@/helpers/validators'
import UIRadioButtons from '@/components/shared/UIRadioButtons'
import UIButton from '@/components/shared/UIButton'
import FormInput from '@/components/Careers/shared/FormInput'
import FileInput from '@/components/Careers/shared/FileInput'
import ModalSuccess from '@/components/core/modals/ModalSuccess'

export default {
  name: 'Careers',
  components: {
    FormInput,
    UIRadioButtons,
    FileInput,
    UIButton,
    ModalSuccess,
  },

  validations: {
    name: {
      required,
      maxLength: maxLength(50),
    },

    grade: {
      required,
    },

    email: {
      required,
      email,
    },

    cvFile: {
      required,
      fileExt,
      fileSizeValidation,
    },

    validationGroup: ['name', 'email', 'grade', 'cvFile'],
  },

  props: {
    position: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      name: null,
      grade: null,
      email: null,
      cvFile: null,
      linkedin: null,
      grades: [
        { value: 'senior', label: 'Senior,' },
        { value: 'middle', label: 'Middle,' },
        { value: 'junior', label: 'Junior,' },
        { value: 'intern', label: 'Intern' },
      ],

      isShowSuccessModal: false,
      form: '',
    }
  },

  methods: {
    handleFileSelect() {
      if (this.$v && this.$v.cvFile) {
        this.$v.cvFile.$touch()
      }
    },

    async submitForm() {
      if (this.$v.validationGroup.$invalid) return
      const emailToSent = await this.buildEmail()
      this.$store.dispatch('sendEmail', emailToSent)
      this.isShowSuccessModal = true
      this.resetForm()
    },

    resetForm() {
      this.$v.$reset() // Reset validation form
      this.$refs.fileInput.reset()
      this.$refs.radioButtons.reset()
      this.name = null
      this.grade = null
      this.email = null
      this.cvFile = null
      this.linkedin = null
    },

    async buildEmail() {
      const base64File = await this.toBase64(this.cvFile)
      return {
        templateId: 305491, // Required
        variables: {
          fullName: this.name,
          email: this.email,
          emailTo: process.env.emailHR,
          linkedinProfile: this.linkedin,
          positionValue: this.grade.value,
          positionTitle: this.position,
          subject: `Job Candidate Application for ${this.position}`,
          modalTitle: 'Mad Devs Website Carrers Form',
        },

        attachment: {
          base64: base64File.replace(/^data:(.*,)?/, ''),
          name: this.cvFile.name,
        },
      }
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.position-form {
  background-color: $bgcolor--silver;
  color: $text-color--black-oil;
  padding: 40px;
  padding-bottom: 45px;
  border-radius: 8px;
  overflow: hidden;

  &__text * {
    font-size: 20px;
    line-height: 34px;
    letter-spacing: -0.1px;
  }

  &__input {
    max-width: 45%;
  }

  &__error {
    position: relative;
    top: -6px;
    font-size: 14px;
    margin-top: 0;
    line-height: normal;
    &--file-attach {
      padding-left: 26px;
    }
  }

  &__positions-list {
    display: flex;
    flex-flow: row wrap;
    grid-row-gap: initial;
    &::before {
      content: 'You can also consider me for your other:';
      margin-right: 11px;
    }
    &::after {
      content: 'roles.';
    }
    /deep/ .ui-radio-buttons_item {
      &:last-child {
        margin-right: 11px;
      }
      &-circle {
        width: 18px;
        height: 18px;
      }
    }
  }

  &__skills {
    margin-top: 32px;
    &-list {
      padding-left: 5px;
      list-style: initial;
      list-style-position: inside;
      li label {
        margin-left: -10px;
      }
    }
  }

  &__submit-button {
    width: 255px;
    height: 48px;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.1px;
    border-radius: 6px;
    margin-top: 32px;
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    /deep/ &__text * {
      font-size: 18px;
      line-height: 29px;
    }
    &__error {
      top: -4px;
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 24px;
    padding-bottom: 29px;
    /deep/ &__text * {
      font-size: 17px;
      line-height: 27px;
    }
    &__error {
      top: -4px;
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
