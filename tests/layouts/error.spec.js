import { shallowMount } from '@vue/test-utils'
import Error from '@/layouts/error.vue'

const stubs = ['NuxtLink']

describe('Error layout', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Error, {
      stubs,
    })
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
