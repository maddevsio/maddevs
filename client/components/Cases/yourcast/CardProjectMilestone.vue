<template>
  <div
    class="card"
    :class="`background-color-${background}`"
    data-testid="test-card-project-milestone"
    @mouseover="play"
    @mouseout="pause"
  >
    <div
      class="card_lottie"
    >
      <Lottie
        :options="lottieOptions"
        @animCreated="animCreatedHandler"
      />
    </div>
    <div class="card_text-content">
      <h4 class="case_title_h4 card_title">
        {{ title }}
      </h4>
      <TextParagraph class="card_paragraph">
        {{ description }}
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'CardProjectMilestone',
  components: {
    TextParagraph,
    Lottie,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    background: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      animation: null,
    }
  },

  computed: {
    lottieOptions() {
      return {
        animationData: require(`@/assets/lottie/yourcast/${this.title}.json`),
        autoplay: false,
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

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border-radius: 8px;
  cursor: pointer;

  &_title,
  &_paragraph {
    color: $text-color--white-primary;
  }

  &_title {
    margin-bottom: 8px;
  }

  &_lottie {
    min-width: 61px;
    max-width: 61px;
    height: 61px;
    margin-right: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    &_lottie {
      min-width: 51px;
      max-width: 51px;
      height: 51px;
      margin-right: 0;
    }

    &_title {
      margin-top: 16px;
    }
  }
}
</style>
