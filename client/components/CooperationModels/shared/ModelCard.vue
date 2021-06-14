<template>
  <div
    class="model-card"
    :class="[`model-card--${uid}`, full ? 'model-card--full' : '']"
    @mouseover="play"
    @mouseout="pause"
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
        v-html="model.title"
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
import { cooperationModels } from '@/data/cooperationModels'
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
  },

  data() {
    return {
      model: cooperationModels[this.uid],
      animation: null,
    }
  },

  computed: {
    lottieOptions() {
      return {
        animationData: require(`@/assets/lottie/cooperationModels/${this.model.animation}.json`),
        autoplay: false,
        loop: false,
      }
    },
  },

  methods: {
    animCreatedHandler(animation) {
      this.animation = animation
    },

    play() {
      try {
        this.animation.play()
      } catch (err) {
        // prevent catch
      }
    },

    pause() {
      this.animation.pause()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.model-card {
  position: relative;
  overflow: hidden;
  padding: 80px;
  padding-bottom: 64px;
  background-color: $bgcolor--black-pale;
  border-radius: 4px;
  font-weight: 700;
  color: $text-color--white-primary;
  font-size: 40px;
  line-height: 51px;
  letter-spacing: -0.013em;
  &--full {
    grid-column: auto / span 2;
    font-size: 56px;
    line-height: 67px;
    text-align: center;
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

  &__animation {
    z-index: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
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
    transition: all .2s;
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
    &__link {
      margin-top: 63px;
    }
  }

  &--dedicated-project-based-team /deep/ .model-card {
    &__title span {
      color: $text-color--yellow;
    }
    &__link {
      margin-top: 63px;
    }
  }

  &--temp-to-hire /deep/ .model-card {
    &__title span {
      color: $text-color--blue;
    }
    &__link {
      margin-top: 130px;
    }
    &__animation {
      width: 100%;
      position: absolute;
      bottom: -13px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &--technical-assessment-and-consulting /deep/ .model-card {
    &__title span {
      color: $text-color--red-dark;
    }
    &__link {
      margin-top: 84px;
    }
    &__animation {
      width: 95%;
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &--effective-team-supervision /deep/ .model-card {
    &__title span {
      color: $text-color--green-pale;
    }
    &__link {
      margin-top: 116px;
    }
  }

  &--transferring-a-project /deep/ .model-card {
    &__title span {
      color: $text-color--purple;
    }
    &__link {
      margin-top: 119px;
    }
  }
}
</style>
