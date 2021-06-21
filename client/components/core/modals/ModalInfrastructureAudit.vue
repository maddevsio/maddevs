<template>
  <!-- 'infrastructure-audit-modal' id is needed for google analytics, don't remove it -->
  <Modal
    id="infrastructure-audit-modal"
    ref="modalInfrastructureAudit"
  >
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
      this.$parent.$emit('success')
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
