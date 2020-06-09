<template>
  <modal name="success-modal" :clickToClose="false" class="success-modal">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('success-modal')">
    <div class="success-modal__conten-wrapper">
      <img src="@/assets/img/common/success-modal-hand.svg" alt="Hand">
      <div class="success-modal__text-content">
        <div class="success-modal__title">Thanks for your <br> interest in Mad Devs</div>
        <div class="success-modal__info-text">The form has been submitted. <br> We will contact you as soon as possible.</div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'SuccessModal'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .success-modal {
    &__title {
      padding-top: 28px;
      font-size: 40px;
      color: $text-color--red;
      letter-spacing: -1px;
      font-family: 'Hoves-Bold';
    }

    &__info-text {
      padding-top: 23px;
      font-size: 18px;
      color: $text-color--grey;
      letter-spacing: -0.03em;
      font-family: 'Hoves-Regular';
    }

    /deep/.vm--modal {
      padding: 85px 59px 94px;
    }

    .close-modal {
      top: 29px;
      right: 17px;
    }
  }

</style>
