<template>
  <section id="careers" class="careers">
    <div class="careers__container container">
      <div class="careers__wrapper">
        <form @submit.prevent="handleSubmit(sendData)" class="careers__form">
          <label class="careers__form-name-label"
            >Hello, my name is
            <div>
              <input
                class="careers__form-input careers__form-name-input"
                type="text"
                placeholder="John Smith"
                v-model="fullName"
                ref="nameInput"
                @input="$v.fullName.$touch"
              />
              <!-- Erros -->
              <div v-if="$v.fullName.$dirty">
                <span class="modal-error-text error-text" v-if="!$v.fullName.required">This field is required.</span>
                <span class="modal-error-text error-text" v-if="!$v.fullName.maxLength">
                  Sorry, the number of characters in this field should not exceed 50.
                </span>
              </div>
              <!-- End Erros -->
            </div></label
          >
          <h2 class="careers__form-description">
            I want to work for you as a
            <div rules="required">
              <input
                class="careers__form-input careers__form-position-input"
                type="text"
                placeholder="desired position."
                v-model="positionTitle"
                @input="$v.positionTitle.$touch"
              />
              <!-- Erros -->
              <div v-if="$v.positionTitle.$dirty">
                <span class="modal-error-text error-text" v-if="!$v.positionTitle.required">This field is required.</span>
              </div>
              <!-- End Erros -->
            </div>
          </h2>
          <h2 class="careers__form-description radio-buttons">
            You can also consider me for <br> your other
          </h2>
          <div>
            <ul class="careers__position-list">
              <UIRadioButtons ref="radioButtons" :radios="radioData" v-model="positionValue" @change="$v.positionValue.$touch" />
            </ul>
            <!-- Erros -->
            <div v-if="$v.positionTitle.$dirty">
              <span class="modal-error-text error-text posotion-error-text" v-if="!$v.positionValue.required">This field is required.</span>
            </div>
            <!-- End Erros -->
          </div>
          <h2 class="careers__form-description careers__form-description-email-title">
            Please reply to
            <div>
              <input
                class="careers__form-input careers__form-email-input"
                type="email"
                placeholder="your@mail.com"
                v-model="email"
                @input="$v.email.$touch"
              />
              <!-- Erros -->
              <div v-if="$v.email.$dirty">
                <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
                <span class="modal-error-text error-text" v-if="!$v.email.email">
                  Invalid email address. Please use your work email.
                </span>
              </div>
              <!-- End Erros -->
            </div>
          </h2>
          <h2 class="careers__form-description">
            To get more information on my <br> skills, please
          </h2>
          <ul class="careers__form-list">
            <li class="careers__form-list-item careers__form-list-item-linkedin">
              – check out my
              <input
                class="careers__form-input careers__form-linkedin-input"
                type="text"
                placeholder="LinkedIn profile"
                v-model="linkedinProfile"
              />
            </li>
            <li class="careers__form-list-item careers__file-attach">
              <div>
                <FileInput v-model="selectedFile" @input="onFileChanged" ref="fileInput" />
                <!-- Erros -->
                <div v-if="$v.selectedFile.$dirty">
                  <span class="modal-error-text error-text error-text-file-attach" v-if="!$v.selectedFile.required">
                    This field is required.
                  </span>
                  <span class="modal-error-text error-text error-text-file-attach" v-if="!$v.selectedFile.ext">
                    Please, upload a file with one of the following extensions: pdf, doc, docx.
                  </span>
                  <span class="modal-error-text error-text error-text-file-attach" v-if="!$v.selectedFile.fileSizeValidation">
                    Sorry, file size has exceeded its max limit of 5MB.
                  </span>
                </div>
                <!-- End Erros -->
              </div>
            </li>
          </ul>
          <Button
            type="submit"
            :disabled="$v.validationGroup.$invalid || onSubmit"
            :loading="onSubmit"
          >
            I want to work for Mad Devs!
          </Button>
        </form>
      </div>
    </div>
    <SuccessModal :visibled="isEmailSent" id="career-modal" @onClose="resetForm" />
  </section>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import { fileSizeValidation, fileExt } from '@/helpers/validators';
import FileInput from '@/components/Careers/FileInput';
import Button from '@/components/Careers/Button';
import UIRadioButtons from '@/components/ui/UIRadioButtons';
import SuccessModal from '@/components/Modals/success-modal';

export default {
  name: 'CareersForm',
  components: {
    FileInput,
    Button,
    UIRadioButtons,
    SuccessModal
  },
  validations: {
    fullName: {
      required,
      maxLength: maxLength(50)
    },
    positionTitle: {
      required
    },
    positionValue: {
      required
    },
    email: {
      required,
      email
    },
    selectedFile: {
      required,
      fileExt,
      fileSizeValidation
    },
    validationGroup: ['fullName', 'email', 'positionTitle', 'positionValue', 'selectedFile']
  },
  data() {
    return {
      fullName: null,
      positionValue: null,
      positionTitle: null,
      email: null,
      emailTo: 'hr@maddevs.io',
      selectedFile: null,
      linkedinProfile: null,
      radioData: [
        { type: 'senior', label: 'Senior,' },
        { type: 'middle', label: 'Middle,' },
        { type: 'junior', label: 'Junior,' },
        { type: 'intern', label: 'Intern' }
      ],
      isEmailSent: false,
      onSubmit: false,
      form: '',
      modalTitle: 'Mad Devs Website Carrers Form'
    };
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    onFileChanged(params) {
      params;
      if (this.$v && this.$v.selectedFile) {
        this.$v.selectedFile.$touch();
      }
    },
    sendData(e) {
      if (!this.errors && !this.onSubmit) {
        this.onSubmit = true;
        // TODO: add ajax request
        this.toBase64(this.selectedFile).then(base64 => {
          this.form = {
            templateId: 305491, // Required
            variables: {
              fullName: this.fullName,
              email: this.email,
              emailTo: this.emailTo,
              linkedinProfile: this.linkedinProfile,
              positionValue: this.positionValue.type,
              positionTitle: this.positionTitle,
              subject: `Job Candidate Application for ${this.positionTitle}`,
              modalTitle: this.modalTitle
            },
            attachment:{
              base64: base64.replace(/^data:(.*,)?/, ''),
              name: this.selectedFile.name
            }
          };
          this.$store.dispatch('sendEmail', this.form).then(res => {
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
        });
      }
    },
    resetForm() {
      this.$refs.form.reset();
      this.$refs.fileInput.reset();
      this.$refs.radioButtons.reset();
      this.fullName = null;
      this.positionValue = null;
      this.positionTitle = null;
      this.email = null;
      this.selectedFile = null;
      this.linkedinProfile = null;
      this.isEmailSent = false;
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    focusInput() {
      this.$nextTick(() => {
        if(this.$refs.nameInput && this.$refs.nameInput.focus()) {
          this.$refs.nameInput.focus();
        }
      });
    }
  }
};
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
