import { mount } from '@vue/test-utils'

import Picture from '@/components/Cases/Picture'

describe('picture', () => {
  let wrapper
  const props = {
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
    lazyLoading: true,
    boxShadow: true,
    borderRadius: false,
    height: 0,
    width: 0,
    backgroundColor: false,
  }

  beforeEach(() => {
    wrapper = mount(Picture, {
      propsData: props,
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
