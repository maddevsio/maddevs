<template>
  <div
    class="card"
    :class="`background-color-${projectMilestone.backgroundColor}`"
  >
    <div
      class="card_lottie"
      @mouseover="play"
      @mouseout="pause"
    >
      <Lottie
        :options="lottieOptions"
        @animCreated="animCreatedHandler"
      />
    </div>
    <div class="card_text-content">
      <h4
        class="case_title_h4 card_title"
      >
        {{ projectMilestone.title }}
      </h4>
      <TextParagraph
        class="card_paragraph"
      >
        {{ projectMilestone.description }}
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'CardProjectMilestone',
  components: {
    TextParagraph,
    Lottie,
  },

  props: {
    projectMilestone: {
      type: Object,
      default: () => {},

      title: {
        type: String,
        default: '',
      },

      description: {
        type: String,
        default: '',
      },

      backgroundColor: {
        type: String,
        default: '',
      },
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
        animationData: require(`@/assets/lottie/kaf/${this.$props.projectMilestone.title}.json`),
        autoplay: false,
      }
    },
  },

  methods: {
    animCreatedHandler(animation) {
      this.animation = animation
    },

    play() {
      this.animation.play()
    },

    pause() {
      this.animation.pause()
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/cases/_mixins';

.card {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border-radius: 8px;

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
    cursor: pointer;
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
