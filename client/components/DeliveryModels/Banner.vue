<template>
  <div
    id="transparent-header-area"
    class="banner"
  >
    <picture>
      <source
        :srcset="[$getMediaFromS3('/images/DeliveryModels/webp/banner.webp') + ' ', $getMediaFromS3('/images/DeliveryModels/webp/banner@2x.webp 2x')]"
        type="image/webp"
        class="banner__image media_lazy"
      >
      <img
        :srcset="$getMediaFromS3('/images/DeliveryModels/jpg/banner@2x.jpg')"
        :src="$getMediaFromS3('/images/DeliveryModels/jpg/banner.jpg')"
        width="1680"
        height="827"
        class="banner__image media_lazy"
        alt="Team"
      >
    </picture>
    <div class="container">
      <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
      <div
        ref="sectionText"
        class="banner__content"
        :style="{opacity: sectionTextOpacity}"
      >
        <h1 class="banner__title">
          Delivery <br> models
        </h1>
        <p class="banner__subtitle">
          At Mad Devs, we provide a full range of services aimed at delivering long-term value for both our customers and end users.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'Banner',
  mixins: [changeSectionTextOpacityMixin('sectionText')],
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  min-height: 568px;
  padding-top: 62px; // height of header component
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213 100%);
  overflow: hidden;
  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    object-position: top;
    opacity: 0.48;
  }
  &__content {
    z-index: 2;
    display: block;
    margin: 0 auto;
    max-width: 816px;
    text-align: center;
  }
  &__title {
    color: $text-color--white;
    font-size: 100px;
    line-height: 96px;
  }
  &__subtitle {
    margin-top: 55px;
    font-size: 32px;
    letter-spacing: -0.013em;
    line-height: 44px;
    color: $text-color--silver;
  }

  @media screen and (max-width: 1120px) {
    padding-top: 48px;
  }

  @media screen and (max-width: 1024px) {
    &__title {
      font-size: 76px;
      line-height: 76px;
    }
    &__subtitle {
      margin-top: 35px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 52px;
      line-height: 57px;
    }
    &__subtitle {
      margin-top: 30px;
      font-size: 21px;
      line-height: 29px;
    }
  }
}
</style>
