import { mount } from '@vue/test-utils'
import ListItemBoxCheckMark from '@/components/Cases/ListItemBoxCheckMark'

describe('list item box checkMark', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListItemBoxCheckMark, {
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
