import { mount } from '@vue/test-utils'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

describe('text paragraph', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TextParagraph, {
      propsData: {
        color: '#000000',
      },
      slots: {
        default: 'Main Content',
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
  // --------------------- //

  it('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content')
  })

  it('should have correct style', () => {
    const paragraph = wrapper.find('.case_paragraph')
    expect(paragraph.element.style.getPropertyValue('color')).toEqual('rgb(0, 0, 0)')
  })
})
