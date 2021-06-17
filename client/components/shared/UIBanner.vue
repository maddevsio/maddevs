<template>
  <section class="cta-banner">
    <h2 v-html="title" />
    <p v-html="text" />
    <!-- Child elements start -->
    <slot />
    <!-- Child elements end -->
    <img
      width="395"
      height="490"
      class="cta-banner__image"
      :src="image"
      :alt="imageAltText"
    >
    <div class="cta-banner__man">
      {{ manName }}
      <span>{{ manPosition }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UIBanner',
  props: {
    title: {
      type: String,
      default: 'Title',
    },

    text: {
      type: String,
      default: '',
    },

    image: {
      type: String,
      default: '',
    },

    imageAltText: {
      type: String,
      default: '',
    },

    manName: {
      type: String,
      default: '',
    },

    manPosition: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.cta-banner {
  box-sizing: border-box;
  position: relative;
  background-color: $bgcolor--silver;
  padding: 85px 105px;
  @media screen and (max-width: 1280px) {
    padding: 85px 40px;
  }
  @media screen and (max-width: 992px) {
    padding: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 40px 32px 0;
  }

  h2 {
    @include font('Poppins', 60px, 700);
    max-width: 590px;
    line-height: 65px;
    letter-spacing: -0.04em;
    margin-bottom: 21px;
    @media screen and (max-width: 1280px) {
      max-width: 500px;
      font-size: 48px;
    }
    @media screen and (max-width: 1280px) {
      max-width: 450px;
      font-size: 42px;
      line-height: 100%;
    }
    @media screen and (max-width: 900px) {
      max-width: 395px;
      font-size: 36px;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      text-align: center;
      font-size: 40px;
      letter-spacing: -0.05em;
      margin-bottom: 24px;
    }
    @media screen and (max-width: 370px) {
      font-size: 34px;
    }
  }

  p {
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.013em;
    margin-bottom: 40px;
    max-width: 420px;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 992px) {
      max-width: 350px;
    }
    @media screen and (max-width: 900px) {
      max-width: 320px;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 24px;
      text-align: center;
    }
  }

  &__image {
    width: auto;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 106px;
    image-rendering: pixelated;
    @media screen and (max-width: 1280px) {
      right: 90px;
    }
    @media screen and (max-width: 1180px) {
      height: 85%;
    }
    @media screen and (max-width: 900px) {
      right: 0;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      height: auto;
      position: static;
    }
    @media screen and (max-width: 375px) {
      width: calc(100% + 50px);
      margin: auto -25px 0;
    }
  }

  &__man {
    min-width: 158px;
    position: absolute;
    top: 188px;
    right: 61px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #101113;
    @media screen and (max-width: 1280px) {
      right: 20px;
    }
    @media screen and (max-width: 1180px) {
      right: 5px;
      top: 215px;
    }
    @media screen and (max-width: 992px) {
      top: 190px;
    }
    @media screen and (max-width: 900px) {
      top: auto;
      bottom: 20px;
    }
    @media screen and (max-width: 768px) {
      top: auto;
      bottom: 16px;
      right: 0;
      line-height: 16px;
    }
    span {
      display: block;
      font-weight: bold;
      margin-top: 4px;
      @media screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
}
</style>
