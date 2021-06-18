<template>
  <div class="cta-banner_container container">
    <UIBanner
      title="Build your product <br /> with Mad Devs"
      text="Together we build solutions that bring digital innovation."
      :image="require(`@/assets/img/DeliveryModels/png/Tamara.png`)"
      image-alt-text="Tamara"
      man-name="Tamara Mun"
      man-position="Delivery Manager"
    >
      <UIButton @click="$refs.modalContactMe.show()">
        Estimate your project
      </UIButton>
    </UIBanner>
    <ModalContactMe ref="modalContactMe" />
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
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cta-banner_container {
  padding-bottom: 119px;
  @media screen and (max-width: 768px) {
    padding-bottom: 44px;
  }

  /deep/ .cta-banner {
    min-height: 543px;
    @media screen and (max-width: 1180px) {
      min-height: 490px;
    }
    @media screen and (max-width: 992px) {
      min-height: 450px;
    }
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
