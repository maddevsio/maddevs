<template>
  <div class="cta-banner_container container">
    <UIBanner
      title="Build your product <br /> with Mad Devs"
      text="Together we build solutions that bring digital innovation."
      :image="require(`@/assets/img/DeliveryModels/png/Tamara.png`)"
      image-alt-text="Tamara"
      man-name="Tamara Mun"
      man-position="Head of Delivery <br /> Management"
    >
      <UIButton @click="show">
        Estimate your project
      </UIButton>
    </UIBanner>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalContactMe
      id="contact-me-dm"
      ref="modalContactMe"
      :location="'\'Estimate your project\' button, delivery models page'"
    />
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

  methods: {
    show() {
      if (!this.$refs?.modalContactMe?.show) return
      this.$refs.modalContactMe.show()
    },
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
    &__man {
      top: 170px;
    }
    @media screen and (max-width: 1180px) {
      min-height: 490px;
      &__man {
        top: 190px;
      }
    }
    @media screen and (max-width: 992px) {
      min-height: 450px;
      &__man {
        top: 170px;
      }
    }
    @media screen and (max-width: 900px) {
      &__man {
        top: auto;
        right: 7px;
        br {
          display: none;
        }
      }
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
