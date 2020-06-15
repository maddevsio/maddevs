<template>
  <transition name="fade">
    <div class="success-modal" v-if="visibled">
      <div class="success-modal_content">
        <button class="close-modal">
          <img src="@/assets/img/common/close-icon.svg" alt="Close modal">
        </button>
        <SuccessMessage />
      </div>
    </div>
  </transition>
</template>

<script>
import SuccessMessage from '@/components/Modals/success-message';

export default {
  name: 'success-modal',
  components: {
    SuccessMessage
  },
  props: {
    visibled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .success-modal {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: $black02;

    &_content {
      position: relative;
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
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
