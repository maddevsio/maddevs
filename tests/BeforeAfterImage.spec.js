import { mount } from '@vue/test-utils'
import UIBeforeAfterImage from '@/components/shared/UIBeforeAfterImage'

describe('uIBeforeAfterImage component', () => {
  let wrapper
  const props = {
    baseWidth: '1000',
    baseHeight: '578.47',
    beforeImage: 'Cases/godee/png/application-before.png',
    afterImage: 'Cases/godee/png/application-after.png',
    alt: 'GoDee Public Transportation App at 2018 and now.',
  }

  beforeEach(() => {
    wrapper = mount(UIBeforeAfterImage, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // --------------------- //
  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })

  it('afterImage should render correctly', () => {
    const afterImage = wrapper.find('.comparsion-image_after')
    expect(afterImage.attributes('alt')).toMatch(props.alt)
    expect(afterImage.attributes('width')).toMatch(props.baseWidth)
    expect(afterImage.attributes('height')).toMatch(props.baseHeight)
  })
})
