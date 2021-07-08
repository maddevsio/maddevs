import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import Error from '@/layouts/error-layout'

const stubs = ['Nuxt']

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
