<template>
  <InfrastructureAuditForm @success="handleSuccess" />
</template>

<script>
import InfrastructureAuditForm from '@/components/core/forms/InfrastructureAuditForm'

export default {
  name: 'ModalInfrastructureAudit',
  components: {
    InfrastructureAuditForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
