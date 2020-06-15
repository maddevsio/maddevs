<template>
  <modal height="auto" :name="$props.name" :clickToClose="false" @closed="isEmailSent = false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide($props.name)">
    <perfect-scrollbar class="modal_scrollbar" v-if="isEmailSent === false" :options="scrollbarOptions">
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

  .modal_scrollbar {
    max-height: 85vh;
    background-color: $bgcolor--black;
    padding: 30px 60px 60px;
  }

  .vm--overlay {
    background: $modal-overlay-bg-color !important;
  }

  .close-modal {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 1;
  }
</style>
