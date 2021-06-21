<template>
  <Modal
    :id="id"
    ref="modalContactMe"
  >
    <ContactMeForm @success="handleSuccess" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import ContactMeForm from '@/components/core/forms/ContactMeForm'

export default {
  name: 'ModalContactMe',
  components: {
    ContactMeForm,
    Modal,
  },

  props: {
    id: {
      type: String,
      default: '',
    },
  },

  methods: {
    handleSuccess() {
      this.close()
    },

    show() {
      this.$refs.modalContactMe.show()
    },

    close() {
      this.$refs.modalContactMe.close()
    },
  },
}
</script>
