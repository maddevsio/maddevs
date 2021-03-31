import { mount } from '@vue/test-utils'
import FAQ from '@/pages/faq'

describe('fAQ page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FAQ)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
