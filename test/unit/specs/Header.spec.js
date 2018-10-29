import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('Should be a link to the main page', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header-wrap a').href)
      .toEqual('/')
  })
})

describe('Header.vue', () => {
  it('There must be a correct way to the logo of the site', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header-logo').getAttribute('src'))
      .toEqual('../assets/img/svg/logo.svg')
  })
})

describe('Header.vue', () => {
  it('There must be a correct path to the icon to open the menu', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.mobile-menu_btn img').getAttribute('src'))
      .toEqual('../assets/img/svg/menu-btn.svg')
  })
})
