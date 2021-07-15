<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalInfrastructureAudit"
  >
    <InfrastructureAuditForm :form-location="location" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import InfrastructureAuditForm from '@/components/core/forms/InfrastructureAuditForm'

export default {
  name: 'ModalInfrastructureAudit',
  components: {
    Modal,
    InfrastructureAuditForm,
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
      if (!this.$refs.modalInfrastructureAudit.show) return
      this.$refs.modalInfrastructureAudit.show()
    },

    close() {
      if (!this.$refs.modalInfrastructureAudit.close) return
      this.$refs.modalInfrastructureAudit.close()
    },
  },
}
</script>
