<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalContactMe"
  >
    <ContactMeForm />
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
    show() {
      this.$refs.modalContactMe.show()
    },

    close() {
      this.$refs.modalContactMe.close()
    },
  },
}
</script>
