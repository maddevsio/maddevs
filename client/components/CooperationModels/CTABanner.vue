<template>
  <div class="cta-banner_container container">
    <UIBanner
      title="Build your product <br /> with Mad Devs"
      text="Together we build solutions that bring digital innovation."
      :image="require(`@/assets/img/CooperationModels/png/tamara.png`)"
      image-alt-text="Tamara"
      man-name="Tamara Mun"
      man-position="Delivery Manager"
    >
      <UIButton>
        Estimate your project
      </UIButton>
    </UIBanner>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CTABanner',
  components: {
    UIBanner,
    UIButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cta-banner {
  &_container {
    padding-bottom: 119px;
  }

  /deep/ .ui-button {
    width: 233px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
}
</style>
