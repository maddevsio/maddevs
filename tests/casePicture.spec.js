import { mount } from '@vue/test-utils'

import Picture from '@/components/Cases/shared/Picture'

describe('picture', () => {
  let wrapper
  const props = {
    folder: 'nambafood',
    file: 'apple-iphone-xr-silver',
    extension: 'png',
    alt: 'alt',
    lazy: true,
    shadow: true,
    radius: false,
    height: 0,
    width: 0,
    background: false,
  }

  beforeEach(() => {
    wrapper = mount(Picture, {
      propsData: props,
      mocks: {
        getMediaFromS3: () => 's3 image url',
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })
})
