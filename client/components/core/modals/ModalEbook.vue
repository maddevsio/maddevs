<template>
  <!-- id is needed for google analytics, don't remove it -->
  <Modal
    :id="id"
    ref="modalEbook"
  >
    <ReadForm />
  </Modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import ReadForm from '@/components/Ebook/ReadForm'

export default {
  name: 'ModalEbook',
  components: {
    Modal,
    ReadForm,
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
      if (!this.$refs.modalEbook.show) return
      this.$refs.modalEbook.show()
    },

    close() {
      if (!this.$refs.modalEbook.close) return
      this.$refs.modalEbook.close()
    },
  },
}
</script>

<style lang="scss" scoped>
  /deep/ .modal {
    &_container,
    &_content,
    &_head {
      padding: 0;
    }

    &_container {
      width: 498px;
      max-width: 498px;
    }

    &_close {
      top: 20px;
      right: 20px;
    }
  }

  /deep/ .read-form {
    max-width: 100%;
  }
</style>
