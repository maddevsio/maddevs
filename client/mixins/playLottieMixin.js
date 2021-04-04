import playLottie from '@/helpers/playLottie'

function playLottieMixin(lottieId, options) {
  return {
    data: () => ({
      options,
    }),

    methods: {
      handleAnimation(animation) {
        playLottie(animation, lottieId)
      },
    },
  }
}

export default playLottieMixin
