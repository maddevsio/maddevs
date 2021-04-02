import { mount } from '@vue/test-utils'
import CardSupportedGadgets from '@/components/Cases/kaf/CardSupportedGadgets'

describe('card supported gadgets', () => {
  let wrapper
  const props = {
    title: 'title',
    width: 0,
    height: 0,
    file: 'macbook-pro',
    alt: 'alt',
  }

  beforeEach(() => {
    wrapper = mount(CardSupportedGadgets, {
      propsData: props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
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
