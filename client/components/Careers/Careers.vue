<template>
  <section
    id="careers"
    class="careers"
  >
    <div class="careers__container container">
      <div class="careers__wrapper">
        <form
          class="careers__form"
          @submit.prevent="submitForm"
        >
          <label
            class="careers__form-name-label"
          >
            Hello, my name is
            <span>
              <input
                ref="nameInput"
                v-model="name"
                autofocus
                class="careers__form-input careers__form-name-input"
                type="text"
                placeholder="John Smith"
                @input="$v.name.$touch"
              >
              <!-- Erros -->
              <div v-if="$v.name.$dirty">
                <span
                  v-if="!$v.name.required"
                  class="modal-error-text error-text"
                >This field is required.</span>
                <span
                  v-if="!$v.name.maxLength"
                  class="modal-error-text error-text"
                >
                  Sorry, the number of characters in this field should not exceed 50.
                </span>
              </div>
              <!-- End Erros -->
            </span>
          </label>
          <h2 class="careers__form-description">
            I want to work for you as a
            <span>
              <input
                v-model="position"
                class="careers__form-input careers__form-position-input"
                type="text"
                placeholder="desired position."
                @input="$v.position.$touch"
              >
              <!-- Erros -->
              <div v-if="$v.position.$dirty">
                <span
                  v-if="!$v.position.required"
                  class="modal-error-text error-text"
                >This field is required.</span>
              </div>
              <!-- End Erros -->
            </span>
          </h2>
          <h2 class="careers__form-description radio-buttons">
            You can also consider me for <br>
            your other
          </h2>
          <div>
            <ul class="careers__position-list">
              <UIRadioButtons
                ref="radioButtons"
                v-model="grade"
                :options="grades"
                @change="$v.grade.$touch"
              />
            </ul>
            <!-- Erros -->
            <div v-if="$v.grade.$dirty">
              <span
                v-if="!$v.grade.required"
                class="modal-error-text error-text posotion-error-text"
              >This field is required.</span>
            </div>
            <!-- End Erros -->
          </div>
          <h2 class="careers__form-description careers__form-description-email-title">
            Please reply to
            <span>
              <input
                v-model="email"
                class="careers__form-input careers__form-email-input"
                type="email"
                placeholder="your@mail.com"
                @input="$v.email.$touch"
              >
              <!-- Erros -->
              <div v-if="$v.email.$dirty">
                <span
                  v-if="!$v.email.required"
                  class="modal-error-text error-text"
                >This field is required.</span>
                <span
                  v-if="!$v.email.email"
                  class="modal-error-text error-text"
                >
                  Invalid email address. Please use your work email.
                </span>
              </div>
              <!-- End Erros -->
            </span>
          </h2>
          <h2 class="careers__form-description">
            To get more information on my <br>
            skills, please
          </h2>
          <ul class="careers__form-list">
            <li class="careers__form-list-item careers__form-list-item-linkedin">
              – check out my
              <input
                v-model="linkedin"
                class="careers__form-input careers__form-linkedin-input"
                type="text"
                placeholder="LinkedIn profile"
              >
            </li>
            <li class="careers__form-list-item careers__file-attach">
              <div>
                <FileInput
                  ref="fileInput"
                  v-model="cvFile"
                  @input="handleFileSelect"
                />
                <!-- Erros -->
                <div v-if="$v.cvFile.$dirty">
                  <span
                    v-if="!$v.cvFile.required"
                    class="modal-error-text error-text error-text-file-attach"
                  >
                    This field is required.
                  </span>
                  <span
                    v-if="!$v.cvFile.fileExt"
                    class="modal-error-text error-text error-text-file-attach"
                  >
                    Please, upload a file with one of the following extensions: pdf, doc, docx.
                  </span>
                  <span
                    v-if="!$v.cvFile.fileSizeValidation"
                    class="modal-error-text error-text error-text-file-attach"
                  >
                    Sorry, file size has exceeded its max limit of 5MB.
                  </span>
                </div>
                <!-- End Erros -->
              </div>
            </li>
          </ul>
          <Button
            :disabled="$v.validationGroup.$invalid"
            type="submit"
          >
            I want to work for Mad Devs!
          </Button>
        </form>
      </div>
    </div>
    <ModalSuccess
      id="career-modal"
      :visibled="isShowSuccessModal"
      @close="isShowSuccessModal = false"
    />
  </section>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators'
import { fileSizeValidation, fileExt } from '@/helpers/validators'
import FileInput from '@/components/Careers/FileInput'
import Button from '@/components/Careers/Button'
import UIRadioButtons from '@/components/shared/UIRadioButtons'
import ModalSuccess from '@/components/core/modals/ModalSuccess'

export default {
  name: 'Careers',
  components: {
    FileInput,
    Button,
    UIRadioButtons,
    ModalSuccess,
  },

  validations: {
    name: {
      required,
      maxLength: maxLength(50),
    },

    position: {
      required,
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

    validationGroup: ['name', 'email', 'position', 'grade', 'cvFile'],
  },

  data() {
    return {
      name: null,
      position: null,
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
      this.position = null
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
@import '../../assets/styles/vars';

.careers {
  &__position-list {
    align-items: center;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 12px;
    padding: 0;

    /deep/ .ui-radio-buttons {
      &::after {
        content: 'roles.';
        font-family: 'Poppins-Regular', sans-serif;
        font-size: 22px;
        line-height: 24px;
        letter-spacing: -0.02em;
        margin-left: 11px;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    padding: 77px 105px 97px;
    background-color: $bgcolor--white;
  }

  &__form-description-email-title {
    margin: 48px 0 40px;
  }

  &__form-input {
    width: 40%;
    height: 32px;
    padding: 0;
    background-color: transparent;
    border: 0px solid;
    color: $text-color--red;
    caret-color: $text-color--red;

    &::placeholder {
      color: $text-color--grey;
    }
  }

  &__form-list {
    margin-top: 7px;
    margin-bottom: 60px;
  }

  &__form-description {
    font-family: 'Poppins-Regular', sans-serif;
    color: $text-color--black-lighter;
    font-weight: 500;

    br {
      display: none;
    }
  }

  &__linkedin-link {
    color: $text-color--black-lighter;
    font-size: 20px;
    cursor: pointer;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    display: flex;
    text-decoration: none;
    align-items: center;

    &--selected {
      color: $text-color--grey;
      font-size: inherit;
    }

    &-icon {
      margin-right: 25px;
    }
  }

  &__form-list-item-linkedin {
    margin-bottom: 11px;
  }

  &__form-description,
  &__form-input {
    margin-bottom: 10px;
  }

  &__form-name-label,
  &__form-description,
  &__form-list-item {
    line-height: 24px;
  }

  &__form-name-label,
  &__form-description,
  &__form-input,
  &__form-list-item {
    position: relative;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 22px;
    letter-spacing: -0.02em;
  }

  &__form-name-label {
    margin-bottom: 6px;
  }

  .modal-error-text {
    font-size: 14px;
    position: relative;
    top: -13px;
    margin-top: 0;
  }

  .error-text-file-attach {
    top: 0;
  }

  .posotion-error-text {
    top: 5px;
  }

  @media only screen and (max-width: 860px) {
    &__wrapper {
      padding: 0;
      background-color: transparent;
    }

    &__container {
      padding-top: 67px;
      padding-bottom: 67px;
      background-color: $bgcolor--white;
    }
  }

  @media only screen and (max-width: 630px) {
    &__position-list {
      /deep/ .ui-radio-buttons {
        &::after {
          position: absolute;
          left: 88px;
          bottom: 0;
        }
      }
    }

    &__form-description-email-title {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 550px) {
    &__form-name-label,
    &__form-description,
    &__form-input,
    &__form-list-item {
      font-size: 18px;
    }

    &__form-name-input {
      width: 120px;
    }

    &__form-position-input {
      width: 145px;
    }

    &__form-email-input {
      width: 140px;
    }

    &__position-list {
      margin-top: 4px;
    }

    &__form-description-email-title {
      margin-top: 9px;
    }

    &__position-list {
      /deep/ .ui-radio-buttons {
        &::after {
          font-size: 16px;
          left: 67px;
        }
      }
    }

    .modal-error-text {
      font-size: 12px;
      top: -15px;
    }

    .posotion-error-text {
      top: 5px;
    }

    .error-text-file-attach {
      top: 0;
    }
  }

  @media only screen and (max-width: 460px) {
    &__form-position-input {
      width: 220px;
    }
  }

  @media only screen and (max-width: 340px) {
    &__container {
      padding-top: 47px;
      padding-bottom: 47px;
    }

    &__form-list {
      margin-bottom: 40px;
    }

    &__form-name-label,
    &__form-description,
    &__form-input,
    &__form-list-item {
      font-size: 17px;
    }

    &__form-position-input {
      width: 205px;
    }

    &__form-linkedin-input {
      width: 135px;
    }
  }
}
</style>
