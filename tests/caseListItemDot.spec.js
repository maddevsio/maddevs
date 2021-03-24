import { mount } from '@vue/test-utils'
import ListItemDot from '@/components/Cases/ListItemDot'

describe('list item dot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListItemDot, {
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
