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
      button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
      class-name="footer-form"
      @submit="handleSubmit"
    />
    <!-- this id should be unique, because it used for google analytics -->
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
import createLeadMixin from '@/mixins/createLeadMixin'
import scrollOnBody from '@/mixins/scrollOnBody'

export default {
  name: 'FooterForm',
  components: {
    BaseForm,
    ModalSuccess,
  },

  mixins: [createLeadMixin(305480, 'Contact Me'), scrollOnBody],

  data() {
    return {
      isSuccess: false,
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
        formLocation: 'Footer component',
      }

      // from mixin
      this.submitLead(variables)

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
  },
}
</script>

<style lang="scss">
.footer-form {
  width: 100%;

  .textarea {
    height: 192px;
    max-height: 192px;
    padding: 22px 10px;
  }

  .fields-list {
    display: grid;
    margin-bottom: 9px;
  }

  .form-checkboxes {
    margin-top: 10px;
    margin-bottom: 36px;
    border-radius: 6px;
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
    border: 1px solid $border-color--grey-input;
    border-radius: 6px;
    background-color: transparent;
    color: $text-color--white-primary;

    &::placeholder {
      color: $text-color--grey-pale;
    }

    &::-moz-placeholder {
      opacity: 1;
    }

    &.textarea {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .entry-field {
    font-size: 16px;
  }

  .entry-field,
  .error-text,
  /deep/ .form-checkbox-label {
    @include font('Inter', 16px, 400);
  }

  .entry-field,
  .error-text,
  /deep/ .form-checkbox-label {
    letter-spacing: -0.013em;
    line-height: 24px;
  }

  .error-text {
    margin-top: 5px;
    font-size: 13px;
    color: $text-color--red;
  }

  .invalid {
    border-color: $border-color--red;
  }

  /deep/ .form-checkbox-label {
    padding-left: 30px;

    &:first-child {
      margin-bottom: 25px;
    }
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
