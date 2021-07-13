<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalTeams"
  >
    <TeamsForm :form-location="location" />
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

    location: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      if (!this.$refs.modalTeams.show) return
      this.$refs.modalTeams.show()
    },

    close() {
      if (!this.$refs.modalTeams.close) return
      this.$refs.modalTeams.close()
    },
  },
}
</script>
