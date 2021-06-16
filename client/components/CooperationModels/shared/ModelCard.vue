<template>
  <div
    v-if="uid"
    ref="card"
    class="model-card"
    :class="[`model-card--${uid}`, full ? 'model-card--full' : '']"
  >
    <div class="model-card__animation">
      <Lottie
        :options="lottieOptions"
        @animCreated="animCreatedHandler"
      />
    </div>
    <div class="model-card__content">
      <h3
        class="model-card__title"
        v-html="title"
      />
      <NuxtLink
        v-if="uid"
        :to="`/cooperation-models/${uid}/`"
        class="model-card__link"
      >
        →
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'ModelCard',
  components: {
    Lottie,
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

    title: {
      type: String,
      default: '',
    },

    animationName: {
      type: String,
      default: '',
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
        animationData: require(`@/assets/lottie/cooperationModels/${this.animationName}.json`),
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
      const screenPercent = window.innerWidth < 768 ? 50 : this.startAnimationOnScreenPercent

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
@import '@/assets/styles/_vars';

.model-card {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $bgcolor--black-pale;
  color: $text-color--white-primary;
  border-radius: 4px;
  padding: 80px;
  padding-bottom: 64px;
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
    .model-card__link {
      background-color: $border-color--white;
      color: $text-color--black;
    }
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

  &__link {
    @include font('Inter', 16px, 400);
    margin-top: 56px;
    cursor: pointer;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid $border-color--white;
    color: $border-color--white;
    transition: all .3s ease;
    &:hover,
    &:focus,
    &--active {
      background-color: $border-color--white;
      color: $text-color--black;
    }
  }

  &--augmented-staff-members /deep/ .model-card {
    &__title span {
      color: $text-color--red-dark;
    }
  }

  &--dedicated-project-based-team /deep/ .model-card {
    &__title span {
      color: $text-color--yellow;
    }
  }

  &--temp-to-hire {
    padding-top: 120px;
    /deep/ .model-card {
      &__title span {
        color: $text-color--blue;
      }
      &__link {
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

  &--technical-assessment-and-consulting {
    padding-top: 120px;
    /deep/ .model-card {
      &__title span {
        color: $text-color--red-dark;
      }
      &__link {
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

  &--effective-team-supervision /deep/ .model-card {
    &__title span {
      color: $text-color--green-pale;
    }
  }

  &--transferring-a-project /deep/ .model-card {
    &__title span {
      color: $text-color--purple;
    }
  }

  @media screen and (max-width: 1285px) {
    padding: 38px;
  }

  @media screen and (max-width: 1200px) {
    padding: 32px;
    &--full {
      padding: 32px;
      padding-top: 64px;
      .model-card {
        &__title {
          font-size: 30px;
          line-height: 37px;
        }
      }
    }

    &__title {
      font-size: 30px;
      line-height: 37px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: auto;
    padding: 32px;
    &--full {
      padding: 32px;
      padding-bottom: 80px;
      grid-column: auto;
      .model-card {
        &__content {
          text-align: left;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
