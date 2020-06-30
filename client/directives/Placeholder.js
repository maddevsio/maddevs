const listenInputEvent = e => {
  const pl = e.target.parentNode.querySelector('.v-placeholder');
  if (e.target && e.target.value !== '') {
    pl.style.opacity = 0;
    pl.style.visibility = 'hidden';
  } else {
    pl.style.opacity = 1;
    pl.style.visibility = 'visible';
  }
};

const Placeholder = {
  bind(el, binding) {
    const placeholder = document.createElement('div');
    const span = document.createElement('span');
    const asterisk = document.createElement('div');
    el.style.position = 'relative';
    span.innerText = binding.value;
    asterisk.innerText = '*';
    asterisk.style.color = 'red';
    asterisk.style.marginLeft = '3px';
    placeholder.classList.add('v-placeholder');
    placeholder.style.pointerEvents = 'none';
    placeholder.style.position = 'absolute';
    placeholder.style.top = 0;
    placeholder.style.left = 0;
    placeholder.style.display = 'flex';
    placeholder.style.alignItems = 'center';
    placeholder.appendChild(span);
    placeholder.appendChild(asterisk);
    el.appendChild(placeholder);
    const input = el.querySelector('input');
    input.addEventListener('input', listenInputEvent);
  },
  unbind(el) {
    if (el) {
      el.removeEventListener('input', listenInputEvent);
    }
  }
};

export default Placeholder;
