<template>
  <section>
    <BaseForm
      id="footer-form"
      ref="baseForm"
      button-label="Order a project now"
      :use-description="true"
      :use-phone="false"
      :use-labels="false"
      :fullname-required="false"
      button-class-name="ui-button--transparent-bgc submit-button"
      class-name="footer-form"
      @submit="handleSubmit"
    />
    <ModalSuccess
      id="footer-modal"
      :display-time="3000"
      :visibled="isSuccess"
      @close="handleModalClose"
    />
  </section>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import ModalSuccess from '@/components/core/modals/ModalSuccess'
import sendEmailMixin from '@/mixins/sendEmailMixin'
import createNewLeadMixin from '@/mixins/createNewLeadMixin'

export default {
  name: 'FooterForm',
  components: {
    BaseForm,
    ModalSuccess,
  },

  mixins: [sendEmailMixin(305480, 'Contact Me'), createNewLeadMixin('footer-form')],

  data() {
    return {
      isSuccess: false,
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
      }

      // from mixin
      this.submitLead(variables)

      // from mixin
      this.submitEmail(variables)

      this.disableScrollOnBody()
      this.isSuccess = true
    },

    reset() {
      this.$refs.baseForm.reset()
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

<style lang="scss">
@import '../../../assets/styles/vars';

.footer-form {
  width: 100%;

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
