import { mount } from '@vue/test-utils'
import SupportedGadgets from '../client/components/Cases/Kaf/SupportedGadgets'

describe('supported gadgets', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SupportedGadgets)
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
