<template>
  <TeamsForm @success="handleSuccess" />
</template>

<script>
import TeamsForm from '@/components/core/forms/TeamsForm'

export default {
  name: 'ModalTeams',
  components: {
    TeamsForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },
  },
}
</script>
