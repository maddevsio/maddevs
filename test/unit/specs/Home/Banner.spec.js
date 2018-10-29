import Vue from 'vue'
import Banner from '@/components/Home/Banner'

describe('Banner.vue', () => {
  it('There must be a link to the video on youtube with options', () => {
    const Constructor = Vue.extend(Banner)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#bgVideo').getAttribute('src'))
      .toEqual('https://www.youtube.com/embed/lmGJTVyOfYM?loop=1&autoplay=1&mute=1&enablejsapi=1&controls=0&showinfo=0')
  })
})