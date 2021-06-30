import ScrollToPositionsLink from '@/components/Careers/shared/ScrollToPositionsLink'
import scrollToElementMixin from '@/mixins/scrollToElementMixin'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacancies: () => ([]),
    vacanciesLoaded: () => true,
  },
}

const stubs = ['UnderlinedButton']

const WINDOW_SCROLL_TO = jest.fn()

const TARGET_SELECTOR = 'open-positions'
const TARGET_ELEMENT = document.createElement('div')
TARGET_ELEMENT.setAttribute('id', TARGET_SELECTOR)

describe('Scroll to element Mixin', () => {
  let wrapper
  window.scrollTo = WINDOW_SCROLL_TO

  beforeEach(() => {
    wrapper = shallowMount(ScrollToPositionsLink, {
      localVue,
      stubs,
      mixins: [scrollToElementMixin],
      store,
      container: document.body.appendChild(TARGET_ELEMENT),
    })
  })

  it('should return null if selector is not passed', () => {
    expect(wrapper.vm.scrollToElement()).toBeNull()
  })

  it('should call window.scrollTo', () => {
    const existingDOMStyles = global.document.documentElement.style
    Object.defineProperty(global.document.documentElement, 'style', { value: {}, writable: true })
    wrapper.vm.scrollToElement(`#${TARGET_SELECTOR}`)
    expect(WINDOW_SCROLL_TO).toHaveBeenCalledWith(0, TARGET_ELEMENT.offsetTop)
    global.document.documentElement.style = existingDOMStyles
  })

  it('should call window.scrollTo with smooth behavior', () => {
    wrapper.vm.scrollToElement(`#${TARGET_SELECTOR}`)
    expect(WINDOW_SCROLL_TO).toHaveBeenCalledWith({ top: TARGET_ELEMENT.offsetTop, behavior: 'smooth' })
  })
})
