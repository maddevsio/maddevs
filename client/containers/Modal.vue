<template>
  <transition name="main-fade" mode="out-in">
    <div
      v-if="isVisible"
      class="modal"
      v-append-to-body
    >
      <transition name="made">
        <div v-if="isOverlay" class="modal_overlay" @click="close"></div>
      </transition>
      <transition name="fade">
        <div
          v-if="contentLoaded"
          class="modal_container"
        >
          <div class="modal_close" @click="close">
            <img src="@/assets/img/common/close-icon.svg" alt="Close modal">
          </div>
          <simplebar class="modal_content" ref="content" @success="openSuccessModal">
            <SuccessMessage v-if="isSuccess" />
            <slot v-else />
          </simplebar>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import simplebar from 'simplebar-vue';
import SuccessMessage from '@/components/Modals/success-message';

export default {
  name: 'Modal',
  components: { simplebar, SuccessMessage },
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false,
      contentLoaded: false,
      isOverlay: false,
      isSuccess: false
    };
  },
  directives: {
    appendToBody: {
      inserted(el) {
        document.body.appendChild(el);
      },
      unbind(el) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    }
  },
  beforeMount() {
    document.addEventListener('keydown', this.onKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown);
  },
  methods: {
    openSuccessModal() {
      this.isSuccess = true;
    },
    close() {
      setTimeout(() => {
        this.isVisible = false;
        this.enableScrollOnBody();
      }, 200);
      setTimeout(() => {
        this.contentLoaded = false;
      }, 50);
      setTimeout(() => {
        this.isOverlay = false;
        this.$emit('on-close');
        this.isSuccess = false;
      }, 100);
    },
    show() {
      this.disableScrollOnBody();
      this.isVisible = true;
      setTimeout(() => {
        this.contentLoaded = true;
      }, 50);
      setTimeout(() => {
        this.isOverlay = true;
        this.$emit('on-show');
      }, 100);
    },
    onKeydown(e) {
      if (e.keyCode === 27) {
        this.close();
      }
    },
    enableScrollOnBody() {
      // Disable body scroll in Safari for mobile devices
      if (window.innerWidth <= 640) {
        document.body.style.position = 'initial';
      }
      document.body.style.top = 'auto';
      document.body.style.overflow = 'auto';
    },
    disableScrollOnBody() {
      // Disable body scroll in Safari for mobile devices
      if (window.innerWidth <= 640) {
        document.body.style.position = 'fixed';
      }
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.overflow = 'hidden';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars';
@import '../assets/styles/modalWindows';

.modal {
  width: 100%;
  height: auto;
  display: flex;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10000000;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 15px;
  overflow: hidden;
  box-sizing: border-box;

  &_overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
  }

  &_close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px 15px 12px;
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
    border: 0;

    img {
      display: block;
    }
  }

  &_container {
    width: 600px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 12;
    margin: auto;
    padding: 70px 0 53px;
    box-sizing: border-box;
    transition: top 0.4s ease;
    overflow: hidden;
    border-radius: 3px;
    background-color: $modal-bg-color;
    border-radius: 3px;
  }

  &_content {
    max-height: 80vh;
    padding: 0 60px;
    box-sizing: border-box;
  }

  /deep/ .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s;
  }

  /deep/ .fade-enter,
  .fade-leave-to {
    transform: scale(0.95);
    opacity: 0;
  }

  /deep/ .made-enter-active,
  .made-leave-active {
    transition: all 0.3s;
  }

  /deep/ .made-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /deep/ .simplebar-vertical {
    right: 10px;
    cursor: pointer !important;

    &::before {
      content: '';
      width: 3px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translateX(50%);
      background-color: #fff;
      opacity: 0.2;
    }

    .simplebar-scrollbar {
      &::before {
        background: #999;
      }
    }

    .simplebar-scrollbar.simplebar-visible::before {
      opacity: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .modal {
    .modal_close {
      margin-right: auto;
    }
  }
}

@media screen and (max-width: 640px) {
  .modal {
    padding: 0;

    &_container {
      width: 100%;
      max-width: 100%;
      height: 100%;
      margin: 0;
    }

    &_content {
      padding: 0 10px;
    }

    /deep/ .simplebar-vertical {
      right: 0;
    }
  }
}
</style>
