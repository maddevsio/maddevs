<template>
  <modal height="auto" name="success-modal">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('success-modal')">
    <SuccessMessage />
  </modal>
</template>

<script>
import SuccessMessage from '@/components/Modals/success-message';

export default {
  name: 'success-modal',
  components: {
    SuccessMessage
  }
};
</script>

<style lang="scss" scoped>
  .close-modal {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 1;
  }
</style>
