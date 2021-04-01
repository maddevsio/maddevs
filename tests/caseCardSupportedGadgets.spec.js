import { mount } from '@vue/test-utils'
import CardSupportedGadgets from '@/components/Cases/kaf/CardSupportedGadgets'

describe('card supported gadgets', () => {
  let wrapper
  const props = {
    gadget: {
      title: 'title',
      width: 0,
      height: 0,
      fileName: 'macbook-pro',
      alt: 'alt',
    },
  }

  beforeEach(() => {
    wrapper = mount(CardSupportedGadgets, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // ---------
})
