export default function playLottie(animation, lottieId) {
  const observerCallback = entries => entries.forEach(({ isIntersecting }) => {
    if (isIntersecting) {
      try {
        animation.play()
      } catch (err) {
        // prevent catch
      }
    }
  })

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.6,
  })

  const element = document.getElementById(lottieId)
  if (element) observer.observe(element)
}
