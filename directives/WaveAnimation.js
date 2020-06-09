const startAnimation = e => {
  try {
    const clientWidth = e.target.getElementsByClassName('wave')[0].clientWidth / 2;
    const clientHeight = e.target.getElementsByClassName('wave')[0].clientHeight / 2;
    const div = e.target.getElementsByClassName('wave')[0];
    div.style.left = `${e.offsetX - clientWidth}px`;
    div.style.top = `${e.offsetY - clientHeight}px`;
    div.classList.add('waves');
    setTimeout(() => {
      div.classList.remove('waves');
    }, 500);
    return true;
  } catch (error) {
    return false;
  }
};

const WaveAnimation = {
  bind(el, binding) {
    const wave = document.createElement('div');
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    wave.classList.add('wave');
    if (binding.modifiers.dark && binding.expression === 'true') {
      wave.classList.add('wave--dark');
    }
    el.appendChild(wave);
    el.addEventListener('click', startAnimation);
  },
  unbind(el) {
    el.removeEventListener('click', startAnimation);
  }
};

export default WaveAnimation;
