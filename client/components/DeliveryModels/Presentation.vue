<template>
  <div class="presentation">
    <div class="container">
      <div class="presentation__content">
        <h2 class="presentation__title">
          Explore more about the interaction process and choose a delivery model that suits your business needs.
        </h2>
        <a
          href="/delivery-models.pdf"
          download
        >
          <UIButton>
            Download presentation
          </UIButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'Presentation',
  components: {
    UIButton,
  },
}
</script>

<style lang="scss" scoped>
.presentation {
  padding: 157px 0;
  &__content {
    display: block;
    margin: 0 auto;
    max-width: 833px;
    text-align: center;
  }
  &__title {
    font-size: 40px;
    line-height: 51px;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;
  }
  /deep/ .ui-button {
    padding-right: 28px;
    padding-left: 28px;
    min-width: 197px;
    height: 52px;
    margin-top: 60px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  @media screen and (max-width: 1024px) {
    padding: 123px 0 110px;
    &__title {
      font-size: 30px;
      line-height: 37px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 77px 0 105px;
    &__content {
      text-align: left;
    }
    /deep/ .ui-button {
      margin-top: 44px;
      font-size: 16px;
    }
  }
}
</style>
