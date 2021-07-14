<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalGetYourTrustedItPartner"
  >
    <GetYourTrustedItPartnerForm :form-location="location" />
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

  props: {
    id: {
      type: String,
      default: '',
    },

    location: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      if (!this.$refs.modalGetYourTrustedItPartner.show) return
      this.$refs.modalGetYourTrustedItPartner.show()
    },

    close() {
      if (!this.$refs.modalGetYourTrustedItPartner.close) return
      this.$refs.modalGetYourTrustedItPartner.close()
    },
  },
}
</script>
