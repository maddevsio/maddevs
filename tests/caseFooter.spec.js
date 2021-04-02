import { mount } from '@vue/test-utils'
import Footer from '@/components/Cases/shared/CaseFooter'

describe('footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
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
