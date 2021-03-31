const refreshLazyImages = () => {
  const images = document.querySelectorAll('img.img_lazy')
  images.forEach(image => {
    image.src = image.dataset.src
    image.classList.remove('img_lazy')
  })
}

export default refreshLazyImages
