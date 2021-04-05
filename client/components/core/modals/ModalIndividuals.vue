<template>
  <IndividualsForm @success="handleSuccess" />
</template>

<script>
import IndividualsForm from '@/components/core/forms/IndividualsForm'

export default {
  name: 'ModalIndividuals',
  components: {
    IndividualsForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
