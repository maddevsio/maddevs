<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalContactMe"
  >
    <ContactMeForm :form-location="location" />
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

    location: {
      type: String,
      default: '',
    },
  },

  methods: {
    show() {
      if (!this.$refs.modalContactMe.show) return false
      this.$refs.modalContactMe.show()
      return true
    },

    close() {
      if (!this.$refs.modalContactMe.close) return false
      this.$refs.modalContactMe.close()
      return true
    },
  },
}
</script>
