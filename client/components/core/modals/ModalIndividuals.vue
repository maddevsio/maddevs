<template>
  <!-- 'individuals-modal' id is needed for google analytics, don't remove it -->
  <Modal
    :id="'individuals-modal'"
    ref="modalIndividuals"
  >
    <IndividualsForm @success="handleSuccess" />
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

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },

    show() {
      this.$refs.modalIndividuals.show()
    },

    close() {
      this.$refs.modalIndividuals.close()
    },
  },
}
</script>
