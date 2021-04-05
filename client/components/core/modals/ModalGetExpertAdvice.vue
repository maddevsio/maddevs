<template>
  <GetExpertAdviceForm @success="handleSuccess" />
</template>

<script>
import GetExpertAdviceForm from '@/components/core/forms/GetExpertAdviceForm'

export default {
  name: 'ModalGetExpertAdvice',
  components: {
    GetExpertAdviceForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
