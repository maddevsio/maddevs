<template>
  <!-- 'order-project-from-us-modal' id is needed for google analytics, don't remove it -->
  <Modal
    :id="'order-project-from-us-modal'"
    ref="modalOrderProjectFromUs"
  >
    <OrderProjectFromUsForm @success="handleSuccess" />
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

  methods: {
    handleSuccess() {
      this.$parent.$emit('success')
    },

    show() {
      this.$refs.modalOrderProjectFromUs.show()
    },

    close() {
      this.$refs.modalOrderProjectFromUs.close()
    },
  },
}
</script>
