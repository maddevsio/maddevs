<template>
  <div
    v-if="uid"
    ref="card"
    class="model-card"
    :class="[`model-card--${className}`, full ? 'model-card--full' : '']"
  >
    <NuxtLink
      :to="`/delivery-models/${uid}/`"
      class="model-card__link"
    >
      <div class="model-card__animation">
        <Lottie
          :options="lottieOptions"
          @animCreated="animCreatedHandler"
        />
      </div>
      <div class="model-card__content">
        <h2
          class="model-card__title"
          v-html="title"
        />
        <UIArrowButton class="model-card__button" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'ModelCard',
  components: {
    Lottie,
    UIArrowButton,
  },

  props: {
    full: {
      type: Boolean,
      default: false,
    },

    uid: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    animationName: {
      type: String,
      default: '',
    },

    animationSpeed: {
      type: Number,
      default: 1,
    },

    startAnimationOnScreenPercent: {
      type: Number,
      default: 35,
    },
  },

  data() {
    return {
      animation: null,
      animationIsPlayed: false,
    }
  },

  computed: {
    lottieOptions() {
      return {
        animationData: require(`@/assets/lottie/deliveryModels/${this.animationName}.json`),
        autoplay: false,
        loop: false,
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleCardAnimation)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleCardAnimation)
  },

  methods: {
    animCreatedHandler(animation) {
      this.animation = animation
      this.animation.setSpeed(this.animationSpeed)
    },

    playAnimation() {
      try {
        this.animation.play()
      } catch (err) {
        // prevent catch
      }
    },

    handleCardAnimation() {
      const rect = this.$refs.card.getBoundingClientRect()
      const screenPercent = window.innerWidth < 768 ? 55 : this.startAnimationOnScreenPercent

      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        const startArea = (window.innerHeight / 100) * screenPercent

        if (rect.top <= (window.innerHeight - startArea) && !this.animationPlayed) {
          this.animationIsPlayed = true
          this.playAnimation()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.model-card {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $bgcolor--black-pale;
  border-radius: 4px;
  &--full {
    grid-column: auto / span 2;
    .model-card {
      &__title {
        font-size: 56px;
        line-height: 67px;
      }
      &__content {
        align-items: center;
        text-align: center;
      }
    }
  }
  &:hover {
    .model-card__button {
      background-color: $border-color--white;
      color: $text-color--black;
    }
  }

  &__link {
    color: $text-color--white-primary;
    padding: 80px;
    padding-bottom: 64px;
  }

  &__animation {
    z-index: 1;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    * {
      z-index: 2;
    }
  }

  &__title {
    @include font('Inter', 40px, 700);
    line-height: 51px;
    letter-spacing: -0.013em;
  }

  &__button {
    @include font('Inter', 16px, 400);
    line-height: 1;
    margin-top: 56px;
    cursor: pointer;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    min-width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid $border-color--white;
    color: $border-color--white;
    transition: all .3s ease;
    span {
      transform: rotate(-90deg); // right arrow is not supported by Inter font
    }
    &:hover,
    &:focus,
    &--active {
      background-color: $border-color--white;
      color: $text-color--black;
    }
  }

  &--staff-augmentation /deep/ .model-card {
    &__title span {
      color: $text-color--red-dark;
    }
  }

  &--dedicated-team /deep/ .model-card {
    &__title span {
      color: $text-color--yellow;
    }
  }

  &--temp-to-hire {
    /deep/ .model-card {
      &__link {
        padding-top: 120px;
      }
      &__title span {
        color: $text-color--blue;
      }
      &__button {
        margin-top: 12%;
      }
      &__animation {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        line-height: 0;
      }
    }
  }

  &--technical-assessment {
    /deep/ .model-card {
      &__link {
        padding-top: 120px;
      }
      &__title span {
        color: $text-color--red-dark;
      }
      &__button {
        margin-top: 8%;
      }
      &__animation {
        width: 92%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        line-height: 0;
      }
    }
  }

  &--team-supervision /deep/ .model-card {
    &__title span {
      color: $text-color--green-pale;
    }
  }

  &--transferring-projects /deep/ .model-card {
    &__title span {
      color: $text-color--purple;
    }
  }

  @media screen and (max-width: 1285px) {
    &__link {
      padding: 38px;
    }
  }

  @media screen and (max-width: 1200px) {
    &--full {
      .model-card {
        &__link {
          padding: 32px;
          padding-top: 64px;
        }
        &__title {
          font-size: 30px;
          line-height: 37px;
        }
      }
    }

    &__link {
      padding: 32px;
    }

    &__title {
      font-size: 30px;
      line-height: 37px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: auto;
    &--full {
      grid-column: auto;
      .model-card {
        &__link {
          padding: 32px;
          padding-bottom: 80px;
        }
        &__content {
          text-align: left;
          align-items: flex-start;
        }
      }
    }

    &__link {
      padding: 32px;
    }
  }
}
</style>
