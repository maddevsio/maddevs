<template>
  <Modal ref="modalGetYourTrustedItPartner">
    <GetYourTrustedItPartnerForm @success="handleSuccess" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import GetYourTrustedItPartnerForm from '@/components/core/forms/GetYourTrustedItPartnerForm'

export default {
  name: 'ModalGetYourTrustedItPartner',
  components: {
    Modal,
    GetYourTrustedItPartnerForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },

    show() {
      this.$refs.modalGetYourTrustedItPartner.show()
    },

    close() {
      this.$refs.modalGetYourTrustedItPartner.close()
    },
  },
}
</script>
