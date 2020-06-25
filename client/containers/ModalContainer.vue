<template>
  <modal :classes="['modal_container']" height="auto" :name="$props.name" @closed="isEmailSent = false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide($props.name)">
    <perfect-scrollbar class="modal_scrollbar custom-scrollbar" v-if="isEmailSent === false" :options="scrollbarOptions">
      <slot />
    </perfect-scrollbar>
    <SuccessMessage v-else />
  </modal>
</template>

<script>
import SuccessMessage from '@/components/Modals/success-message';

export default {
  name: 'ModalContainer',
  components: {
    SuccessMessage
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isEmailSent: false,
    scrollbarOptions: {
      wheelPropagation: false
    }
  }),
  created() {
    if (this.$nuxt) {
      this.$nuxt.$on(this.$props.name, form => {
        this.$store.dispatch('sendEmail', form).then(res => {
          if (res.status === 200) {
            this.isEmailSent = true;
          } else {
            this.isEmailSent = false;
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  /deep/ .modal_container {
    background-color: $bgcolor--black;
    padding: 55px 12px 53px;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }

  .modal_scrollbar {
    max-height: 80vh;
    min-height: 500px;
    background-color: $bgcolor--black;
    padding: 0 48px;
  }

  /deep/.vm--overlay {
    background: $modal-overlay-bg-color;
  }

  /deep/.vm--modal {
    box-shadow: none;
  }

  .close-modal {
    position: absolute;
    top: 30px;
    right: 19px;
    cursor: pointer;
    z-index: 1;
  }
</style>
