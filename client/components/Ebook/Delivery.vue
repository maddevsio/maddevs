<template>
  <div class="ebook-delivery">
    <div class="container">
      <UIBanner
        title="Build your product <br /> with Mad Devs"
        text="Together we build solutions that bring digital innovation."
        :image="require('@/assets/img/DeliveryModels/png/Tamara.png')"
        image-alt-text="Tamara"
        man-name="Tamara Mun"
        man-position="Delivery Manager"
      >
        <UIButton @click="goToDeliveryPage">
          Find out about Collaboration Approaches
          <img
            src="@/assets/img/common/arrow-up-right.svg"
            alt="arrow"
          >
        </UIButton>
      </UIBanner>
    </div>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'Delivery',
  components: { UIBanner, UIButton },
  methods: {
    goToDeliveryPage() {
      this.$router.push('/delivery-models/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ebook-delivery {
  background-color: #fff;
  padding-bottom: 50px;

  .ui-button {
    display: flex;
    align-items: center;
    @include font('Inter', 16px, 600);
    letter-spacing: -0.4px;
    line-height: 20px;
    color: #fff;
    padding: 14px 24px;

    img {
      margin-left: 7px;
    }
  }

  .cta-banner {
    min-height: 543px;
  }
}
</style>
