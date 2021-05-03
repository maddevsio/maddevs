import { shallowMount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

jest.mock('@/helpers/intercom', () => jest.fn())

const stubs = ['Header', 'Nuxt', 'Footer']
const mocks = {
  $nextTick: jest.fn(callback => {
    if (typeof callback === 'function') {
      callback()
    }
  }),
}
const SCROLL_FN = jest.fn()

describe('Default layout', () => {
  let wrapper
  const nextTick = jest.fn()
  mocks.$nextTick = nextTick

  beforeEach(() => {
    wrapper = shallowMount(Default, {
      stubs,
      mocks,
    })
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should correctly work initHashLinks method if hash false', () => {
    const QUERY_SELECTOR = jest.fn(() => ({
      scrollIntoView: SCROLL_FN,
    }))
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }

    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)

    expect(QUERY_SELECTOR).toHaveBeenCalledTimes(0)
    expect(SCROLL_FN).toHaveBeenCalledTimes(0)
  })

  it('should correctly work initHashLinks method if hash true but selection not found', () => {
    const QUERY_SELECTOR = jest.fn()
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }
    window.location.hash = true
    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)

    expect(QUERY_SELECTOR).toHaveBeenCalledTimes(1)
    expect(SCROLL_FN).toHaveBeenCalledTimes(0)
  })

  it('should correctly work initHashLinks method', () => {
    const QUERY_SELECTOR = jest.fn(() => ({
      scrollIntoView: SCROLL_FN,
    }))
    const callObject = {
      $nextTick: jest.fn(callback => {
        callback()
      }),
    }
    window.location.hash = true
    document.querySelector = QUERY_SELECTOR

    wrapper.vm.$options.methods.initHashLinks.call(callObject)
    expect(QUERY_SELECTOR).toHaveBeenCalledTimes(1)
    expect(SCROLL_FN).toHaveBeenCalledWith({ block: 'start' })
  })

  it('should correctly work loadIntercomScript method', () => {
    const EVENT_LISTENER = jest.fn((listenerType, callback) => {
      callback()
    })

    window.addEventListener = EVENT_LISTENER
    wrapper.vm.$options.methods.loadIntercomScript()

    expect(EVENT_LISTENER).toHaveBeenCalledTimes(1)
  })
})
