import { mount } from '@vue/test-utils'
import TextQuote from '@/components/Cases/shared/TextQuote'

describe('text quote', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TextQuote, {
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
