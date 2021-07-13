<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalOrderProjectFromUs"
  >
    <OrderProjectFromUsForm :form-location="location" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import OrderProjectFromUsForm from '@/components/core/forms/OrderProjectFromUsForm'

export default {
  name: 'ModalOrderProjectFromUs',
  components: {
    Modal,
    OrderProjectFromUsForm,
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
      if (!this.$refs.modalOrderProjectFromUs.show) return
      this.$refs.modalOrderProjectFromUs.show()
    },

    close() {
      if (!this.$refs.modalOrderProjectFromUs.close) return
      this.$refs.modalOrderProjectFromUs.close()
    },
  },
}
</script>
