<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalIndividuals"
  >
    <IndividualsForm />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import IndividualsForm from '@/components/core/forms/IndividualsForm'

export default {
  name: 'ModalIndividuals',
  components: {
    Modal,
    IndividualsForm,
  },

  props: {
    id: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      this.$refs.modalIndividuals.show()
    },

    close() {
      this.$refs.modalIndividuals.close()
    },
  },
}
</script>
