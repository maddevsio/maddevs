const startAnimation = e => {
  try {
    const clientWidth = e.target.getElementsByClassName('wave')[0].clientWidth / 2
    const clientHeight = e.target.getElementsByClassName('wave')[0].clientHeight / 2
    const div = e.target.getElementsByClassName('wave')[0]
    div.style.left = `${e.offsetX - clientWidth}px`
    div.style.top = `${e.offsetY - clientHeight}px`
    div.classList.add('waves')
    setTimeout(() => {
      div.classList.remove('waves')
    }, 500)
    return true
  } catch (error) {
    return false
  }
}

const createWave = (el, binding) => {
  if (binding.value && binding.value !== false) {
    const wave = document.createElement('div')
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    wave.classList.add('wave')
    if (binding.modifiers.dark) {
      wave.classList.add('wave--dark')
    }
    el.appendChild(wave)
    el.addEventListener('click', startAnimation)
  }
}

const WaveAnimation = {
  bind(el, binding) {
    createWave(el, binding)
  },
  update(el, binding) {
    const wave = el.querySelector('.wave')
    if (wave) {
      el.removeChild(wave)
    } else {
      createWave(el, binding)
    }
  },
  unbind(el) {
    if (el) {
      el.removeEventListener('click', startAnimation)
    }
  },
}

export default WaveAnimation
