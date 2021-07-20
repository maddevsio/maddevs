<template>
  <div class="read-form">
    <img
      src="@/assets/img/Ebook/book-rotated.png"
      alt="Pricing strategies"
    >
    <h4>Get your copy of  “Custom Software Development: Pricing Strategies”</h4>
    <div class="read-form_fields">
      <BaseInput
        v-model="name"
        name="name"
        :show-label="false"
        :required="true"
        placeholder="Your name"
        :validation="$v.name"
      />
      <BaseInput
        v-model="email"
        name="email"
        :show-label="false"
        placeholder="Email"
        :required="true"
        :validation="$v.email"
      />
      <button
        :class="{ 'read-form_btn--disabled': !isValid }"
        @click="submit"
      >
        Send me the ebook
      </button>
    </div>
    <p>By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.</p>
  </div>
</template>

<script>
import { email, maxLength, required } from 'vuelidate/lib/validators'
import BaseInput from '@/components/core/forms/BaseInput'

export default {
  name: 'ReadForm',
  components: { BaseInput },
  data() {
    return {
      name: '',
      email: '',
    }
  },

  validations: {
    email: {
      required,
      email,
    },

    name: {
      required,
      maxLength: maxLength(100),
    },

    validationGroup: ['email', 'name'],
  },

  computed: {
    isValid() {
      return !this.$v.validationGroup.$invalid
    },
  },

  methods: {
    toBase64(file) {
      if (!file) return null
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },

    getAttachBase64() {
      return new Promise((resolve, reject) => {
        try {
          const { origin } = window.location
          const fileName = 'custom-software-development-pricing-strategies-ebook.pdf' // This file from /static folder
          fetch(`${origin}/${fileName}`)
            .then(file => file.blob())
            .then(blob => this.toBase64(blob).then(base64 => resolve(base64)))
            .catch(error => reject(error))
        } catch (error) {
          reject(error)
        }
      })
    },

    async submit() {
      if (!this.isValid) return
      const base64File = await this.getAttachBase64()
      const request = {
        templateId: 348595, // Required
        variables: {
          senderName: this.name,
          emailTo: this.email,
        },

        attachment: {
          base64: base64File.replace(/^data:(.*,)?/, ''),
          name: 'pricing-strategies-ebook.pdf',
        },
      }
      console.log(request)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.read-form {
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 48px;
  background-color: #F4F4F4;
  border-radius: 4px;
  box-sizing: border-box;

  > img {
    width: 100%;
    max-width: 145px;
    height: auto;
    margin-left: -15px;
  }

  > h4 {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: #111;
    margin-bottom: 24px;
  }

  &_fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    /deep/ .field-item {
      width: 100%;

      input {
        width: 100%;
        padding: 12px 15px;
        @include font('Inter', 16px, 400);
        color: #707072;
        border-radius: 4px;
        border: 1px solid #707072;
        background-color: transparent;
        box-sizing: border-box;
      }

      .v-placeholder-asterisk {
        left: 17px !important;
        top: 50% !important;
        transform: translateY(-50%);
        color: #707072;
      }
    }

    button {
      width: auto;
      padding: 12px 15px;
      @include font('Inter', 16px, 600);
      line-height: 20px;
      letter-spacing: -0.4px;
      color: #A0A0A1;
      border-radius: 4px;
      border: 1px solid #707072;
      background-color: transparent;
      cursor: pointer;
      margin-bottom: 16px;
      box-sizing: border-box;

      &:active {
        background-color: #eee;
      }
    }
  }

  &_btn {
    &--disabled {
      opacity: 0.7;
      cursor: not-allowed !important;

      &:active {
        background-color: transparent !important;
      }
    }
  }

  > p {
    @include font('Inter', 14px, 400);
    letter-spacing: -0.4px;
    color: #A0A0A1;
    line-height: 18px;
  }
}
</style>
