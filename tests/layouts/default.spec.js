import { mount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

const stubs = ['Header', 'Nuxt', 'Footer']
const mocks = {
  $nextTick: jest.fn(callback => {
    if (typeof callback === 'function') {
      callback()
    }
  }),
}

describe('Default layout', () => {
  let wrapper
  const nextTick = jest.fn()
  mocks.$nextTick = nextTick

  beforeEach(() => {
    wrapper = mount(Default, {
      stubs,
      mocks,
    })
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
