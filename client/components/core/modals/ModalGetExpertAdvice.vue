<template>
  <Modal ref="modalGetExpertAdvice">
    <GetExpertAdviceForm @success="handleSuccess" />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import GetExpertAdviceForm from '@/components/core/forms/GetExpertAdviceForm'

export default {
  name: 'ModalGetExpertAdvice',
  components: {
    Modal,
    GetExpertAdviceForm,
  },

  methods: {
    handleSuccess() {
      this.close()
    },

    show() {
      this.$refs.modalGetExpertAdvice.show()
    },

    close() {
      this.$refs.modalGetExpertAdvice.close()
    },
  },
}
</script>
