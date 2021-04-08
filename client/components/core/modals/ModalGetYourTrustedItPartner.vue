<template>
  <GetYourTrustedItPartnerForm @success="handleSuccess" />
</template>

<script>
import GetYourTrustedItPartnerForm from '@/components/core/forms/GetYourTrustedItPartnerForm'

export default {
  name: 'ModalGetYourTrustedItPartner',
  components: {
    GetYourTrustedItPartnerForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
