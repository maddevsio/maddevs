<template>
  <modal :classes="['modal_container']" height="auto" :name="$props.name" :clickToClose="false" @closed="isEmailSent = false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="hideModal()">
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
      this.$nuxt.$on(this.$props.name, status => {
        if (status === true) {
          this.isEmailSent = true;
        } else {
          this.isEmailSent = false;
        }
      });
    }
  },
  methods: {
    hideModal() {
      this.$modal.hide(this.$props.name);
      this.$nuxt.$emit('tooglePageScrollBar', false);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  /deep/ .modal_container {
    background-color: $bgcolor--black;
    padding: 40px 12px 53px;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }

  .modal_scrollbar {
    max-height: calc(100vh - 126px);
    margin-top: 30px;
    padding: 0 48px;
    background-color: $bgcolor--black;
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

  @media only screen and (max-width: 640px) {
		/deep/.modal_container {
      width: 100% !important;
      height: 100% !important;
      padding: 63px 12px 0;

      .form {
        padding-right: 15px;
      }
    }

    .modal_scrollbar {
      padding: 0;
    }
	}
</style>
