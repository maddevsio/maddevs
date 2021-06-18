<template>
  <Modal ref="modalInfrastructureAudit">
    <InfrastructureAuditForm @success="handleSuccess" />
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

  methods: {
    handleSuccess() {
      this.close()
    },

    show() {
      this.$refs.modalInfrastructureAudit.show()
    },

    close() {
      this.$refs.modalInfrastructureAudit.close()
    },
  },
}
</script>
