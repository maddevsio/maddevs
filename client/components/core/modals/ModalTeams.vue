<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalTeams"
  >
    <TeamsForm />
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

  props: {
    id: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      this.$refs.modalTeams.show()
    },

    close() {
      this.$refs.modalTeams.close()
    },
  },
}
</script>
