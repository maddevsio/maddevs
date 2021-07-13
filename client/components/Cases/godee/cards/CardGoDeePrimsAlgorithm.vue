<template>
  <div class="card-content background-color-silver">
    <div class="card-content_left-item">
      <h4 class="case_title_h4 m-12_bottom card-content_description-title">
        Prim's algorithm
      </h4>
      <TextParagraph>
        Prim's algorithm is used to effectively connect the dots on a map. This is how a trip request list is
        transformed into a map, where new potential routes are displayed for easier overview. The algorithm connects the
        dots and the map’s possible routes. Our aim is to connect as many dots as possible while keeping the longevity
        under 20 km.
      </TextParagraph>
    </div>
    <div class="card-content_right-item">
      <Lottie
        :options="lottieOptions"
        @animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/godee/prim-algorithm.json'

export default {
  name: 'CardGoDeePrimsAlgorithm',
  components: {
    TextParagraph,
    Lottie,
  },

  data() {
    return {
      animation: null,
      lottieOptions: {
        animationData,
      },
    }
  },

  methods: {
    handleAnimation(animation) {
      this.animation = animation
    },
  },
}
</script>

<style scoped lang="scss">
.card-content {
  display: flex;
  justify-content: space-between;
  padding: 33px 118px 36px 104px;
  border-radius: 8px;

  &_gif {
    width: 100%;
    height: 100%;
  }

  &_left-item {
    width: 468px;
  }

  &_right-item {
    margin: -22px 0;
    max-width: 254px;
    max-height: 262px;
  }

  @media screen and (max-width: 1160px) {
    padding-left: 84px;
    padding-right: 100px;
  }

  @media screen and (max-width: 1120px) {
    padding-left: 33px;
    padding-right: 33px;
  }

  @media screen and (max-width: 991px) {
    &_right-item {
      margin: 0;
      max-width: 200px;
      max-height: 200px;
    }
  }

  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;

    &_left-item {
      width: 100%;
      text-align: center;
    }

    &_right-item {
      margin-top: 24px;
      max-width: 254px;
      max-height: 262px;
    }
  }

  @media screen and (max-width: 920px) {
    &_left-item {
      text-align: left;
    }
  }
}
</style>
