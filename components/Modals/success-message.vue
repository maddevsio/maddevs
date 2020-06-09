<template>
  <section class="success-message">
    <div class="success-message__conten-wrapper">
      <img src="@/assets/img/common/success-message-hand.svg" alt="Hand">
      <div class="success-message__text-content">
        <div class="success-message__title">Thanks for your <br> interest in Mad Devs</div>
        <div class="success-message__info-text">The form has been submitted. <br> We will contact you as soon as possible.</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuccessMessage',
  methods: {
    close() {
      this.$emit('close', true);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .success-message {
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
