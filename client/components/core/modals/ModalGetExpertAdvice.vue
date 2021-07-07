<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalGetExpertAdvice"
  >
    <GetExpertAdviceForm />
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
      this.$refs.modalGetExpertAdvice.show()
    },

    close() {
      this.$refs.modalGetExpertAdvice.close()
    },
  },
}
</script>
