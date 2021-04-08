<template>
  <ContactMeForm @success="handleSuccess" />
</template>

<script>
import ContactMeForm from '@/components/core/forms/ContactMeForm'

export default {
  name: 'ModalContactMe',
  components: {
    ContactMeForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
