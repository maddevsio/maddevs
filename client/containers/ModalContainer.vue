<template>
  <modal :classes="['modal_container']" height="auto" :name="$props.name" @closed="handleOutsideClick">
    <button @click="closeModal" class="close-modal">
      <img src="@/assets/img/common/close-icon.svg" alt="Close modal">
    </button>
    <perfect-scrollbar class="modal_scrollbar modal-safari-only custom-scrollbar" v-if="isEmailSent === false" :options="scrollbarOptions">
      <slot />
    </perfect-scrollbar>
    <SuccessMessage :id="successModalID" v-else />
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
    },
    successModalID: {
      type: String,
      default: null
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
    handleOutsideClick() {
      this.isEmailSent = false;
      this.enableScrollOnBody();
      this.$nuxt.$emit('resetCheckboxesInForm');
    },
    closeModal() {
      this.$modal.hide(this.$props.name);
      this.$nuxt.$emit('resetCheckboxesInForm');
    },
    enableScrollOnBody() {
      const scrollY = document.body.style.top;
      // Enable body scroll in Safari for mobile devices
      if (window.innerWidth <= 640) {
        document.body.style.position = '';
      }
      document.body.style.overflow = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  /deep/ .modal_container {
    background-color: $modal-bg-color;
    padding: 40px 12px 53px;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }

  .modal_scrollbar {
    max-height: calc(100vh - 126px);
    margin-top: 30px;
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
    top: 25px;
    right: 12px;
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
    border: 0;
  }

  /deep/.modal-entry-field {
    background-color: $modal-entry-field-bg;
    color: $text-color--white;

    &::placeholder {
      color: $bgcolor--grey;
      opacity: 0.5;
    }
  }

  /deep/.invalid {
    background-color: $input-invalid--bg;
    color: $text-color--grey-light;

    &::placeholder {
      color: $text-color--grey-light;
    }
  }

  @media only screen and (max-width: 640px) {
		/deep/.modal_container {
      width: 100% !important;
      height: 100% !important;
      padding: 40px 0 0 12px;

      .form {
        padding-right: 15px;
      }
    }

    .modal_scrollbar {
      padding: 0;
    }
	}

  /* iphone 5 */
  @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 177px) !important;
    }
  }

  /* iphone 6, 6s, 7, 8 */
  @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 177px) !important;
    }
  }

  /* iphone 6+, 6s+, 7+, 8+ */
  @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 177px) !important;
    }
  }

  /* iphone X , XS, 11 Pro */
  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 205px) !important;
    }
  }

  /* iphone XR, 11 */
  @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio: 2) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 205px) !important;
    }
  }

  /* iphone XS Max, 11 Pro Max */
  @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio: 3) {
    _::-webkit-full-page-media, _:future, :root .modal-safari-only {
      max-height: calc(100vh - 205px) !important;
    }
  }
</style>
