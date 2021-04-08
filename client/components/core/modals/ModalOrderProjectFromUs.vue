<template>
  <OrderProjectFromUsForm @success="handleSuccess" />
</template>

<script>
import OrderProjectFromUsForm from '@/components/core/forms/OrderProjectFromUsForm'

export default {
  name: 'ModalOrderProjectFromUs',
  components: {
    OrderProjectFromUsForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
