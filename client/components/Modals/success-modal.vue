<template>
  <transition name="fade">
    <div class="success-modal" v-if="visibled" :id="id">
      <div class="success-modal_content">
        <button class="close-modal" @click="onClose" type="button">
          <img src="@/assets/img/common/close-icon.svg" alt="Close modal">
        </button>
        <SuccessMessage className="success-modal_success-message"/>
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
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

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

    @media screen and (max-width: 640px) {
      width: 100%;
      height: 100%;
      align-items: flex-start;

      &_content {
        width: 100%;
      }
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
