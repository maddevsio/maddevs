<template>
  <!-- 'teams-modal' id is needed for google analytics, don't remove it -->
  <Modal
    id="teams-modal"
    ref="modalTeams"
  >
    <TeamsForm @success="handleSuccess" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import TeamsForm from '@/components/core/forms/TeamsForm'

export default {
  name: 'ModalTeams',
  components: {
    Modal,
    TeamsForm,
  },

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },

    show() {
      this.$refs.modalTeams.show()
    },

    close() {
      this.$refs.modalTeams.close()
    },
  },
}
</script>
