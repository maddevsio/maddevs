import { mount } from '@vue/test-utils'
import TextQuoteBox from '@/components/Cases/TextQuoteBox'

describe('text quote box', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TextQuoteBox, {
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
})
