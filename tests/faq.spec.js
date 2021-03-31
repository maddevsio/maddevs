import { mount } from '@vue/test-utils'
import FAQ from '@/components/core/FAQ'

describe('fAQ', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FAQ)
  })
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
