export default function (animation, lottieId) {
  const observerCallback = entries => entries.forEach(({ isIntersecting }) => {
    if (isIntersecting) animation.play()
  })

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 1.0,
  })

  observer.observe(document.getElementById(lottieId))
}
