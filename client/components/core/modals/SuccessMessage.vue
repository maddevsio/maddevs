<template>
  <section
    id="success-message"
    class="success-message"
  >
    <div class="success-message__conten-wrapper">
      <img
        src="@/assets/img/common/success-message-hand.svg"
        alt="Hand"
      >
      <div class="success-message__text-content">
        <div class="success-message__title">
          Thanks for your <br>
          interest in Mad Devs
        </div>
        <div class="success-message__info-text">
          The form has been submitted. <br>
          We will contact you as soon as possible.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuccessMessage',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.success-message {
  background-color: $modal-bg-color;

  &__title {
    padding-top: 28px;
    font-size: 40px;
    color: $text-color--red;
    letter-spacing: -1px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
  }

  &__info-text {
    padding-top: 23px;
    font-size: 18px;
    color: $text-color--grey;
    letter-spacing: -0.03em;
    font-family: 'Poppins-Regular', sans-serif;
  }
}

.success-modal {
  &_success-message {
    padding: 30px 60px;
  }
}

@media screen and (max-width: 640px) {
  .success-message {
    padding: 0 40px;
  }

  .success-modal {
    &_success-message {
      padding-top: 70px;
    }
  }
}
</style>
