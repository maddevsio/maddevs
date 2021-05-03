import { shallowMount } from '@vue/test-utils'
import GodeeLayout from '@/layouts/godee.vue'

jest.mock('@/helpers/intercom', () => jest.fn())

const stubs = ['Nuxt']

describe('GodeeLayout layout', () => {
  it('renders correctly', () => {
    const SCROLL_FN = jest.fn()

    const QUERY_SELECTOR = jest.fn(() => ({
      addEventListener: SCROLL_FN,
      removeEventListener: SCROLL_FN,
    }))

    document.getElementById = QUERY_SELECTOR
    const wrapper = shallowMount(GodeeLayout, {
      stubs,
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should correct call intercom function', () => {
    const EVENT_LISTENER = jest.fn((listenerType, callback) => {
      callback()
    })

    const QUERY_SELECTOR = jest.fn(() => ({
      addEventListener: EVENT_LISTENER,
      removeEventListener: jest.fn(),
    }))

    document.getElementById = QUERY_SELECTOR
    shallowMount(GodeeLayout, {
      stubs,
    })
    window.addEventListener = EVENT_LISTENER

    expect(EVENT_LISTENER).toHaveBeenCalledTimes(1)
  })
})
