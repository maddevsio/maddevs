<template>
  <div class="card-content">
    <h4 class="card-content_title case_title_h4">
      {{ title }}
    </h4>
    <div
      class="card-content_gadget-picture-wrapp"
      :class="`card-content_gadget-picture-wrapp-${file}-card`"
    >
      <Picture
        :lazy="false"
        :shadow="false"
        :background="false"
        :width="width"
        :height="height"
        :file="`${file}-card`"
        :alt="alt"
        folder="yourcast"
        extension="png"
        class="card-content_picture"
      />
    </div>
    <div
      class="card-content_gadget-picture-wrapp-mobile"
      :class="`card-content_gadget-picture-wrapp-mobile-${file}`"
    >
      <Picture
        :lazy="false"
        :shadow="false"
        :background="false"
        :width="width"
        :height="height"
        :file="file"
        :alt="alt"
        folder="yourcast"
        extension="png"
      />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CardSupportedGadgets',
  components: {
    Picture,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    width: {
      type: Number,
      default: 0,
    },

    height: {
      type: Number,
      default: 0,
    },

    file: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/cases/_mixins';

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_title {
    color: $text-color--white-primary;
  }

  &_gadget-picture-wrapp {
    position: relative;
    top: 32px;
  }

  &_gadget-picture-wrapp-mobile {
    display: none;
  }

  &_gadget-picture-wrapp-macbook-pro-card {
    right: 25px;
  }

  &_picture {
    /deep/ .image {
      width: max-content;
    }
  }

  @media screen and (max-width: 920px) {
    &_title {
      font-size: 20.25px;
      line-height: 130%;
      letter-spacing: -1px;
    }
  }

  @media screen and (max-width: 870px) {
    align-items: center;

    &_title {
      margin-bottom: 25px;
    }

    &_gadget-picture-wrapp {
      display: none;
    }

    &_gadget-picture-wrapp-mobile {
      display: block;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 870px) {
    &_gadget-picture-wrapp-mobile-iphonex {
      max-width: 260px;
    }
  }

  @media screen and (max-width: 375px) {
    height: 350px;
    align-items: flex-start;

    &_title {
      font-size: 26.56px;
      line-height: 130%;
      letter-spacing: -0.03em;
    }

    &_gadget-picture-wrapp-mobile-macbook-pro {
      width: 705px;
      margin-left: -44px;
    }

    &_gadget-picture-wrapp-mobile-iphonex {
      width: 342px;
    }

    &_gadget-picture-wrapp-mobile-ipad-pro {
      width: 765px;
    }
  }
}
</style>
