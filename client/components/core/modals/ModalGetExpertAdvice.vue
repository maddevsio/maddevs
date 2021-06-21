<template>
  <!-- 'get-expert-advice-modal' id is needed for google analytics, don't remove it -->
  <Modal
    id="get-expert-advice-modal"
    ref="modalGetExpertAdvice"
  >
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
      this.$parent.$emit('success')
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
