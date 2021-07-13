<template>
  <transition name="fade">
    <!-- id is needed for google analytics, don't remove it -->
    <div
      v-if="visibled"
      :id="id"
      class="success-modal"
    >
      <div class="success-modal_content">
        <button
          class="close-modal"
          data-testid="test-close-modal"
          type="button"
          @click="handleClose"
        >
          <img
            src="@/assets/img/common/close-icon-circle.svg"
            alt="Close modal"
          >
        </button>
        <SuccessMessage class="success-modal_success-message" />
      </div>
    </div>
  </transition>
</template>

<script>
import SuccessMessage from '@/components/core/modals/SuccessMessage'

export default {
  name: 'ModalSuccess',
  components: {
    SuccessMessage,
  },

  props: {
    visibled: {
      type: Boolean,
      default: false,
    },

    id: {
      type: String,
      default: null,
    },

    displayTime: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      timeout: null,
    }
  },

  watch: {
    visibled(value) {
      if (value && this.displayTime) this.timeout = setTimeout(this.handleClose, this.displayTime)
      if (!value) this.timeout = null
    },
  },

  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.success-modal {
  width: 514.16px;
  height: 356px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: $modal-bg-color;
  .close-modal {
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: transparent;
    border: 0;
    z-index: 1;
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    align-items: flex-start;

    &_content {
      width: 100%;
    }
  }
}

.close-modal {
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border: 0;
  z-index: 1;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
